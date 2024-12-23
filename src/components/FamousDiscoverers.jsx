// FamousDiscoverers.jsx
function FamousDiscoverers() {
	const discoverers = [
	  {
		name: "Howard Carter",
		achievement: "Discovered Tutankhamun's tomb in 1922.",
		image: "https://live.staticflickr.com/4397/36759875345_445270b7fa.jpg/150", 
	  },
	  {
		name: "Jean-François Champollion",
		achievement: "Deciphered Egyptian hieroglyphs in 1822.",
		image: "https://www.thelancet.com/cms/10.1016/S0140-6736(12)60750-8/asset/fc0d8a98-827c-49e3-b6ba-7c39f862266f/main.assets/fx1.jpg/150", 
	  },
	  {
		name: "Mary Leakey",
		achievement: "Found early hominin fossils in Africa.",
		image: "https://hips.hearstapps.com/hmg-prod/images/dame-maggie-smith-attends-the-65th-evening-standard-theatre-news-photo-1719502004.jpg?crop=0.790xw:0.569xh;0.104xw,0.0480xh&resize=360:*/150", 
	  },
	];
  
	return (
	  <div className="bg-white shadow p-6 my-6 rounded-lg container mx-auto">
		<h2 className="text-2xl font-bold text-center mb-4">Famous Discoverers</h2>
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
		  {discoverers.map((person, index) => (
			<div
			  key={index}
			  className="flex flex-col items-center text-center p-4 border rounded-lg"
			>
			  <img
				src={person.image}
				alt={person.name}
				className="w-24 h-24 rounded-full mb-4"
			  />
			  <h3 className="text-lg font-semibold">{person.name}</h3>
			  <p className="text-sm text-gray-600">{person.achievement}</p>
			</div>
		  ))}
		</div>
	  </div>
	);
  }
  
  export default FamousDiscoverers;
  