"use client";
import { Navigation, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const BathData = [
  {
    id: "1",
    name: "Salam",
    desc: "Open 7 days a week exclusively for men.",
    img: "/bath1.jpeg",
  },
  {
    id: "2",
    name: "Istanbul",
    desc: "Open 7 days a week for women and children.",
    img: "/bath2.jpeg",
  },
  {
    id: "3",
    name: "Orient",
    desc: "Open Thursday, Saturday, and Sunday exclusively for women.",
    img: "/bath3.jpeg",
  },
  {
    id: "4",
    name: "Individuel",
    desc: "A private space for women only, seeking a more intimate experience.",
    img: "/bath4.jpeg",
  },
];

export default function Baths() {
  const [swiperRef, setSwiperRef] = useState(null);

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };

  return (
    <div className="bg-primary h-[600px] md:h-[750px] relative" id="bains">
      <div className="max-w-[1124px] mx-auto md:pt-9">
        <div className="yellowDiv pt-[3.5rem] md:pb-9">
          <span className="yellowSpan">Our Baths</span>
        </div>
        <button
          onClick={prevHandler}
          className="w-9 h-9 absolute bottom-3 right-[5rem] xl:top-[58%] xl:left-[4rem] cursor-pointer"
        >
          <BsFillArrowLeftCircleFill className="md:text-[40px] text-3xl text-blue z-[999]" />
        </button>
        <button
          onClick={nextHandler}
          className="w-9 h-9 absolute bottom-3 right-[2rem] xl:top-[58%] xl:right-[4rem]"
        >
          <BsFillArrowRightCircleFill className="md:text-[40px] text-3xl text-blue z-50" />
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
          className=""
        >
          {BathData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="cursor-pointer rounded-2xl relative border border-blue shadow-lg h-[360px] xl:h-[400px] w-[300px] xl:w-[353px] mx-auto">
                <Image
                  className="rounded-[0.9rem] h-full w-full object-cover"
                  src={item.img}
                  alt=""
                  unoptimized
                  property={1}
                  loading="lazy"
                  width={300}
                  height={400}
                />
                <div className="absolute  top-1/2 left-1/2 border border-light bg-light w-[60%] h-[55%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
                  <div
                    className="h-[40%] flex items-end justify-center 
                 w-full"
                  >
                    <p className="text-[1.1rem] md:text-[1.3rem] font-semibold text-blue">
                      Hammam {item.name}
                    </p>
                  </div>
                  <div className="h-[60%] pt-4 px-2 flex items-start justify-center text-center ">
                    <p className="text-[11px] font-sora text-dark">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
