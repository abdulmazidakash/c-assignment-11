import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

function FeaturedArtifacts() {
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllArtifacts();
  }, []);

  const fetchAllArtifacts = async () => {
    try {
      console.log("Fetching artifacts...");
      const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/featured-artifact`);
      console.log("Fetched artifacts:", data);
      
      // Sort by likes and select the top 6
      const sortedArtifacts = data.sort((a, b) => b.likes - a.likes).slice(0, 6);
      setArtifacts(sortedArtifacts);
    } catch (error) {
      console.error("Error fetching artifacts:", error);
    } finally {
      setLoading(false); // Ensure loading is updated
    }
  };

  console.log(artifacts);

  return (
    <div className="container mx-auto p-6">
      <h2 className='text-4xl font-bold text-center my-8 text-rose-700'>
					<Typewriter
					words={['Featured Artifact!']}
					cursor
					cursorStyle={'|'}
					loop={Infinity}
					typeSpeed={70}
					delaySpeed={1000}
					deleteSpeed={50}
	  
					></Typewriter>
				</h2>

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
              <p className="text-md text-gray-600 mb-4">{artifact.context}</p>
              <p className="text-sm text-gray-600 mb-4">Likes: {artifact.like_count}</p>
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
        <div className="text-center text-gray-500">No featured artifacts found.</div>
      )}

      <div className="text-center mt-8">
        <Link to='/all-artifacts' className="btn btn-success">See All Artifact</Link>
      </div>
    </div>
  );
}

export default FeaturedArtifacts;
