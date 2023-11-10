"use client";
import Image from "next/image";
import { Link } from "react-scroll";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";
import Modal from "react-modal";

const navItems = [
  {
    name: "home",
    to: "hero",
  },
  {
    name: "our baths",
    to: "bains",
  },
  {
    name: "our speciality",
    to: "spécialité",
  },
  {
    name: "our services",
    to: "services",
  },
  {
    name: "our formulas",
    to: "formules",
  },
  {
    name: "beauty center",
    to: "salon",
  },
  {
    name: "gallery",
    to: "galerie",
  },
  {
    name: "booking",
    to: "réservation",
  },
];

Modal.setAppElement("body");

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 999,
  },
};

export default function Header() {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="py-9 flex flex-col items-center justify-center gap-2">
      <div className="relative ">
        <Image
          className="md:w-[95px]"
          src={"/logo.png"}
          width={93}
          height={93}
          alt=""
        />
        <span className="absolute text-[12px] bg-primary text-blue font-bold -bottom-[3px] left-1/2 -translate-x-1/2 w-[120%] flex items-center justify-center">
          le temple du bien être
        </span>
      </div>
      {/* navItem */}
      <div className="hidden md:flex gap-4 font-sora uppercase text-[13px] font-semibold tracking-[1px] pt-5">
        {navItems.map((item, index) => (
          <Link
            className="cursor-pointer"
            key={index}
            to={item.to}
            smooth={true}
            spy={true}
          >
            {item.name}
          </Link>
        ))}
      </div>
      {/* Mobile */}
      <button
        onClick={openModal}
        className="md:hidden absolute top-[2rem] right-[2rem]"
      >
        <HiOutlineMenuAlt3 className="text-3xl" />
      </button>
      {open && (
        <Modal
          isOpen={open}
          style={modalStyles}
          onRequestClose={closeModal}
          className="fixed w-[90vw] rounded-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center max-w-[390px] h-[170px] py-[200px] backdrop-blur-[12px] bg-light/70 text-dark transition-all duration-300"
        >
          <div className="flex flex-col z-20 text-light items-center justify-center gap-[10px]">
            {navItems.map((item, index) => {
              return (
                <Link
                  onClick={() => setOpen(false)}
                  className="capitalize font-sora text-[11.5px] text-dark font-semibold cursor-pointer"
                  key={index}
                  to={item.to}
                  smooth={true}
                  spy={true}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
          {/* close Icon */}
          <div className="absolute top-[2rem] right-[2rem]">
            <HiX
              onClick={closeModal}
              className="text-xl cursor-pointer text-blue"
            />
          </div>
        </Modal>
      )}
    </div>
  );
}
