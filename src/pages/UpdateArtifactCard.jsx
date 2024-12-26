
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import useAxiosSecure from "../hooks/useAxiosSecure";


function UpdateArtifactCard() {
 
	const axiosSecure = useAxiosSecure();
	const [artifact, setArtifact] = useState([]);
	const [loading, setLoading] = useState(true);
	const {id} = useParams();
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
		setLoading(false); // Ensure loading is updated
	  }
	};
  
	console.log(artifact);
 
	const handleSubmit = async e =>{
		e.preventDefault();
	
		const form = e.target;
		const name = form.name.value;
		const image = form.image.value;
		const type = form.type.value;
		const context = form.context.value;
		const createdAt = form.createdAt.value;
		const discoveredAt = form.discoveredAt.value;
		const discoveredBy = form.discoveredBy.value;
		const location = form.location.value;
	
		const formData ={
		  name,
		  image,
		  type,
		  context,
		  createdAt,
		  discoveredAt,
		  discoveredBy,
		  location,
		  like_count: artifact.like_count,
		}
	
		console.log(formData);
	
		try{
			//  1. make a post request 
			const {data} = await axiosSecure.put(`/update-artifact/${id}`, formData)
			console.log(data);
	
			//2. reset form 
			form.reset()
	
			//3. show toast and navigate
			toast.success('Updated successfully')
			navigate('/my-artifacts')
		}catch (err){
		  console.log(err);
		  toast.error(err.message)
		  toast.error('something went wrong')
		}
	
		// console.log(data);
	  }
  return (
    <div className="container mx-auto p-6">
		<Helmet>
			<title>Update Artifacts | Artifact Atlas</title>
		</Helmet>
		  <h2 className='text-4xl font-bold text-center my-8 text-rose-700'>
					<Typewriter
					words={['Update Artifact!']}
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
		 
			  	defaultValue={artifact.name}
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
		 		defaultValue={artifact.image}
			   
				className="w-full border px-4 py-2 rounded"
				placeholder="Enter valid image URL"
			  />
			</div>
	
			{/* Artifact Type */}
			{artifact.type && (<div className="mb-4">
			  <label className="block font-bold mb-2">Artifact Type</label>
			  <select
				name="type"
				defaultValue={artifact.type}
			
				className="w-full border px-4 py-2 rounded"
			  >
				<option value="Tools">Tools</option>
				<option value="Weapons">Weapons</option>
				<option value="Documents">Documents</option>
				<option value="Writings">Writings</option>
			  </select>
			</div>)}
	
			{/* Historical Context */}
			<div className="mb-4">
			  <label className="block font-bold mb-2">Historical Context</label>
			  <textarea
				name="context"
		  		defaultValue={artifact.context}
			 
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
			   	  defaultValue={artifact.createdAt}
				 
				  className="w-full border px-4 py-2 rounded"
				  placeholder="e.g., 100 BC"
				/>
			  </div>
			  <div>
				<label className="block font-bold mb-2">Discovered At (Year)</label>
				<input
				  type="text"
				  name="discoveredAt"
				 defaultValue={artifact.discoveredAt}
				 
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
			   defaultValue={artifact.discoveredBy}
		
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
			    defaultValue={artifact.location}
			  
				className="w-full border px-4 py-2 rounded"
				placeholder="Enter artifact's location"
			  />
			</div>
	
			{/* Submit Button */}
			<button
			  type="submit"
			  className="bg-gradient-to-br from-rose-700 via-gray-600 to-rose-500 text-white shadow-lg font-semibold px-4 py-2 rounded w-full"
			>
			  Update Artifact
			</button>
		  </form>
		</div>
  );
}

export default UpdateArtifactCard;
