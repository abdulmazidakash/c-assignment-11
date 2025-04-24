import React, { useContext, useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { AuthContext } from "../providers/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Typewriter } from "react-simple-typewriter";
import Spinner from "../components/Spinner";
import { Helmet } from "react-helmet-async";

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
    return <Spinner />;
  }

  if (!artifacts.length) {
    return (
      <div className="flex justify-center items-center h-screen bg-white dark:bg-gray-900 transition-all">
        <p className="text-gray-600 dark:text-gray-300 text-lg font-semibold">
          You haven't liked any artifacts yet.
        </p>
      </div>
    );
  }

  return (
    <div className="container my-8 mx-auto rounded-lg p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-all">
      <Helmet>
        <title>Liked Artifacts | Artifact Atlas</title>
      </Helmet>
      
      <h2 className="text-4xl font-bold text-center my-8 bg-gradient-to-r from-gray-500 to-rose-500 bg-clip-text text-transparent dark:from-gray-300 dark:to-rose-300">
        <Typewriter
          words={["Liked Artifacts!"]}
          cursor
          cursorStyle={"|"}
          loop={Infinity}
          typeSpeed={70}
          delaySpeed={1000}
          deleteSpeed={50}
        />
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full rounded-lg shadow-md bg-gradient-to-b from-rose-50 to-purple-50 dark:bg-gray-800">
          <thead>
            <tr className="bg-rose-900 text-white dark:bg-gray-700 dark:text-white">
              <th className="text-center">#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Type</th>
              <th>Context</th>
              <th>Likes</th>
            </tr>
          </thead>
          <tbody className="dark:bg-gray-800">
            {artifacts.map((artifact, index) => (
              <tr
                key={artifact.artifact._id}
                className="hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                <td className="text-center font-bold">{index + 1}</td>
                <td>
                  <img
                    src={artifact.artifact.image}
                    alt={artifact.artifact.name}
                    className="w-16 h-16 rounded-md object-cover border border-rose-300 dark:border-gray-600"
                  />
                </td>
                <td className="font-semibold text-gray-800 dark:text-gray-200">
                  {artifact.artifact.name}
                </td>
                <td className="italic text-gray-600 dark:text-gray-400">
                  {artifact.artifact.type}
                </td>
                <td className="truncate max-w-xs text-gray-600 dark:text-gray-400">
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
    </div>
  );
};

export default LikedArtifacts;
