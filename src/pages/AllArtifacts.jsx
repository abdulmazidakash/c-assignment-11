import axios from "axios";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { AiOutlineInfoCircle, AiFillHeart } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import Spinner from "../components/Spinner";

// Swiper modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/SwiperCustom.css"; // ⬅️ Make sure this CSS file exists

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

  const sortedArtifacts = [...artifacts].sort((a, b) =>
    sortOption === "Most Liked" ? b.like_count - a.like_count : a.like_count - b.like_count
  );

  return (
    <div className="container mx-auto my-8 px-6 py-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white rounded-lg shadow-lg">
      <Helmet>
        <title>All Artifacts | Artifact Atlas</title>
      </Helmet>

      <h2 className="text-4xl md:text-5xl font-bold text-center">Explore Timeless Artifacts</h2>
      <p className="text-lg text-center text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto mb-10">
        Uncover Ancient Relics, Forgotten Treasures, and Mystical Objects That Reveal the Secrets of History
      </p>

      {/* Search & Sort */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
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

      {/* Swiper Section */}
      {loading ? (
        <Spinner />
      ) : sortedArtifacts.length > 0 ? (
        <div className="relative">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            pagination={{
              el: ".custom-swiper-pagination",
              clickable: true,
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
              1536: { slidesPerView: 4 },
            }}
            className="pb-16"
          >
            {sortedArtifacts.map((artifact) => (
              <SwiperSlide key={artifact._id}>
                <div className="card shadow-xl bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg transform hover:scale-105 transition-transform">
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
                        <span className="text-sm text-gray-700 dark:text-gray-300">
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
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-swiper-pagination mt-6 flex justify-center" />
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
