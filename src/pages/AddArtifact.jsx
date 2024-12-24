import { useState, useEffect, useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../providers/AuthProvider";
import { Typewriter } from "react-simple-typewriter";

function AddArtifact() {

  const {user} = useContext(AuthContext);
  console.log(user);
  const [formData, setFormData] = useState({
    name: "",     
    image: "",
    type: "Tools",
    context: "",
    createdAt: "",
    discoveredAt: "",
    discoveredBy: "",
    location: "",
    adderName: "",
    adderEmail: "",
  });


  useEffect(() => {
    // Set logged-in user's name and email in form data
    setFormData((prevData) => ({
      ...prevData,
      adderName: user?.displayName,
      adderEmail: user?.email,
    }));
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!formData.name || !formData.image || !formData.context) {
      toast.error("Please fill all the required fields.");
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated delay
      toast.success("Artifact added successfully!");
      setFormData({
        name: "",
        image: "",
        type: "Tools",
        context: "",
        createdAt: "",
        discoveredAt: "",
        discoveredBy: "",
        location: "",
        adderName: user?.displayName,
        adderEmail: user?.email,
      });
    } catch (error) {
      toast.error("Failed to add artifact. Try again.");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className='text-4xl font-bold text-center my-8 text-cyan-700'>
				<Typewriter
				words={['Add a new Artifact!']}
				cursor
				cursorStyle={'|'}
				loop={Infinity}
				typeSpeed={70}
				delaySpeed={1000}
				deleteSpeed={50}

				></Typewriter>
			</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-gray-100 p-6 rounded-lg shadow-md"
      >
        {/* Artifact Name */}
        <div className="mb-4">
          <label className="block font-bold mb-2">Artifact Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            placeholder="Enter artifact name"
          />
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label className="block font-bold mb-2">Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            placeholder="Enter valid image URL"
          />
        </div>

        {/* Artifact Type */}
        <div className="mb-4">
          <label className="block font-bold mb-2">Artifact Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          >
            <option value="Tools">Tools</option>
            <option value="Weapons">Weapons</option>
            <option value="Documents">Documents</option>
            <option value="Writings">Writings</option>
          </select>
        </div>

        {/* Historical Context */}
        <div className="mb-4">
          <label className="block font-bold mb-2">Historical Context</label>
          <textarea
            name="context"
            value={formData.context}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            placeholder="Enter historical background"
            rows="4"
          />
        </div>

        {/* Created At and Discovered At */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block font-bold mb-2">Created At (Year)</label>
            <input
              type="text"
              name="createdAt"
              value={formData.createdAt}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              placeholder="e.g., 100 BC"
            />
          </div>
          <div>
            <label className="block font-bold mb-2">Discovered At (Year)</label>
            <input
              type="text"
              name="discoveredAt"
              value={formData.discoveredAt}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
              placeholder="e.g., 1799"
            />
          </div>
        </div>

        {/* Discovered By */}
        <div className="mb-4">
          <label className="block font-bold mb-2">Discovered By</label>
          <input
            type="text"
            name="discoveredBy"
            value={formData.discoveredBy}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            placeholder="Enter discoverer's name"
          />
        </div>

        {/* Present Location */}
        <div className="mb-4">
          <label className="block font-bold mb-2">Present Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            placeholder="Enter artifact's location"
          />
        </div>

        {/* Logged-in User Info (Read-Only) */}
        <div className="mb-4">
          <label className="block font-bold mb-2">Adder Name</label>
          <input
            type="text"
            name="adderName"
            value={formData.adderName}
            readOnly
            className="w-full border px-4 py-2 rounded bg-gray-200"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Adder Email</label>
          <input
            type="email"
            name="adderEmail"
            value={formData.adderEmail}
            readOnly
            className="w-full border px-4 py-2 rounded bg-gray-200"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-gradient-to-br from-slate-950 to-rose-950 font-semibold text-white px-4 py-2 rounded w-full"
        >
          Add Artifact
        </button>
      </form>
    </div>
  );
}

export default AddArtifact;
