import { motion } from "framer-motion";
import { FaGlobe, FaHistory, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <motion.div 
      className="px-6 py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Page Title */}
      <motion.h1 
        className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        About Artifact Atlas
      </motion.h1>

      <motion.p 
        className="text-lg text-center text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Artifact Atlas is a platform dedicated to preserving and sharing historical artifacts 
        from different cultures and civilizations around the world.
      </motion.p>

      {/* About Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Global Collection Card */}
        <motion.div 
          className="card bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex justify-center">
            <FaGlobe className="text-blue-500 text-5xl" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mt-4">
            Global Collection
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Discover artifacts from various parts of the world and learn about their rich history.
          </p>
        </motion.div>

        {/* Historical Insights Card */}
        <motion.div 
          className="card bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex justify-center">
            <FaHistory className="text-green-500 text-5xl" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mt-4">
            Historical Insights
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Learn about the significance and stories behind historical artifacts.
          </p>
        </motion.div>

        {/* Community Engagement Card */}
        <motion.div 
          className="card bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex justify-center">
            <FaUsers className="text-purple-500 text-5xl" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mt-4">
            Community Engagement
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Connect with history enthusiasts and contribute your own findings.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
