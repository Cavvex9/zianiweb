"use client";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

// const data = [
//   {
//     id: 1,
//     color: "green",
//     title: "Seaweed package",
//     descriptions: [
//       "Entry + Scrubbing",
//       "Soaping",
//       "30 mins of relaxing massage with essential oils",
//       "Seaweed Therapy + special back",
//       "Bathrobe",
//       "Toilet bag",
//     ],
//     price: 350,
//   },
//   {
//     id: 2,
//     color: "brown",
//     title: "chocolate package",
//     descriptions: [
//       "Entry + Scrubbing",
//       "Soaping",
//       "30 mins of relaxing massage with essential oils",
//       "Chocolate body wrap",
//       "Bathrobe",
//       "Toilet bag",
//     ],
//     price: 400,
//   },
//   {
//     id: 3,
//     color: "gold",
//     title: "Premium package",
//     descriptions: [
//       "Entry + Scrubbing",
//       "Soaping",
//       "One hour of relaxing massage with essential oils ",
//       "Seaweed or chocolate body wrap",
//       "Facial brightening mask",
//       "Hydrating body mask",
//       "Bathrobe + Toilet bag",
//     ],
//     price: 500,
//   },
// ];

export default function Formules({formulesEn}) {
  const sortedData = formulesEn
  .slice()
  .sort((a, b) => a._createdAt.localeCompare(b._createdAt));
  const [swiperRef, setSwiperRef] = useState(null);

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };

  const getColorClass = (color) => {
    switch (color) {
      case "red":
        return "bg-red-500 text-light";
      case "green":
        return "bg-green-400";
      case "yellow":
        return "bg-yellow-300";
      case "brown":
        return "bg-amber-800 text-light";
      case "pink":
        return "bg-pink-400";
      case "gold":
        return "bg-primary";
      case "gold":
        return "bg-primary";
      default:
        return "bg-blue text-light";
    }
  };

  return (
    <div
      className="bg-ziani bg-cover bg-center h-[600px] md:h-[700px] pt-[3rem] relative"
      id="formules"
    >
      <div className="max-w-[1124px] mx-auto md:pt-9">
        <div className="yellowDiv">
          <span className="yellowSpan">Our Formulas</span>
        </div>
      </div>
      <button
        onClick={prevHandler}
        className={`w-9 h-9 absolute bottom-3 right-[5rem] cursor-pointer ${
          formulesEn.length > 3
            ? "xl:inline-block xl:left-[15rem] xl:bottom-[4rem]"
            : "xl:hidden"
        } `}
      >
        <BsFillArrowLeftCircleFill className="md:text-[40px] text-3xl text-primary" />
      </button>
      <button
        onClick={nextHandler}
        className={`w-9 h-9 absolute bottom-3 right-[2rem] ${
          formulesEn.length > 3
            ? "xl:inline-block xl:right-[15rem] xl:bottom-[4rem]"
            : "xl:hidden"
        }`}
      >
        <BsFillArrowRightCircleFill className="md:text-[40px] text-3xl text-primary" />
      </button>
      <Swiper
        modules={[Pagination, Navigation]}
        pagination={{ clickable: true }}
        loop={true}
        onSwiper={(swiper) => setSwiperRef(swiper)}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 32 },
          1120: { slidesPerView: 3, spaceBetween: 32 },
        }}
        className="md:h-[25rem] h-[18.3rem] max-w-[1324px]"
      >
        {sortedData.map((item) => (
          <SwiperSlide
            key={item._id}
            className=" h-full pt-[5rem] cursor-pointer"
          >
            <div className=" bg-light h-[12.5rem] md:h-[14rem] w-[85%] md:w-[24rem] m-auto rounded-xl relative border border-blue">
              <div
                className={`absolute h-[102%] w-[102%] top-1 ${getColorClass(
                  item.color
                )} -z-10 rounded-xl`}
              />
              <div
                className={`absolute -top-5 -left-5 w-[10rem] h-[2.8rem] rounded-xl ${getColorClass(
                  item.color
                )} flex items-center justify-center border border-blue font-bold uppercase text-sm md:text-[16px]`}
              >
                {item.name}
              </div>
              {/* texts */}
              <ul className="mt-6 md:mt-7 p-4 flex flex-col gap-1 marker:text-sky-700 list-disc pl-5 md:pl-7 ">
                {item.formuleDesc.map((ItemDesc, index) => (
                  <li
                    className="font-sora text-[11px] md:text-[12px]"
                    key={index}
                  >
                    {ItemDesc}
                  </li>
                ))}
              </ul>
              {/* price */}
              <div className="absolute right-4 top-4 font-sora font-bold text-sm md:text-[15px]">
                {item.price} DH
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
