import React, { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai"; // React Icon
import axios from "axios";
import toast from "react-hot-toast";

const LikedArtifacts = () => {
  const [likedArtifacts, setLikedArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLikedArtifacts();
  }, []);

  const fetchLikedArtifacts = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/add-like`); // Update endpoint if needed
      setLikedArtifacts(data);
    } catch (error) {
      console.error("Error fetching liked artifacts:", error);
      toast.error("Failed to load liked artifacts.");
    } finally {
      setLoading(false);
    }
  };

  const handleUnlike = async (artifactId) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/unlike`, { id: artifactId }); // Adjust endpoint and payload
      setLikedArtifacts((prev) =>
        prev.filter((artifact) => artifact.id !== artifactId)
      );
      toast.success("Artifact unliked successfully!");
    } catch (error) {
      console.error("Error unliking artifact:", error);
      toast.error("Failed to unlike artifact.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="loading loading-spinner loading-lg mb-4"></div>
          <p className="text-lg font-semibold">Loading liked artifacts...</p>
        </div>
      </div>
    );
  }

  if (!likedArtifacts.length) {
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
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Liked Artifacts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {likedArtifacts.map((artifact) => (
          <div
            key={artifact.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={artifact.image}
              alt={artifact.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">{artifact.name}</h2>
              <p className="text-gray-600 text-sm truncate">{artifact.context}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-500 text-sm italic">{artifact.type}</span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleUnlike(artifact.id)}
                    className="text-red-500 flex items-center gap-1"
                  >
                    <AiFillHeart size={20} />
                  </button>
                  <span className="text-red-500">{artifact.like_count}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedArtifacts;

