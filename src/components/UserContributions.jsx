import React from "react";
import Marquee from "react-fast-marquee";
import { FaGlobe, FaArchive, FaRegLightbulb } from "react-icons/fa";


function UserContributions() {
  return (
    <div className="container mx-auto p-6 bg-gradient-to-r from-rose-500 via-gray-500 to-rose-500 text-white rounded-lg shadow-lg">
      <h1 className="text-2xl lg:text-3xl font-bold text-center mb-6">
        Explore the World's
        <Marquee className="font-semibold my-4" gradient={false}>
        Explore historical artifacts from across the world!
      </Marquee>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {/* Card 1 */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <FaGlobe size={40} className="text-blue-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-center mb-2">Global Artifacts</h3>
          <p className="text-sm text-center">
            Discover artifacts from every corner of the world, representing diverse cultures and
            histories.
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <FaArchive size={40} className="text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-center mb-2">Preserved Records</h3>
          <p className="text-sm text-center">
            Uncover preserved artifacts that hold secrets of the ancient past.
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
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
