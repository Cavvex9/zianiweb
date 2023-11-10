import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

export default function Speciality() {
  const pathname = usePathname();
  return (
    <div
      className="bg-ziani bg-cover bg-center h-full md:h-[650px]"
      id="spécialité"
    >
      <div className="max-w-[1124px] mx-auto md:pt-9 flex flex-col md:flex-row h-full">
        {/* left */}
        <div className="flex-1 h-full flex flex-col justify-center pt-9">
          <div className="yellowDiv md:justify-start">
            <span className="yellowSpan">
              {pathname === "/en" ? "our specialty" : "notre spécialité"}
            </span>
          </div>
          <div className="text-light px-8 md:px-0">
            <span className="text-[17px] md:text-[1.2rem] font-bold">
              {pathname === "/en"
                ? "The art of a refined bath, a tradition of our own."
                : "L'art d'un bain raffiné, une tradition de chez nous."}
            </span>
            <p className="text-justify font-sora leading-[20px] md:leading-[28px] text-[11px] md:text-[12px] lg:text-[14px] font-medium pt-5">
              {pathname === "/en"
                ? "In a peaceful oasis, our wellness hammam offers a range of exquisite treatments that combine the rituals of a traditional hammam with modern services. As you step through our doors, you're welcomed by a warm ambiance infused with the soothing scents of essential oils and the gentle sound of flowing water. The Hammam Ziani team are experts in their field, attentive, and caring. Each treatment is delivered with love and attention."
                : "Niché dans une oasis tranquille, ce temple de bien-être offre une gamme de soins exquis qui marient les rituels du hammam traditionnel aux techniques de bien-être modernes. Dès que vous franchissez ses portes ornées, vous êtes accueilli par une ambiance chaleureuse imprégnée des parfums apaisants des huiles essentielles et du doux bruit de l'eau qui s'écoule. L'équipe du Hammam Ziani sont des experts dans leur domaine, à l'écoute et aux petits soins. Chaque soin est prodigé avec amour et attention."}
            </p>
          </div>
        </div>
        {/* right */}
        <div className="flex-1 flex items-center justify-center pt-8 pb-12 md:pt-0 md:pb-0 md:justify-end z-10 h-full">
          <div className="md:h-[30rem] md:w-[25rem] h-[27rem] w-[80%] border-2 border-blue rounded-2xl relative">
            <div className="absolute -z-10 top-0 -right-4 w-[103%] h-[104%] bg-[#b6c7bd] rounded-2xl " />
            <Image
              className="h-full w-full rounded-[0.8rem] object-cover"
              src={"/spéciality.jpg"}
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
