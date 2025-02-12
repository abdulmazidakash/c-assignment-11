import { motion } from "framer-motion";
import { FaCheckCircle, FaExclamationTriangle, FaUserShield } from "react-icons/fa";

const TermsAndConditions = () => {
  return (
    <motion.div 
      className="px-6 py-12 md:py-16 lg:py-20 my-8 container mx-auto rounded-lg bg-gray-50 dark:bg-gray-900"
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
        Terms & Conditions
      </motion.h1>

      <motion.p 
        className="text-lg text-center text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Please read these terms and conditions carefully before using Artifact Atlas.
      </motion.p>

      {/* Terms and Conditions Sections */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Acceptance of Terms */}
        <motion.div 
          className="card bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex justify-center">
            <FaCheckCircle className="text-green-500 text-5xl" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mt-4">
            Acceptance of Terms
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            By accessing and using Artifact Atlas, you agree to abide by these terms.
          </p>
        </motion.div>

        {/* User Responsibilities */}
        <motion.div 
          className="card bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex justify-center">
            <FaUserShield className="text-blue-500 text-5xl" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mt-4">
            User Responsibilities
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Users must provide accurate information and not engage in malicious activities.
          </p>
        </motion.div>

        {/* Restrictions */}
        <motion.div 
          className="card bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 text-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex justify-center">
            <FaExclamationTriangle className="text-red-500 text-5xl" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mt-4">
            Restrictions
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Users are prohibited from posting illegal, harmful, or offensive content.
          </p>
        </motion.div>
      </div>
      
      {/* Additional Information */}
      <motion.div 
        className="max-w-4xl mx-auto mt-12 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white text-center">
          Additional Information
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          Artifact Atlas reserves the right to modify these terms at any time. 
          Continued use of the platform signifies your acceptance of the updated terms.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default TermsAndConditions;
