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
import Image from "next/image";
import { urlFor } from "../../lib/client";

// const data = [
//   {
//     img1: "/gallery/img1.jpeg",
//   },
//   {
//     img1: "/gallery/img2.jpeg",
//   },
//   {
//     img1: "/gallery/img3.jpeg",
//   },
//   {
//     img1: "/gallery/img4.jpeg",
//   },
//   {
//     img1: "/gallery/img5.jpeg",
//   },
//   {
//     img1: "/gallery/img6.jpeg",
//   },
//   {
//     img1: "/gallery/img7.jpeg",
//   },
//   {
//     img1: "/gallery/img8.jpeg",
//   },
//   {
//     img1: "/gallery/img9.jpeg",
//   },
//   {
//     img1: "/gallery/img10.jpeg",
//   },
//   {
//     img1: "/gallery/img11.jpeg",
//   },
//   {
//     img1: "/gallery/img12.jpeg",
//   },
// ];

export default function Gallery({ title, gallery }) {
  const [swiperRef, setSwiperRef] = useState(null);

  const prevHandler = () => {
    swiperRef.slidePrev();
  };

  const nextHandler = () => {
    swiperRef.slideNext();
  };

  return (
    <div
      className="bg-ziani bg-center bg-cover h-[650px] md:h-[700px] relative"
      id="galerie"
    >
      <div className="max-w-[1124px] mx-auto pt-[4rem] px-8 md:px-0">
        <div className="yellowDiv">
          <span className="yellowSpan">{title}</span>
        </div>
        <button
          onClick={prevHandler}
          className="w-9 h-9 absolute bottom-3 right-[5rem] xl:top-[58%] xl:left-[4rem] cursor-pointer"
        >
          <BsFillArrowLeftCircleFill className="md:text-[40px] text-3xl text-primary z-[999]" />
        </button>
        <button
          onClick={nextHandler}
          className="w-9 h-9 absolute bottom-3 right-[2rem] xl:top-[58%] xl:right-[4rem]"
        >
          <BsFillArrowRightCircleFill className="md:text-[40px] text-3xl text-primary z-50" />
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
          className="h-[380px] md:h-[400px] mt-9"
        >
           {gallery.map((slide) => {
              const src = urlFor(slide.image).url();
              return (
                <SwiperSlide key={slide._id}>
                  <div className="cursor-pointer rounded-2xl mx-auto px-7 w-[280px] md:w-[353px] h-[380px] relative border border-primary">
                    <Image
                      className="absolute h-full w-full object-cover rounded-2xl border border-primary"
                      loader={() => src}
                      src={src}
                      fill
                      alt=""
                      unoptimized
                      property={1}
                      loading="lazy"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
}
