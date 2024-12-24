import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

function ArtifactDetails() {
  const { id } = useParams(); // Get artifact ID from URL
  const [artifact, setArtifact] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArtifactDetails();
  }, []);

  const fetchArtifactDetails = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/artifact/${id}`);
      setArtifact(data);
    } catch (error) {
      console.error("Error fetching artifact details:", error);
      toast.error("Failed to load artifact details.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <div className="loader mb-4"></div>
          <p className="text-lg font-semibold">Loading artifact details...</p>
        </div>
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
    <div className="container mx-auto p-6">
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
              <p className="text-lg font-bold text-gray-800">{artifact.likes}</p>
            </div>
          </div>

          <div className="flex justify-between  items-center mt-6 flex-row-reverse">
            <button
              onClick={() => handleLike()}
              className="bg-blue-500 btn  text-white px-6 py-2 rounded hover:bg-blue-600"
            >
              Like Artifact
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
