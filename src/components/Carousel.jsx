import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules"; // Import Autoplay module
import "swiper/swiper-bundle.css";

const images = [
  "https://insiderrelease.com/wp-content/uploads/2024/09/Rosetta-Stone-1024x574.jpg",
  "https://www.primeknowledgenet.com/wp-content/blogs.dir/1/uploads/sites/66/Historical-Curiosities-41-750x429.jpg",
  "https://static.dw.com/image/60495947_401.jpg",
  
];

function CoverflowSlider() {
  return (
    <div className="container mx-auto my-8">
      {" "}
      {/* Set container to full width */}
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000, // Change slide every 3 seconds
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        pagination={{
          clickable: true, // Makes the pagination dots clickable
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]} // Add Autoplay module
        className="w-full rounded-lg shadow-lg">
        {" "}
        {/* Set Swiper to full width */}
        {images.map((src, index) => (
          <SwiperSlide key={index} className="w-full">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-96 object-cover rounded-lg" // Use relative units for height
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CoverflowSlider;