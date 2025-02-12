

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { FaEdit } from "react-icons/fa";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Spinner from "../components/Spinner";

function UpdateArtifactCard() {
  const axiosSecure = useAxiosSecure();
  const [artifact, setArtifact] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchArtifactData();
  }, [id]);

  const fetchArtifactData = async () => {
    try {
      const { data } = await axiosSecure.get(`/artifact/${id}`);
      setArtifact(data);
    } catch (error) {
      console.error("Error fetching artifacts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = {
      name: form.name.value,
      image: form.image.value,
      type: form.type.value,
      context: form.context.value,
      createdAt: form.createdAt.value,
      discoveredAt: form.discoveredAt.value,
      discoveredBy: form.discoveredBy.value,
      location: form.location.value,
      like_count: artifact.like_count,
    };

    try {
      const { data } = await axiosSecure.put(`/update-artifact/${id}`, formData);
      toast.success("Artifact updated successfully!");
      navigate("/my-artifacts");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong!");
    }
  };

  if(loading) return <Spinner/>

  return (
    <div className="container mx-auto p-4 md:p-8">
      <Helmet>
        <title>Update Artifact | Artifact Atlas</title>
      </Helmet>

      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-rose-700 to-gray-600 mb-8 flex justify-center items-center">
        <FaEdit className="mr-2" />
        <Typewriter
          words={["Update Artifact"]}
          cursor
          cursorStyle="|"
          loop={Infinity}
          typeSpeed={70}
          deleteSpeed={50}
        />
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg p-6 rounded-xl"
      >
        <div className="form-control mb-4">
          <label className="label font-medium text-gray-700">Artifact Name</label>
          <input
            type="text"
            name="name"
            defaultValue={artifact.name}
            className="input input-bordered w-full"
            placeholder="Enter artifact name"
          />
        </div>

        <div className="form-control mb-4">
          <label className="label font-medium text-gray-700">Image URL</label>
          <input
            type="url"
            name="image"
            defaultValue={artifact.image}
            className="input input-bordered w-full"
            placeholder="Enter valid image URL"
          />
        </div>

        <div className="form-control mb-4">
          <label className="label font-medium text-gray-700">Artifact Type</label>
          <select
            name="type"
            defaultValue={artifact.type}
            className="select select-bordered w-full"
          >
            <option value="Tools">Tools</option>
            <option value="Weapons">Weapons</option>
            <option value="Documents">Documents</option>
            <option value="Writings">Writings</option>
          </select>
        </div>

        <div className="form-control mb-4">
          <label className="label font-medium text-gray-700">Historical Context</label>
          <textarea
            name="context"
            defaultValue={artifact.context}
            className="textarea textarea-bordered w-full"
            placeholder="Enter historical background"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="form-control">
            <label className="label font-medium text-gray-700">Created At (Year)</label>
            <input
              type="text"
              name="createdAt"
              defaultValue={artifact.createdAt}
              className="input input-bordered w-full"
              placeholder="e.g., 100 BC"
            />
          </div>
          <div className="form-control">
            <label className="label font-medium text-gray-700">Discovered At (Year)</label>
            <input
              type="text"
              name="discoveredAt"
              defaultValue={artifact.discoveredAt}
              className="input input-bordered w-full"
              placeholder="e.g., 1799"
            />
          </div>
        </div>

        <div className="form-control mb-4">
          <label className="label font-medium text-gray-700">Discovered By</label>
          <input
            type="text"
            name="discoveredBy"
            defaultValue={artifact.discoveredBy}
            className="input input-bordered w-full"
            placeholder="Enter discoverer's name"
          />
        </div>

        <div className="form-control mb-4">
          <label className="label font-medium text-gray-700">Present Location</label>
          <input
            type="text"
            name="location"
            defaultValue={artifact.location}
            className="input input-bordered w-full"
            placeholder="Enter artifact's location"
          />
        </div>

        <button
          type="submit"
          className="btn w-full bg-rose-900 text-white hover:shadow-xl transition duration-300"
        >
          Update Artifact
        </button>
      </form>
    </div>
  );
}

export default UpdateArtifactCard;

