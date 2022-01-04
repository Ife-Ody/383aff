import React from "react";
// Import Swiper React components
import { Navigation, Pagination, A11y, Autoplay, Lazy } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div className="">
      <Swiper
        className="relative h-72 md:h-96"
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay, Lazy]}
        spaceBetween={20}
        slidesPerView={1}
        a11y={{
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
        }}
        autoplay={{
          delay: 5000,
        }}
        pagination={{ clickable: true, type: "progressbar" }}
        scrollbar={{ draggable: true }}
      >
        {/* slide 1 */}
        <SwiperSlide className="flex justify-center items-center">
          <div className="absolute text-white text-2xl md:text-5xl z-10 font-extrabold">
            Juiciest Fashion Trends
          </div>
          <img
            className="swiper-lazy w-full"
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
          <div className="swiper-lazy-preloader"></div>
        </SwiperSlide>
        {/* slide 2 */}
        <SwiperSlide className="items-center flex justify-center">
          <h2 className="absolute stroke-slate-50 stroke-0 bg-clip-text text-transparent bg-gradient-to-r from-pink-100 to-violet-100 text-2xl md:text-5xl z-10 font-extrabold w-96 text-center drop-shadow-sm">
            Latest juice from the Berth, Paris fashion show
          </h2>
          <img
            className="brightness-75 w-full swiper-lazy"
            src="https://images.unsplash.com/photo-1605289355680-75fb41239154?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </SwiperSlide>
        {/* slide 3 */}
        <SwiperSlide className="items-center flex justify-center">
          <img
            className="text-center w-full swiper-lazy"
            src="https://images.unsplash.com/photo-1638296233830-b02c5ee20032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
