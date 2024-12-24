import { useState, useEffect, useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../providers/AuthProvider";
import { Typewriter } from "react-simple-typewriter";
import { data } from "react-router-dom";
import axios from "axios";

function AddArtifact() {

  const {user} = useContext(AuthContext);

  const handleSubmit = async e =>{
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const type = form.type.value;
    const context = form.context.value;
    const createdAt = form.createdAt.value;
    const discoveredAt = form.discoveredAt.value;
    const location = form.location.value;
    const adderName = form.adderName.value;
    const adderEmail = form.adderEmail.value;

    const formData ={
      name,
      image,
      type,
      context,
      createdAt,
      discoveredAt,
      location,
      adderName,
      adderEmail,
      like_count: 0,
    }

    console.log(formData);

    try{
        //  1. make a post request 
        const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/add-artifact`, formData)
        console.log(data);

        //2. reset form 
        form.reset()

        //3. show toast and navigate
        toast.success('Data added successfully')
        // navigate('/my-posted-jobs')
    }catch (err){
      console.log(err);
      toast.error(err.message)
    }

    // console.log(data);


  }


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
     
           
            className="w-full border px-4 py-2 rounded"
            placeholder="Enter valid image URL"
          />
        </div>

        {/* Artifact Type */}
        <div className="mb-4">
          <label className="block font-bold mb-2">Artifact Type</label>
          <select
            name="type"
    
        
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
           
             
              className="w-full border px-4 py-2 rounded"
              placeholder="e.g., 100 BC"
            />
          </div>
          <div>
            <label className="block font-bold mb-2">Discovered At (Year)</label>
            <input
              type="text"
              name="discoveredAt"
            
             
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
            defaultValue={user?.displayName}

          
            readOnly
            className="w-full border px-4 py-2 rounded bg-gray-200"
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Adder Email</label>
          <input
            type="email"
            name="adderEmail"

            defaultValue={user?.email}
       
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
