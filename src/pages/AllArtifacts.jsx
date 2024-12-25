import axios from "axios";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

function AllArtifacts() {
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchAllArtifacts = async () => {
      try {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/artifacts?search=${search}`);
        setArtifacts(data);
      } catch (error) {
        console.error("Error fetching artifacts:", error);
      } finally {
        setLoading(false); // Ensure loading is updated
      }

    };
    fetchAllArtifacts();
  }, [search]);

  console.log(artifacts);

  return (
    <div className="container mx-auto p-6">
    <Helmet>
        <title>All Artifact | Artifact Atlas</title>
      </Helmet>
      <h2 className='text-4xl font-bold text-center my-8 text-cyan-700'>
					<Typewriter
					words={['All Artifacts!']}
					cursor
					cursorStyle={'|'}
					loop={Infinity}
					typeSpeed={70}
					delaySpeed={1000}
					deleteSpeed={50}
	  
					></Typewriter>
				</h2>

        <div className="mb-4">
        <input
          type="text"
          placeholder="Search by artifact name"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <button className="btn btn-primary ml-2">
          Search
        </button>
      </div>

      {loading ? (
        <div className='flex font-bold text-gray-500 text-4xl gap-2 items-center justify-center w-full min-h-[calc(100vh-305px)]'><span className="loading loading-spinner text-error w-14"></span>loading.......</div>
      ) : artifacts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {artifacts.map((artifact) => (
            <div
              key={artifact._id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg"
            >
              <img
                src={artifact.image}
                alt={artifact.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{artifact.name}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {artifact.context ? artifact.context.substring(0, 100) : "No description available"}...
              </p>
              <div className="text-right">
                <Link
                  to={`/artifacts/${artifact._id}`}
                  className="text-blue-500 hover:underline btn"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">No artifacts found.</div>
      )}
    </div>
  );
}

export default AllArtifacts;
