import Link from "next/link";
import React from "react";
import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { SiTripadvisor } from "react-icons/si";

export default function TripAdvisor({title}) {
  return (
      <Link
        href={
          "https://www.tripadvisor.com/Attraction_Review-g293732-d2192796-Reviews-Hammam_Ziani-Casablanca_Casablanca_Settat.html"
        }
        target="_blank"
        className=""
      >
        {/* <div className="w-1 h-[515px] bg-light absolute bottom-[9rem] left-1/2 -translate-x-1/2 -z-[40]"></div> */}
        <div className="h-[100%] w-[100%] border border-solid border-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-t-full"></div>
        <div className="h-[95%] w-[93%] border border-solid border-light absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-t-full"></div>
        <SiTripadvisor className="text-4xl  top-[4.1rem] left-1/2 -translate-x-1/2  absolute" />
        <div className="w-[3rem] h-[3rem] border border-solid border-light rounded-full absolute top-[3.7rem] left-1/2 -translate-x-1/2 "></div>
        <h1 className="absolute top-7 left-1/2 -translate-x-1/2 w-full font-[550] md:font-semibold text-[12px] md:text-[14px] text-center leading-[1]">
          {title}
        </h1>
        <h1 className="absolute font-semibold bottom-2 left-1/2 -translate-x-1/2 capitalize text-sm">
          tripadvisor
        </h1>
        <div className="text-primary text-xl flex absolute -bottom-6 left-1/2 -translate-x-1/2">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaRegStarHalfStroke />
        </div>
      </Link>
  );
}
