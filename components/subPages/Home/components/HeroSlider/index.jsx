import React, { useRef, useState } from "react";
import slider from "../../utils/slider.json";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
import Slide from "./Slide";

const HeroSlider = () => {
  return (
    <div className="lg:container">
      <Swiper
        // spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {/* <img
              className="w-full h-full object-cover"
              src="/images/hero-slider-one.png"
              alt=""
            />
            <div className="absolute top-[50%] 2xl:left-36 left-[50%] -translate-y-[50%] -translate-x-[50%] 2xl:translate-x-0 text-center 2xl:text-left">
              <h3 className="hidden smd:block text-white text-base 2xl:text-2xl font-semibold">
                Save up to 30%
              </h3>
              <h1 className="text-xl smd:text-3xl lg:text-[50px] 2xl:text-[70px] font-black text-white uppercase mt-3 lg:mt-12 mb-0 lg:mb-20 2xl:leading-normal">
                Bengal Vegetable <br /> farm{" "}
                <span className="bg-green-two px-2">Organic 100%</span>
              </h1>
              <p className="hidden smd:block text-white font-medium 2xl:text-2xl max-w-2xl mt-6">
                We provide fresh and organic vegetables from our own farm. We
                are a team of dedicated farmers.
              </p>
              <button className="bg-green-two px-10 py-2 lg:px-14 lg:py-4 text-white font-medium text-lg rounded-full mt-4 lg:mt-10 transition hover:transition-all hover:translate-x-1">
                Shop Now
              </button>
            </div> */}
        {slider.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <Slide {...item} />
            </SwiperSlide>
          );
        })}
        {/* </div> */}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
