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
        navigation={false}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
      >
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
