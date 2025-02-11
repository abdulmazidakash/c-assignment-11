
import React, { useContext, useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { Helmet } from "react-helmet";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Typewriter } from "react-simple-typewriter";

const LikedArtifacts = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllArtifacts();
  }, []);

  const fetchAllArtifacts = async () => {
    try {
      const { data } = await axiosSecure.get(`/liked/${user?.email}`);
      setArtifacts(data);
    } catch (error) {
      console.error("Error fetching artifacts:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex font-bold text-gray-500 text-4xl gap-2 items-center justify-center w-full min-h-[calc(100vh-305px)]">
        <span className="loading loading-spinner text-error w-14"></span>
        loading.......
      </div>
    );
  }

  if (!artifacts.length) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg font-bold">
          You haven't liked any artifacts yet.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <Helmet>
        <title>Liked Artifacts | Artifact Atlas</title>
      </Helmet>
      <h2 className="text-4xl font-bold text-center my-8 bg-gradient-to-r from-gray-500 to-rose-500 bg-clip-text text-transparent">
        <Typewriter
          words={["Liked Artifacts!"]}
          cursor
          cursorStyle={"|"}
          loop={Infinity}
          typeSpeed={70}
          delaySpeed={1000}
          deleteSpeed={50}
        ></Typewriter>
      </h2>
      <hr className="border-t-2 border-gradient-to-r from-purple-500 to-rose-500 w-3/4 my-4 mx-auto" />
      <div className="overflow-x-auto">
        <table className="table w-full rounded-lg shadow-md bg-gradient-to-b from-rose-50 to-purple-50">
          <thead>
            <tr className="bg-rose-900 text-white">
              <th className="text-center">#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Type</th>
              <th>Context</th>
              <th>Likes</th>
            </tr>
          </thead>
          <tbody>
            {artifacts.map((artifact, index) => (
              <tr
                key={artifact.artifact.id}
                className="hover:bg-gradient-to-r hover:from-purple-100 hover:to-rose-100"
              >
                <td className="text-center font-bold">{index + 1}</td>
                <td>
                  <img
                    src={artifact.artifact.image}
                    alt={artifact.artifact.name}
                    className="w-16 h-16 rounded-md object-cover border border-rose-300"
                  />
                </td>
                <td className="font-semibold text-gray-800">
                  {artifact.artifact.name}
                </td>
                <td className="italic text-gray-600">{artifact.artifact.type}</td>
                <td className="truncate max-w-xs text-gray-600">
                  {artifact.artifact.context}
                </td>
                <td className="flex items-center gap-1 text-rose-500 font-medium">
                  <AiFillHeart size={20} />
                  <span>{artifact.artifact.like_count}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <hr className="border-t-2 border-gradient-to-r from-purple-500 to-rose-500 w-3/4 my-4 mx-auto" />
    </div>
  );
};

export default LikedArtifacts;
