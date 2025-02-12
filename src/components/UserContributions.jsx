import React from "react";
import { FaGlobe, FaArchive, FaRegLightbulb } from "react-icons/fa";

function UserContributions() {
  return (
    <div className="container mx-auto px-6 py-12 md:py-16 lg:py-20 bg-rose-50 dark:bg-gray-900 text-gray-800 dark:text-white rounded-lg shadow-lg">

      {/* Page Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center flex items-center justify-center gap-2">
        Explore the World's
      </h2>

      <p className="text-lg text-center text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto mb-10">
        Explore historical artifacts from across the world!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Card 1 */}
        <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <FaGlobe size={40} className="text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-center mb-2">Global Artifacts</h3>
          <p className="text-sm text-center">
            Discover artifacts from every corner of the world, representing diverse cultures and histories.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <FaArchive size={40} className="text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-center mb-2">Preserved Records</h3>
          <p className="text-sm text-center">
            Uncover preserved artifacts that hold secrets of the ancient past.
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <FaRegLightbulb size={40} className="text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-center mb-2">Innovative Insights</h3>
          <p className="text-sm text-center">
            Learn how these treasures continue to inspire innovation and creativity today.
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserContributions;
