import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div className="container mx-auto rounded-lg my-8 px-4 py-12 md:py-16 lg:py-20 bg-rose-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Stay Updated With Us
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl">
          Subscribe to our newsletter and never miss any updates on historical artifacts!
        </p>
      </div>

      {/* Newsletter Card */}
      <div className="mt-8 max-w-2xl mx-auto">
        <div className="card bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-rose-900 text-4xl" />
            <h3 className="text-2xl font-semibold text-gray-700 dark:text-white">
              Subscribe Now
            </h3>
          </div>

          <p className="text-gray-500 dark:text-gray-300 mt-2">
            Enter your email below and get exclusive updates on historical artifacts!
          </p>

          {/* Input Section */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full px-4 py-3 rounded-xl dark:bg-gray-700 dark:text-white"
            />
            <button className="btn btn-primary bg-rose-900 flex items-center gap-2 px-6 py-3 rounded-xl hover:bg-rose-700 transition-all border-none text-white">
              Subscribe <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
