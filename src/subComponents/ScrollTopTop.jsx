"use client";
import React from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { Link } from "react-scroll";

export default function ScrollTopTop() {
  return (
    <div className="h-[3rem] z-40 flex items-center justify-center">
      <Link to="topbar" spy={true} smooth={true} className="animate-bounce ">
        <BsFillArrowUpSquareFill className="text-3xl cursor-pointer text-light bg-blue border-2 border-blue rounded-md" />
      </Link>
    </div>
  );
}
