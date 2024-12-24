import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// import { toast } from "react-hot-toast";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";

function MyArtifacts() {
	const {user} = useContext(AuthContext);
	const [artifacts, setArtifacts] = useState([]);
	const [loading, setLoading] = useState(true);
  
	useEffect(() => {
	  fetchAllArtifacts();
	}, []);
  
	const fetchAllArtifacts = async () => {
	  try {
		const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/artifacts/${user?.email}`);
		setArtifacts(data);
	  } catch (error) {
		console.error("Error fetching artifacts:", error);
	  } finally {
		setLoading(false); // Ensure loading is updated
	  }
	};  
	const handleDelete = async (id) => {
		try {
		  const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/artifact/${id}`);
		  console.log(data);
		  toast.success('Deleted Successfully');
		  // Optionally, remove the artifact from the state
		  setArtifacts((prevArtifacts) => prevArtifacts.filter((artifact) => artifact._id !== id));
		} catch (err) {
		  console.error(err.message);
		  toast.error('Something went wrong', err);
		}
	  };

	  const modernDelete = id =>{
		toast(t => (
		  <div className='flex gap-3 items-center'>
			  <div>
				<p>Are you <b>sure</b></p>
			  </div>
			  <div className='gap-2 flex'>
				<button
				className='bg-red-400 text-white px-3 py-1 rounded-md'
				onClick={()=> {
				  handleDelete(id)
				  toast.dismiss(t.id)
				}}> Yes</button>
				<button
				className='bg-green-400 text-white px-3 py-1 rounded-md'
				 onClick={()=> toast.dismiss(t.id)}>Cancel</button>
			  </div>
		  </div>
		))
	  }
	  


  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">My Artifacts: {artifacts.length}</h2>

      {/* Show Loading Spinner */}
      {loading ? (
        <div className="text-center">Loading your artifacts...</div>
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
                {artifact.context
                  ? artifact.context.substring(0, 100)
                  : "No description available"}...
              </p>
              <div className="flex justify-between items-center">
                {/* Update Button */}
                <Link
                  to={`/update/${artifact._id}`}
                  className="text-blue-500 hover:underline btn-success"
                >
                  Update
                </Link>
                {/* Delete Button */}
                <button
                  onClick={() => modernDelete(artifact._id)}
                  className="text-red-500 hover:underline btn-error"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Show No Data Message
        <div className="text-center text-gray-500">
          No artifacts added by you.
        </div>
      )}
    </div>
  );
}

export default MyArtifacts;
