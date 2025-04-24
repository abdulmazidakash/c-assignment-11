const Spinner = () => {
	return (
	  <div className="flex items-center justify-center min-h-screen bg-base-100 dark:bg-gray-900">
		<div className="relative w-24 h-24">
		  {/* Outer Ring */}
		  <div
			className="absolute inset-0 border-[6px] border-rose-900 dark:border-rose-500 border-t-transparent rounded-full"
			style={{
			  animation: "spin 2s linear infinite",
			}}
		  ></div>
  
		  {/* Inner Ring */}
		  <div
			className="absolute inset-3 border-[6px] border-rose-500 dark:border-rose-300 border-t-transparent rounded-full"
			style={{
			  animation: "spin-reverse 2s linear infinite",
			}}
		  ></div>
  
		  {/* Pulsing Dot */}
		  <div className="absolute inset-7 flex items-center justify-center">
			<div
			  className="w-6 h-6 bg-rose-900 dark:bg-rose-300 rounded-full"
			  style={{
				animation: "ping 1s infinite",
			  }}
			></div>
		  </div>
  
		  {/* Inline Keyframe Styles */}
		  <style>
			{`
			  @keyframes spin {
				0% { transform: rotate(0deg); }
				100% { transform: rotate(360deg); }
			  }
			  @keyframes spin-reverse {
				0% { transform: rotate(360deg); }
				100% { transform: rotate(0deg); }
			  }
			  @keyframes ping {
				0% { transform: scale(1); opacity: 1; }
				75%, 100% { transform: scale(2); opacity: 0; }
			  }
			`}
		  </style>
		</div>
	  </div>
	);
  };
  
  export default Spinner;
  