// import Image from "next/image";
// import Link from "next/link";

// const CategorySlide = () => {
//   return (
//     <div className="">
//       <div className="flex flex-col justify-center items-center image text-center w-56 h-56 rounded-full border-2 border-gray-seven">
//         <Link href={"/"}>
//           <a className="rounded-sm">
//             <Image
//               src={"/images/cat-1.png"}
//               width={110}
//               height={110}
//               alt="image one"
//             />
//           </a>
//         </Link>
//         <p className="font-medium text-lg text-gray-one">Category Name</p>
//       </div>
//     </div>
//   );
// };

// export default CategorySlide;
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import SingleSlide from "./SingleSlide";

const CategorySlide = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  return (
    <div className="md:container px-2 md:px-0">
      {/* Swipper JS */}
      <div className="flex flex-row items-center justify-between gap-6">
        <div ref={prevRef}>
          <button className="bg-gray-seven p-3 rounded-full text-[#999999] hover:bg-green-two hover:transition-all hover:text-white">
            <FaAngleLeft className="text-xl" />
          </button>
        </div>
        <Swiper
          // navigation={false}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          modules={[Navigation]}
          breakpoints={{
            // 50: {
            //   slidesPerView: 1,
            //   spaceBetween: 10,
            // },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            },
            1500: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <SingleSlide />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlide />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlide />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlide />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlide />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlide />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlide />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlide />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlide />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlide />
          </SwiperSlide>
        </Swiper>
        <div ref={nextRef}>
          <button className="bg-gray-seven p-3 rounded-full text-[#999999] hover:bg-green-two hover:transition-all hover:text-white">
            <FaAngleRight className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySlide;
