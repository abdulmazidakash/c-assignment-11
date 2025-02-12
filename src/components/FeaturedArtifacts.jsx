import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaEye, FaArrowRight } from "react-icons/fa";
import Spinner from "./Spinner";

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
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 rounded-lg dark:bg-gray-900 my-8">
      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white">
        Featured Artifacts
      </h1>

      <p className="text-lg mb-10 text-center text-gray-600 dark:text-white mt-4 max-w-3xl mx-auto">
        Exploring Timeless Treasures, Ancient Relics, and Hidden Gems That Tell the Stories of the Past
      </p>

      {/* Loading State */}
      {loading ? (
        <Spinner />
      ) : artifacts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {artifacts.map((artifact) => (
            <div
              key={artifact._id}
              className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              {/* Image Section */}
              <img
                src={artifact.image}
                alt={artifact.name}
                className="w-full h-52 object-cover"
              />

              {/* Content Section */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                  {artifact.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {artifact.context}
                </p>

                {/* Icons Row */}
                <div className="flex items-center justify-between text-gray-700 dark:text-gray-300">
                  <span className="flex items-center gap-1 text-rose-500">
                    <FaHeart />
                    {artifact.like_count}
                  </span>
                  <Link
                    to={`/artifacts/${artifact._id}`}
                    className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                  >
                    <FaEye className="mr-1" />
                    View
                  </Link>
                </div>
              </div>

              {/* Footer Button */}
              <div className="p-4 border-t text-center bg-gray-50 dark:bg-gray-700">
                <Link
                  to={`/artifacts/${artifact._id}`}
                  className="btn btn-sm bg-rose-900 text-white shadow-lg flex items-center gap-1 justify-center w-full"
                >
                  Details <FaArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 dark:text-gray-300">No featured artifacts found.</div>
      )}

      {/* View All Button */}
      <div className="text-center mt-8">
        <Link
          to="/all-artifacts"
          className="btn bg-rose-900 text-white shadow-lg hover:scale-105 transition-transform"
        >
          See All Artifacts
        </Link>
      </div>
    </div>
  );
}

export default FeaturedArtifacts;
