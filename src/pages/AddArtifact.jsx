import { useState, useEffect, useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
      await axiosSecure.post(`/add-artifact`, formData);
      form.reset();
      toast.success("Artifact added successfully!");
      navigate("/my-artifacts");
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="container mx-auto rounded-lg my-8 flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-6 shadow-lg">
      <Helmet>
        <title>Add Artifact | Artifact Atlas</title>
      </Helmet>

      {/* Page Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white">
        Add a New Artifact!
      </h1>

      <p className="text-lg mb-10 text-center text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
        Share your discovered artifacts with the world. Provide details and upload images to preserve history.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-2xl p-8 rounded-lg border border-gray-200 dark:border-gray-700"
      >
        {/* Artifact Name */}
        <div className="form-control mb-4">
          <label className="label font-semibold">Artifact Name</label>
          <input
            type="text"
            name="name"
            className="input input-bordered w-full bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
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
            className="input input-bordered w-full bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            placeholder="Enter valid image URL"
            required
          />
        </div>

        {/* Artifact Type */}
        <div className="form-control mb-4">
          <label className="label font-semibold">Artifact Type</label>
          <select
            name="type"
            className="select select-bordered w-full bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
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
            className="textarea textarea-bordered w-full bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
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
              className="input input-bordered w-full bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              placeholder="e.g., 100 BC"
              required
            />
          </div>
          <div className="form-control">
            <label className="label font-semibold">Discovered At (Year)</label>
            <input
              type="text"
              name="discoveredAt"
              className="input input-bordered w-full bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
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
            className="input input-bordered w-full bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
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
            className="input input-bordered w-full bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
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
            className="input input-bordered bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 w-full"
          />
        </div>
        <div className="form-control mb-6">
          <label className="label font-semibold">Adder Email</label>
          <input
            type="email"
            name="adderEmail"
            value={user?.email || ""}
            readOnly
            className="input input-bordered bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 w-full"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-primary border-none w-full bg-rose-900 dark:bg-rose-700 text-white flex items-center justify-center gap-2"
        >
          <FaSave /> Add Artifact
        </button>
      </form>
    </div>
  );
}

export default AddArtifact;
