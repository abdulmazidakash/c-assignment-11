
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import {
  AiFillHeart,
  AiOutlineHeart,
  AiFillClockCircle,
  AiOutlineEnvironment,
} from "react-icons/ai";
import { MdCategory, MdPerson } from "react-icons/md";
import { BsCalendar2Check, BsGeoAlt } from "react-icons/bs";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../hooks/useAxiosSecure";

function ArtifactDetails() {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [artifact, setArtifact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    fetchArtifactDetails();
  }, []);

  const fetchArtifactDetails = async () => {
    try {
      const { data } = await axiosSecure.get(`/artifact/${id}`);
      setArtifact(data);
      setLikeCount(data.like_count);
      setIsLiked(data.isLiked || false);
    } catch (error) {
      console.error("Error fetching artifact details:", error);
      toast.error("Failed to load artifact details.");
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async () => {
    try {
      const newLikeState = !isLiked;
      setIsLiked(newLikeState);
      setLikeCount((prevCount) => (newLikeState ? prevCount + 1 : prevCount - 1));

      await axiosSecure.post(`/add-like`, {
        artifactId: id,
        liked: newLikeState,
        artifact,
        email: user?.email,
      });

      toast.success(newLikeState ? "Artifact liked!" : "Like removed!");
      fetchArtifactDetails();
    } catch (error) {
      console.error("Error toggling like:", error);
      toast.error(error?.response?.data || "An error occurred.");
    }
  };

  if (loading) {
    return (
      <div className="flex font-bold text-gray-500 text-4xl gap-2 items-center justify-center w-full min-h-[calc(100vh-305px)]">
        <span className="loading loading-spinner text-error w-14"></span>Loading...
      </div>
    );
  }

  if (!artifact) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg font-bold">Artifact not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <Helmet>
        <title>{artifact.name} | Artifact Atlas</title>
      </Helmet>
      <div className="bg-gradient-to-br from-pink-50 via-rose-100 to-teal-200 shadow-lg rounded-xl overflow-hidden">
        <img
          src={artifact.image}
          alt={artifact.name}
          className="w-full h-96 object-cover rounded-t-xl"
        />
        <div className="p-6">
          <h1 className="text-4xl font-extrabold text-rose-700 mb-4">
            {artifact.name}
          </h1>
          <p className="text-gray-800 mb-6">{artifact.context}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
            {[
              {
                label: "Artifact Type",
                value: artifact.type,
                icon: <MdCategory size={20} className="text-rose-500" />,
              },
              {
                label: "Created At",
                value: artifact.createdAt,
                icon: <AiFillClockCircle size={20} className="text-green-500" />,
              },
              {
                label: "Discovered At",
                value: artifact.discoveredAt,
                icon: <BsCalendar2Check size={20} className="text-blue-500" />,
              },
              {
                label: "Discovered By",
                value: artifact.discoveredBy,
                icon: <MdPerson size={20} className="text-yellow-500" />,
              },
              {
                label: "Present Location",
                value: artifact.location,
                icon: <BsGeoAlt size={20} className="text-purple-500" />,
              },
              {
                label: "Likes",
                value: likeCount,
                icon: isLiked ? (
                  <AiFillHeart size={20} className="text-red-500" />
                ) : (
                  <AiOutlineHeart size={20} className="text-gray-500" />
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-white p-4 rounded-lg shadow hover:shadow-md transition-all"
              >
                <div>{item.icon}</div>
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {item.label}
                  </p>
                  <p className="text-lg font-bold text-gray-900">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center mt-6">
            <button
              onClick={handleLike}
              className={`btn flex items-center px-4 py-2 rounded ${
                isLiked ? "bg-rose-600 hover:bg-rose-700" : "bg-gray-300 hover:bg-gray-400"
              } text-white`}
            >
              {isLiked ? <AiFillHeart size={20} /> : <AiOutlineHeart size={20} />}
              <span className="ml-2">{isLiked ? "Unlike" : "Like"}</span>
            </button>
            <p className="text-sm text-gray-600 italic">
              Added by: {artifact.adderName} ({artifact.adderEmail})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtifactDetails;
