import Link from 'next/link'
import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default function Google() {
  return (
    <Link
    href={
      "https://www.google.com.ng/travel/entity/key/ChgIhvSBi4mJ0_dxGgwvZy8xczA0OXM3NV8QBA/reviews?utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAESABoECgIaACoECgAaAA"
    }
    target="_blank"
  >
    {/* <div className="w-1 h-[515px] bg-light absolute bottom-[9rem] left-1/2 -translate-x-1/2 -z-[40]"></div> */}
    <div className="h-[100%] w-[100%] border border-solid border-dark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-t-full"></div>
    <div className="h-[95%] w-[93%] border border-solid border-dark absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-t-full"></div>
    <FcGoogle className="text-5xl  top-[3rem] left-1/2 -translate-x-1/2  absolute" />
    <h1 className="absolute top-7 left-1/2 text-primary -translate-x-1/2 w-full md:font-semibold text-[12px] md:text-[14px] font-[550] text-center leading-[1]">
      {/* <span className="text-red-500">Certificat</span> <br />
      <span className="text-green-600">d&apos;excellence</span> */}
    </h1>
    <h1 className="absolute text-[#1976d2] font-semibold bottom-2 left-1/2 -translate-x-1/2 capitalize text-sm">
      Google
    </h1>
    <div className="text-primary text-xl flex absolute -bottom-6 left-1/2 -translate-x-1/2">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaRegStarHalfStroke />
    </div>
  </Link>
  )
}
