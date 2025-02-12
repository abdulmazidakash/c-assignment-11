import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

// Image Links
const images = [
  "https://insiderrelease.com/wp-content/uploads/2024/09/Rosetta-Stone-1024x574.jpg",
  "https://www.primeknowledgenet.com/wp-content/blogs.dir/1/uploads/sites/66/Historical-Curiosities-41-750x429.jpg",
  "https://static.dw.com/image/60495947_401.jpg",
];

// Slide Content
const slides = [
  {
    image: images[0],
    title: "Rosetta Stone: Key to Ancient Scripts",
    description:
      "Decipher the mysteries of ancient Egyptian hieroglyphs with the Rosetta Stone, a linguistic breakthrough.",
    buttonText: "Explore More",
  },
  {
    image: images[1],
    title: "Lost Treasures of Time",
    description:
      "Journey through history and uncover the artifacts that shaped civilizations.",
    buttonText: "Discover Now",
  },
  {
    image: images[2],
    title: "The Artifacts That Tell Stories",
    description:
      "Every artifact holds a story, revealing the culture, beliefs, and achievements of its time.",
    buttonText: "Learn More",
  },
];

const Banner = () => {
  return (
    <div className="w-full h-[500px] bg-rose-200 text-black dark:bg-gray-900 dark:text-white mt-4 mb-8 transition-colors duration-300">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row items-center justify-between h-full px-4 md:px-12 lg:px-20 py-8">
              
              {/* Left Content */}
              <div className="text-center md:w-3/4 lg:w-1/2 lg:text-left lg:pr-10">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-black dark:text-white">
                  {slide.title}
                </h1>
                <p className="text-md md:text-lg lg:text-xl text-gray-500 dark:text-gray-300 mb-6 leading-relaxed">
                  {slide.description}
                </p>
                <Link
                  to={"/all-artifacts"}
                  className="px-6 font-semibold py-3 bg-rose-900 text-white rounded-md hover:bg-primary-focus transition dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                  {slide.buttonText}
                </Link>
              </div>

              {/* Right Image */}
              <div className="lg:w-1/2 lg:pl-10 w-full">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="rounded-lg shadow-lg w-full max-h-[300px] md:max-h-[250px] lg:max-h-[500px] object-cover"
                />
              </div>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
