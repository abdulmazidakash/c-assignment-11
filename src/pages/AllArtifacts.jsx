import axios from "axios";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { AiOutlineInfoCircle, AiFillHeart } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import Spinner from "../components/Spinner";

function AllArtifacts() {
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("Most Liked");

  useEffect(() => {
    const fetchAllArtifacts = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/artifacts?search=${search}`
        );

        setArtifacts(data);
      } catch (error) {
        console.error("Error fetching artifacts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllArtifacts();
  }, [search]);

  // Sorting Function
  const sortedArtifacts = [...artifacts].sort((a, b) =>
    sortOption === "Most Liked" ? b.like_count - a.like_count : a.like_count - b.like_count
  );

  return (
    <div className="container mx-auto my-8 px-6 py-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white rounded-lg shadow-lg">
      <Helmet>
        <title>All Artifacts | Artifact Atlas</title>
      </Helmet>

      {/* Page Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center">
        Explore Timeless Artifacts
      </h2>

      <p className="text-lg text-center text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto mb-10">
        Uncover Ancient Relics, Forgotten Treasures, and Mystical Objects That Reveal the Secrets of History
      </p>

      {/* Search & Sorting Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
        {/* Search Bar */}
        <div className="relative w-full md:w-2/3 max-w-lg">
          <input
            type="text"
            placeholder="Search by artifact name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered w-full pr-12 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 btn btn-square btn-ghost">
            <FiSearch size={20} />
          </button>
        </div>

        {/* Sorting Dropdown */}
        <div className="w-full md:w-1/3">
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="select select-bordered w-full bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          >
            <option>Most Liked</option>
            <option>Least Liked</option>
          </select>
        </div>
      </div>

      {/* Loading or Card Section */}
      {loading ? (
        <Spinner />
      ) : sortedArtifacts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 dark:bg-gray-800">
          {sortedArtifacts.map((artifact) => (
            <div
              key={artifact._id}
              className="card shadow-xl bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg transform hover:scale-105 transition-transform"
            >
              {/* Image */}
              <figure className="relative">
                <img
                  src={artifact.image}
                  alt={artifact.name}
                  className="object-cover w-full h-64 rounded-t-lg"
                />
                <div className="absolute top-2 left-2 bg-black bg-opacity-50 text-white rounded-full p-2">
                  <FaMapMarkerAlt />
                </div>
              </figure>

              {/* Card Content */}
              <div className="card-body">
                <h3 className="text-2xl font-bold">{artifact.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {artifact.context
                    ? artifact.context.substring(0, 100)
                    : "No description available"}
                  ...
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <AiFillHeart className="text-rose-500" />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">
                      {artifact.like_count} Likes
                    </span>
                  </div>
                  <Link
                    to={`/artifacts/${artifact._id}`}
                    className="btn btn-sm bg-rose-900 dark:bg-rose-700 text-white shadow-lg flex items-center gap-2"
                  >
                    <AiOutlineInfoCircle />
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 dark:text-gray-400 font-semibold">
          No artifacts found. Try a different search term.
        </div>
      )}
    </div>
  );
}

export default AllArtifacts;
