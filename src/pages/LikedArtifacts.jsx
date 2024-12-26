import React, { useContext, useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai"; // React Icon
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "../providers/AuthProvider";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Typewriter } from "react-simple-typewriter";


const LikedArtifacts = () => {
  const axiosSecure = useAxiosSecure();
	const {user} = useContext(AuthContext);
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
		setLoading(false); // Ensure loading is updated
	  }
	};

  const handleUnlike = async (artifactId) => {
    try {
      await axiosSecure.post(`/unlike`, { id: artifactId }); // Adjust endpoint and payload
      setArtifacts((prev) =>
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
		<div className='flex font-bold text-gray-500 text-4xl gap-2 items-center justify-center w-full min-h-[calc(100vh-305px)]'><span className="loading loading-spinner text-error w-14"></span>loading.......</div>
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
       <h2 className='text-4xl font-bold text-center my-8 text-rose-700'>
              <Typewriter
              words={['Liked Artifact!']}
              cursor
              cursorStyle={'|'}
              loop={Infinity}
              typeSpeed={70}
              delaySpeed={1000}
              deleteSpeed={50}
      
              ></Typewriter>
            </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {artifacts.map((artifact) => (
          <div
            key={artifact.artifact.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={artifact.artifact.image}
              alt={artifact.artifact.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-800">{artifact.artifact.name}</h2>
              <p className="text-gray-600 text-sm truncate">{artifact.artifact.context}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-500 text-sm italic">{artifact.artifact.type}</span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleUnlike(artifact.artifact.id)}
                    className="text-red-500 flex items-center gap-1"
                  >
                    <AiFillHeart size={20} />
                  </button>
                  <span className="text-red-500">{artifact.artifact.like_count}</span>
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