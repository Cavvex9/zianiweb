import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const data = [
  {
    img: "/salon1.jpeg",
  },
  {
    img: "/salon2.jpeg",
  },
  {
    img: "/salon3.jpeg",
  },
  {
    img: "/salon5.jpeg",
  },
];

export default function Salon() {
  const pathname = usePathname();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-primary md:h-[650px] " id="salon">
      <div className="max-w-[1124px] px-8 xl:px-0 mx-auto md:pt-9 flex flex-col md:flex-row h-full">
        {/* left */}
        <div className="flex-1 h-full flex flex-col justify-center pt-9">
          <div className="yellowDiv md:justify-start">
            <span className="yellowSpan">
              {pathname === "/en"
                ? "ziani beauty center"
                : "centre de beauté ziani"}
            </span>
          </div>
          <div className="">
            <p className="text-justify font-sora leading-[20px] md:leading-[30px] text-[11px] md:text-[12px] lg:text-[14px] font-medium tracking-wide md:pt-5 md:max-w-[90%]">
              {pathname === "/en"
                ? "Our beauty center offers exceptional services to enhance your appearance. You can choose from a variety of services including hair care, waxing, facials, and many more. Our professional team are pleased to welcome you everyday from 9:30 AM to 7:00 PM."
                : "Au-delà des hammams, notre centre de beauté propose des services exceptionnels pour sublimer votre apparence. Du lissage aux soins capillaires, de l'épilation à l'hydrafacial, notre équipe professionnelle saura répondre à tous vos besoins. Notre centre de beauté vous accueille tous les jours de 9h30 à 19h."}
            </p>
          </div>
        </div>
        {/* right */}
        <div className="flex-1 flex items-center justify-center pt-8 pb-12 md:pt-0 md:pb-0 md:justify-end z-10 h-full">
          <div className="md:h-[30rem] md:w-[25rem] h-[27rem] border-2 border-light rounded-2xl relative">
            <button
              onClick={() => {
                currentSlide === 0
                  ? setCurrentSlide(data.length - 1)
                  : setCurrentSlide((prev) => prev - 1);
              }}
              className="w-[30px] h-[30px] md:w-9 md:h-9 absolute bottom-3 right-[5rem] xl:top-[50%] xl:-left-[4rem] flex items-center justify-center rounded-full bg-light md:bg-primary"
            >
              <BsFillArrowLeftCircleFill className="md:text-[40px] text-3xl text-blue z-[999] rounded-full" />
            </button>
            <button
              onClick={() => {
                currentSlide === data.length - 1
                  ? setCurrentSlide(0)
                  : setCurrentSlide((prev) => prev + 1);
              }}
              className="w-[30px] h-[30px] md:w-9 md:h-9 absolute bottom-3 right-[2rem] xl:top-[50%] xl:-right-[4.6rem] flex items-center justify-center rounded-full bg-light md:bg-primary"
            >
              <BsFillArrowRightCircleFill className="md:text-[40px] text-3xl text-blue z-50  rounded-full" />
            </button>
            <div className="absolute -z-10 top-0 -right-4 w-[103%] h-[104%] bg-blue rounded-2xl " />
            <Image
              className="h-full w-full rounded-[0.8rem] object-cover"
              src={data[currentSlide].img}
              alt=""
              unoptimized
              property={1}
              loading="lazy"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
