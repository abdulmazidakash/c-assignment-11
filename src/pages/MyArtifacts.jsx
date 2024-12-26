import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from "react-hot-toast";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

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
      const { data } = await axiosSecure.delete(`/artifact/${id}`);
      console.log(data);
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
        <div>
          <p>
            Are you <b>sure</b>?
          </p>
        </div>
        <div className="gap-2 flex">
          <button
            className="bg-red-400 text-white px-3 py-1 rounded-md"
            onClick={() => {
              handleDelete(id);
              toast.dismiss(t.id);
            }}
          >
            Yes
          </button>
          <button
            className="bg-green-400 text-white px-3 py-1 rounded-md"
            onClick={() => toast.dismiss(t.id)}
          >
            Cancel
          </button>
        </div>
      </div>
    ));
  };

  return (
    <div className="container mx-auto p-6">
      <Helmet>
        <title>My Artifacts | Artifact Atlas</title>
      </Helmet>
      <h2 className="text-4xl font-bold text-center my-8 text-rose-700">
        <Typewriter
          words={["My Artifacts!"]}
          cursor
          cursorStyle={"|"}
          loop={Infinity}
          typeSpeed={70}
          delaySpeed={1000}
          deleteSpeed={50}
        ></Typewriter>
      </h2>

      {loading ? (
        <div className="flex font-bold text-gray-500 text-4xl gap-2 items-center justify-center w-full min-h-[calc(100vh-305px)]">
          <span className="loading loading-spinner text-error w-14"></span>
          Loading...
        </div>
      ) : artifacts.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {artifacts.map((artifact, index) => (
                <tr key={artifact._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img
                      src={artifact.image}
                      alt={artifact.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="font-semibold">{artifact.name}</td>
                  <td className="flex gap-2">
                    <Link
                      to={`/update/${artifact._id}`}
                      className="btn btn-sm btn-success flex items-center gap-1"
                    >
                      <FaEdit /> Update
                    </Link>
                    <button
                      onClick={() => modernDelete(artifact._id)}
                      className="btn btn-sm btn-error flex items-center gap-1"
                    >
                      <FaTrashAlt /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-gray-500">No artifacts added by you.</div>
      )}
    </div>
  );
}

export default MyArtifacts;

