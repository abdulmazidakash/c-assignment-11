import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Spinner from "../components/Spinner";

function MyArtifacts() {
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);
  const [artifacts, setArtifacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllArtifacts();
  }, []);

  const fetchAllArtifacts = async () => {
    try {
      const { data } = await axiosSecure.get(`/artifacts/${user?.email}`);
      setArtifacts(data);
    } catch (error) {
      console.error("Error fetching artifacts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosSecure.delete(`/artifact/${id}`);
      toast.success("Deleted Successfully");
      setArtifacts((prevArtifacts) =>
        prevArtifacts.filter((artifact) => artifact._id !== id)
      );
    } catch (err) {
      console.error(err.message);
      toast.error("Something went wrong", err);
    }
  };

  const modernDelete = (id) => {
    toast((t) => (
      <div className="flex gap-3 items-center">
        <p>Are you <b>sure</b>?</p>
        <div className="gap-2 flex">
          <button
            className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700 transition"
            onClick={() => {
              handleDelete(id);
              toast.dismiss(t.id);
            }}
          >
            Yes
          </button>
          <button
            className="bg-gray-600 text-white px-3 py-1 rounded-md hover:bg-gray-700 transition"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="flex my-8 rounded-lg container mx-auto flex-col items-center justify-center p-6 bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Helmet>
        <title>My Artifacts | Artifact Atlas</title>
      </Helmet>

      <h2 className="text-4xl font-bold text-center my-8 text-gray-900 dark:text-white">
        <Typewriter
          words={["My Artifacts!"]}
          cursor
          cursorStyle={"|"}
          loop={Infinity}
          typeSpeed={70}
          delaySpeed={1000}
          deleteSpeed={50}
        />
      </h2>

      <hr className="border-t-2 border-gray-400 w-3/4 my-4 dark:border-gray-600" />

      {loading ? (
        <Spinner />
      ) : artifacts.length > 0 ? (
        <div className="overflow-x-auto w-full max-w-5xl rounded-lg">
          <table className="table w-full rounded-lg shadow-md bg-gray-100 dark:bg-gray-800">
            <thead>
              <tr className="bg-rose-900 text-white dark:bg-gray-700 dark:text-white">
                <th className="text-center py-3">#</th>
                <th className="text-center py-3">Image</th>
                <th className="text-center py-3">Name</th>
                <th className="text-center py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {artifacts.map((artifact, index) => (
                <tr
                  key={artifact._id}
                  className="hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  <td className="text-center font-bold py-2">{index + 1}</td>
                  <td className="flex justify-center items-center py-2">
                    <img
                      src={artifact.image}
                      alt={artifact.name}
                      className="w-16 h-16 object-cover rounded-md border border-gray-400 dark:border-gray-600"
                    />
                  </td>
                  <td className="text-center font-semibold text-gray-800 dark:text-white py-2">
                    {artifact.name}
                  </td>
                  <td className="flex justify-center items-center gap-2 py-2">
                    <Link
                      to={`/update/${artifact._id}`}
                      className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                    >
                      <FaEdit className="inline mr-1" /> Update
                    </Link>
                    <button
                      onClick={() => modernDelete(artifact._id)}
                      className="px-3 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
                    >
                      <FaTrashAlt className="inline mr-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-gray-500 font-bold dark:text-gray-300">
          No artifacts added by you.
        </div>
      )}
    </div>
  );
}

export default MyArtifacts;
