import CountUp from "react-countup";

// UserContributions.jsx
function UserContributions() {
  
	return (
	  <div className="bg-gray-800 text-white p-6 my-6 rounded-lg container mx-auto">
		<h2 className="text-2xl font-bold text-center mb-4">User Contributions</h2>
		<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
		  <div className="">

			<CountUp className="text-4xl font-bold"   end={120} duration={5}></CountUp>
			<p className="text-gray-300">Artifacts Added</p>
		  </div>
		  <div>

			<CountUp className="text-4xl font-bold"   end={3220} duration={5}></CountUp>
			<p className="text-gray-300">Total Likes</p>
		  </div>
		  <div>

			<CountUp className="text-4xl font-bold"   end={45} duration={5}></CountUp>
			<p className="text-gray-300">Engaged Contributors</p>
		  </div>
		</div>
	  </div>
	);
  }
  
  export default UserContributions;
  