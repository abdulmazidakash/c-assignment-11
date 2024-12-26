import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { FaHeart, FaEye, FaArrowRight } from "react-icons/fa";

function FeaturedArtifacts() {
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllArtifacts();
  }, []);

  const fetchAllArtifacts = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/featured-artifact`);

      // Sort by likes and select the top 6
      const sortedArtifacts = data.sort((a, b) => b.likes - a.likes).slice(0, 6);
      setArtifacts(sortedArtifacts);
    } catch (error) {
      console.error("Error fetching artifacts:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center mb-8 text-rose-700">
        <Typewriter
          words={["Featured Artifacts"]}
          cursor
          cursorStyle="|"
          loop={Infinity}
          typeSpeed={70}
          delaySpeed={1000}
          deleteSpeed={50}
        />
      </h2>

      {/* Loading State */}
      {loading ? (
        <div className="flex font-bold text-gray-500 text-4xl gap-2 items-center justify-center w-full min-h-[calc(100vh-305px)]">
          <span className="loading loading-spinner text-red-500 w-14"></span>
          Loading...
        </div>
      ) : artifacts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {artifacts.map((artifact) => (
            <div
              key={artifact._id}
              className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* Image Section */}
              <img
                src={artifact.image}
                alt={artifact.name}
                className="w-full h-52 object-cover"
              />

              {/* Content Section */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {artifact.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {artifact.context}
                </p>

                {/* Icons Row */}
                <div className="flex items-center justify-between text-gray-700">
                  <span className="flex items-center gap-1 text-rose-500">
                    <FaHeart />
                    {artifact.like_count}
                  </span>
                  <Link
                    to={`/artifacts/${artifact._id}`}
                    className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <FaEye className="mr-1" />
                    View
                  </Link>
                </div>
              </div>

              {/* Footer Button */}
              <div className="p-4 border-t text-center bg-gray-50">
                <Link
                  to={`/artifacts/${artifact._id}`}
                  className="btn btn-sm bg-gradient-to-r from-rose-700 via-gray-600 to-rose-500 text-white shadow-lg flex items-center gap-1 justify-center w-full"
                >
                  Details <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">No featured artifacts found.</div>
      )}

      {/* View All Button */}
      <div className="text-center mt-8">
        <Link
          to="/all-artifacts"
          className="btn bg-gradient-to-br from-pink-500 via-red-500 to-rose-500 text-white shadow-lg hover:scale-105 transition-transform"
        >
          See All Artifacts
        </Link>
      </div>
    </div>
  );
}

export default FeaturedArtifacts;

