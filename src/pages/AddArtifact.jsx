
import { useState, useEffect, useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../providers/AuthProvider";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { FaSave } from "react-icons/fa";

function AddArtifact() {
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

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
      adderName: form.adderName.value,
      adderEmail: form.adderEmail.value,
      like_count: 0,
    };

    try {
      const { data } = await axiosSecure.post(`/add-artifact`, formData);
      form.reset();
      toast.success("Artifact added successfully!");
      navigate("/my-artifacts");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100 p-6">
      <Helmet>
        <title>Add Artifact | Artifact Atlas</title>
      </Helmet>
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-rose-600 text-center my-8">
        <Typewriter
          words={["Add a New Artifact!"]}
          cursor
          cursorStyle="|"
          loop={Infinity}
          typeSpeed={70}
          delaySpeed={1000}
          deleteSpeed={50}
        />
      </h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white shadow-2xl p-8 rounded-lg border border-gray-200"
      >
        {/* Artifact Name */}
        <div className="form-control mb-4">
          <label className="label font-semibold">Artifact Name</label>
          <input
            type="text"
            name="name"
            className="input input-bordered w-full"
            placeholder="Enter artifact name"
            required
          />
        </div>

        {/* Image URL */}
        <div className="form-control mb-4">
          <label className="label font-semibold">Image URL</label>
          <input
            type="url"
            name="image"
            className="input input-bordered w-full"
            placeholder="Enter valid image URL"
            required
          />
        </div>

        {/* Artifact Type */}
        <div className="form-control mb-4">
          <label className="label font-semibold">Artifact Type</label>
          <select name="type" className="select select-bordered w-full">
            <option value="Tools">Tools</option>
            <option value="Weapons">Weapons</option>
            <option value="Documents">Documents</option>
            <option value="Writings">Writings</option>
            <option value="Sculptures">Sculptures</option>
            <option value="Paintings">Paintings</option>
            <option value="Relics">Relics</option>
          </select>
        </div>

        {/* Historical Context */}
        <div className="form-control mb-4">
          <label className="label font-semibold">Historical Context</label>
          <textarea
            name="context"
            className="textarea textarea-bordered w-full"
            placeholder="Enter historical background"
            rows="4"
            required
          />
        </div>

        {/* Created At & Discovered At */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="form-control">
            <label className="label font-semibold">Created At (Year)</label>
            <input
              type="text"
              name="createdAt"
              className="input input-bordered w-full"
              placeholder="e.g., 100 BC"
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold">Discovered At (Year)</label>
            <input
              type="text"
              name="discoveredAt"
              className="input input-bordered w-full"
              placeholder="e.g., 1799"
              required
            />
          </div>
        </div>

        {/* Discovered By */}
        <div className="form-control mb-4">
          <label className="label font-semibold">Discovered By</label>
          <input
            type="text"
            name="discoveredBy"
            className="input input-bordered w-full"
            placeholder="Enter discoverer's name"
            required
          />
        </div>

        {/* Present Location */}
        <div className="form-control mb-4">
          <label className="label font-semibold">Present Location</label>
          <input
            type="text"
            name="location"
            className="input input-bordered w-full"
            placeholder="Enter artifact's location"
            required
          />
        </div>

        {/* Adder Info (Read-only) */}
        <div className="form-control mb-4">
          <label className="label font-semibold">Adder Name</label>
          <input
            type="text"
            name="adderName"
            value={user?.displayName || ""}
            readOnly
            className="input input-bordered bg-gray-200 w-full"
          />
        </div>
        <div className="form-control mb-6">
          <label className="label font-semibold">Adder Email</label>
          <input
            type="email"
            name="adderEmail"
            value={user?.email || ""}
            readOnly
            className="input input-bordered bg-gray-200 w-full"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary w-full bg-gradient-to-r from-gray-600 to-rose-600 text-white flex items-center justify-center gap-2"
        >
          <FaSave /> Add Artifact
        </button>
      </form>
    </div>
  );
}

export default AddArtifact;

