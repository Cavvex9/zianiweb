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

const data = [
  {
    id: 1,
    image: "/gommage.jpeg",
    title: "Scrubbing",
    description:
      "A purifying ritual that reveals the natural beauty of your skin.",
  },
  {
    id: 2,
    image: "/savonnage.png",
    title: "Soaping",
    description:
      "An aromatic bath of freshness, for soft and delicately fragranced skin.",
  },
  {
    id: 3,
    image: "/massage.jpeg",
    title: "Relaxing Massage with Essential Oils",
    description: "A sensory escape to soothe the body and mind.",
  },
  {
    id: 4,
    image: "/algue.jpg",
    title: "Seaweed Therapy - special back",
    description:
      "A revitalizing ritual that soothes back pain and stimulates blood circulation. The benefits of marine algae deeply nourish your skin, providing a soothing and relaxing sensation.",
  },
  {
    id: 5,
    image: "/chocolate.jpeg",
    title: "Chocolate body wrap",
    description:
      "An indulgent treatment that combines gourmet pleasure with moisturizing benefits, for irresistibly soft skin.",
  },
  {
    id: 6,
    image: "/masqueCorp.jpeg",
    title: "Body masks",
    description:
      "Choose from our wide range of masks, including exquisite options such as orange coffee, oud, orange blossom, and many more. Each of our body masks is carefully crafted to revitalize your skin, leaving it nourished, radiant, and delicately fragranced.",
  },
];

export default function Services() {
  const [swiperRef, setSwiperRef] = useState(null);

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };

  return (
    <div
      className="bg-primary h-[650px] md:h-[750px] pt-9 xl:pt-0 px-[2rem] xl:px-0 relative"
      id="services"
    >
      <div
        className="max-w-[1124px] mx-auto md:pt-[3rem] md:pb-9 
      "
      >
        <div className="yellowDiv">
          <span className="yellowSpan">our services</span>
        </div>
      </div>
      <button
        onClick={prevHandler}
        className="w-9 h-9 absolute bottom-3 right-[5rem] xl:top-[54%] xl:left-[4rem] cursor-pointer"
      >
        <BsFillArrowLeftCircleFill className="md:text-[40px] text-3xl text-blue z-[999]" />
      </button>
      <button
        onClick={nextHandler}
        className="w-9 h-9 absolute bottom-3 right-[2rem] xl:top-[54%] xl:right-[4rem]"
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
        className="h-[27.6rem] md:h-[29.5rem] max-w-[1124px] md:mt-3"
      >
        {data.map((item) => (
          <SwiperSlide
            key={item.id}
            className="flex flex-col bg-light rounded-2xl border border-blue cursor-pointer "
          >
            <div className="h-[12.7rem] md:h-[14rem] relative bg-light shadow-md rounded-t-2xl">
              <Image
                className="absolute h-full w-full object-cover p-2 rounded-t-2xl"
                src={item.image}
                width={200}
                height={200}
                alt={item.title}
                unoptimized
                property={1}
                loading="lazy"
              />
            </div>
            <div className="flex flex-col p-4 justify-center items-center">
              <span className="text-blue font-bold text-[16px] md:text-[19px] uppercase text-center min-h-[3rem]">
                {item.title}
              </span>
              <p className="pt-2 md:pt-4 text-center text-[11px] md:text-[12.3px] font-sora leading-5 font-[500]">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
