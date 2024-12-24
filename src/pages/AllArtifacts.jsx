import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

function AllArtifacts() {
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllArtifacts();
  }, []);

  const fetchAllArtifacts = async () => {
    try {
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/artifacts`);
      setArtifacts(data);
    } catch (error) {
      console.error("Error fetching artifacts:", error);
    } finally {
      setLoading(false); // Ensure loading is updated
    }
  };

  console.log(artifacts);

  return (
    <div className="container mx-auto p-6">
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

      {loading ? (
        <div className="text-center">Loading...</div>
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
