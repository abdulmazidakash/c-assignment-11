import { FaAward } from 'react-icons/fa';
import Marquee from 'react-fast-marquee';


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
    <div className="bg-base-200 shadow-lg px-6 py-12 md:py-16 lg:py-20 my-8 rounded-2xl container mx-auto">
       {/* Page Title */}
       <h2 
        className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white flex items-center justify-center gap-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
      <FaAward/> Famous Discovers
      </h2>

      <p 
        className="text-lg text-center text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Please read these terms and conditions carefully before using Artifact Atlas.
      </p>
      <Marquee gradient={false} speed={50} pauseOnHover>
        <div className="flex gap-8">
          {discoverers.map((person, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 border rounded-xl bg-white shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img
                src={person.image}
                alt={person.name}
                className="w-32 h-32 rounded-full mb-4 border-4 border-rose-900"
              />
              <h3 className="text-xl font-semibold text-rose-900">{person.name}</h3>
              <p className="text-sm text-gray-500 mt-2">{person.achievement}</p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default FamousDiscoverers;
