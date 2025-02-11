import axios from "axios";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { FiSearch } from "react-icons/fi";
import { AiOutlineInfoCircle, AiFillHeart } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

function AllArtifacts() {
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

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

  return (
    <div className="container mx-auto px-6 py-8">
      <Helmet>
        <title>All Artifacts | Artifact Atlas</title>
      </Helmet>
      <h2 className="text-4xl font-bold text-center my-8 text-rose-700">
        <Typewriter
          words={["Explore Timeless Artifacts!"]}
          cursor
          cursorStyle={"|"}
          loop={Infinity}
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>

      {/* Search Section */}
      <div className="mb-6 flex items-center justify-center gap-4">
        <div className="relative w-full max-w-lg">
          <input
            type="text"
            placeholder="Search by artifact name..."
            name="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input input-bordered w-full pr-12"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 btn btn-square btn-ghost">
            <FiSearch size={20} />
          </button>
        </div>
      </div>

      {/* Loading or Card Section */}
      {loading ? (
        <div className="flex font-bold text-gray-500 text-4xl gap-2 items-center justify-center w-full min-h-[calc(100vh-305px)]">
          <span className="loading loading-spinner text-primary w-14"></span>
          Loading...
        </div>
      ) : artifacts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artifacts.map((artifact) => (
            <div
              key={artifact._id}
              className="card shadow-xl bg-gradient-to-b from-rose-100 via-white to-purple-50 rounded-lg transform hover:scale-105 transition-transform"
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
                <h3 className="text-2xl font-bold text-gray-800">
                  {artifact.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {artifact.context
                    ? artifact.context.substring(0, 100)
                    : "No description available"}
                  ...
                </p>

                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <AiFillHeart className="text-rose-500" />
                    <span className="text-gray-700 text-sm">
                      {artifact.like_count} Likes
                    </span>
                  </div>
                  <Link
                    to={`/artifacts/${artifact._id}`}
                    className="btn btn-sm bg-rose-900 text-white shadow-lg flex items-center gap-2"
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
        <div className="text-center text-gray-500 font-semibold">
          No artifacts found. Try a different search term.
        </div>
      )}
    </div>
  );
}

export default AllArtifacts;

