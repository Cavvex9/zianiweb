import Image from "next/image";
import TripAdvisor from "@/subComponents/TripAdvisor";
import Google from "@/subComponents/Google";
import ScrollTopTop from "@/subComponents/ScrollTopTop";
import { useEffect, useState } from "react";
import Header from "./Header";
import Link from "next/link";

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 750 ? setIsScrolled(true) : setIsScrolled(false);
    });
  }, []);

  return (
    <div
      className="md:h-[770px] lg:h-[710px] bg-ziani bg-cover bg-center pb-[12rem] lg:pb-0 relative"
      id="hero"
    >
      {/* Logo */}
      <div className="text-light flex items-center justify-center md:pb-9">
        <Header />
      </div>
      {/* Hero */}
      <div className="text-light h-full flex flex-col md:flex-row justify-between max-w-[1124px] mx-auto px-8 xl:px-0">
        <div className="flex-1 ">
          <p className="md:text-[29px] text-[19px] md:leading-[40px] leading-[25px] font-bold md:text-justify text-justify ">
            Explore the origins of Morocco&apos;s
            <span className="text-primary"> first </span> unique traditional
            hammam established in
            <span className="text-primary"> 1996.</span> At Hammam
            <span className="text-primary"> Ziani</span>, each visit is an
            invitation to an <span className="text-primary"> authentic </span>{" "}
            and
            <span className="text-primary"> traditional</span>, experience, with
            personalized service and a caring, professional staff.
          </p>
        </div>
        <div className="flex-1 flex md:justify-end justify-center pt-4 md:pt-0">
          <div className="w-[18rem] h-[20rem] md:h-[23rem] md:w-[20rem] flex flex-col justify-between bg-light relative">
            <div className="absolute w-[95%] h-[95%] border border-dark top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            <div className="text-blue flex gap-3 flex-col text-center items-center justify-center mt-[3rem] md:mt-[4rem]">
              <p className="font-sora text-[13px] md:text-[15px]">
              One of the most beautiful
              </p>
              <p className="text-[25px] md:text-[27px] font-semibold leading-[28px] md:leading-[35px]">
              Traditional baths <br />in Morocco
              </p>
            </div>
            {/* Image */}
            <div className="pb-2 self-center">
              <Image
                className="md:w-[20rem]"
                src={"/hero.png"}
                alt=""
                unoptimized
                property={1}
                loading="lazy"
                width={256}
                height={256}
              />
            </div>
            {/* Brackets */}
            <div className="absolute top-[1rem] md:top-[1.5rem] left-1/2 -translate-x-1/2 md:w-[13rem]">
              <Image
                className="md:w-[12.5rem] md:h-[30px]"
                src={"/bracket.png"}
                alt=""
                unoptimized
                property={1}
                loading="lazy"
                width={176}
                height={176}
              />
            </div>
            <div className="absolute top-[9rem] md:top-[10.5rem] rotate-180 left-1/2 -translate-x-1/2 md:w-[13rem]">
              <Image
                className="md:w-[12.5rem] md:h-[30px]"
                src={"/bracket.png"}
                alt=""
                unoptimized
                property={1}
                loading="lazy"
                width={176}
                height={176}
              />
            </div>
          </div>
        </div>
        {/* TripAdvisor & Google */}
        <div className="absolute bottom-[2.5rem] left-[2rem]">
          <div className="w-[6.5rem] h-[8.5rem] bg-[#19a780] relative rounded-t-full">
            <TripAdvisor title="Certificat of excellence" />
          </div>
        </div>
        <div className="absolute bottom-[2.5rem] right-[2rem] md:left-[9.5rem]">
          <div className="relative w-[6.5rem] h-[8.5rem] bg-light rounded-t-full">
            <Google />
          </div>
        </div>
      </div>
      {/* ScrollToTop */}
      <div
        className={` ${
          isScrolled ? "fixed" : "hidden"
        } bottom-[1.5rem] left-1/2 -translate-x-1/2 z-50 w-fit `}
      >
        <ScrollTopTop />
      </div>
      {/* SwitchLang */}
      <Link href={"/"} className="absolute top-[2rem] md:-top-[2.3rem] left-[2rem] text-light border rounded-full">
        <Image src={"/fr.png"} alt="" width={30} height={30} />
      </Link>
    </div>
  );
}
