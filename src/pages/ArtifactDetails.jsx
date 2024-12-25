
import { useContext, useEffect, useState } from "react";
import { data, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../hooks/useAxiosSecure";

function ArtifactDetails() {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const {user} = useContext(AuthContext);
  const [artifact, setArtifact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    fetchArtifactDetails();
  }, []);

  const fetchArtifactDetails = async () => {
    try {
      const { data } = await axiosSecure.get(
        `/artifact/${id}`
      );
    
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
      setLikeCount((prevCount) =>
        newLikeState ? prevCount + 1 : prevCount - 1
      );

      const { data } = await axiosSecure.post(`/add-like`,
        {
          artifactId: id, 
          liked: newLikeState,
          artifact,
          email: user?.email,
          
        }
      );
      

      toast.success(newLikeState ? "Artifact liked!" : "Like removed!");
      console.log(data);
      fetchArtifactDetails()
    } catch (error) {
      console.error("Error toggling like:", error);
      toast.error(error?.response?.data);
    }
  };

  if (loading) {
    return (
      <div className='flex font-bold text-gray-500 text-4xl gap-2 items-center justify-center w-full min-h-[calc(100vh-305px)]'><span className="loading loading-spinner text-error w-14"></span>loading.......</div>
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
    <div className="container mx-auto p-6">
      <Helmet>
        <title>{artifact.name} | Artifact Atlas</title>
      </Helmet>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={artifact.image}
          alt={artifact.name}
          className="w-full h-96 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{artifact.name}</h1>
          <p className="text-gray-600 mb-6">{artifact.context}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-sm font-semibold text-gray-600">Artifact Type</p>
              <p className="text-lg font-bold text-gray-800">{artifact.type}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-sm font-semibold text-gray-600">Created At</p>
              <p className="text-lg font-bold text-gray-800">{artifact.createdAt}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-sm font-semibold text-gray-600">Discovered At</p>
              <p className="text-lg font-bold text-gray-800">{artifact.discoveredAt}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-sm font-semibold text-gray-600">Discovered By</p>
              <p className="text-lg font-bold text-gray-800">{artifact.discoveredBy}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-sm font-semibold text-gray-600">Present Location</p>
              <p className="text-lg font-bold text-gray-800">{artifact.location}</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md">
              <p className="text-sm font-semibold text-gray-600">Likes</p>
              <p className="text-lg font-bold text-gray-800">{artifact.like_count}</p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6 flex-row-reverse">
            <button
              onClick={handleLike}
              className={`btn flex items-center px-4 py-2 rounded ${
                isLiked ? "bg-rose-500 hover:bg-rose-600" : "bg-gray-200 hover:bg-gray-300"
              } text-white`}
            >
              {isLiked ? <AiFillHeart size={20} /> : <AiOutlineHeart size={20} />}
              <span className="ml-2">{isLiked ? "Unlike" : "Like"}</span>
            </button>
            <p className="text-sm text-gray-500 italic">
              Added by: {artifact.adderName} ({artifact.adderEmail})
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtifactDetails;
