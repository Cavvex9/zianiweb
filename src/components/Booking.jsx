import {
  FacebookIcon,
  InstagramIcon,
  WhatsappIcon,
} from "@/subComponents/AllSvgs";
import Link from "next/link";
import React, { useState } from "react";
import { Menu } from "@headlessui/react";
import toast, { Toaster } from "react-hot-toast";
import { BsEnvelope, BsWhatsapp } from "react-icons/bs";

const services = [
  {
    name: "package algues",
  },
  {
    name: "package chocolat",
  },
  {
    name: "package premium",
  },
];

export default function Booking() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    date: "",
    heure: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleServiceChange = (selectedService) => {
    setFormData({
      ...formData,
      service: selectedService,
    });
  };

  const handleSubmitWhatsapp = (e) => {
    e.preventDefault();
    const { nom, email, date, heure, service, message } = formData;
    if (!nom) {
      toast.error("Le nom est requis");
    } else if (!service) {
      toast.error("Choisissez un service");
    } else {
      const whatsappMessage = `Nom: ${nom}%0AEmail: ${email}%0ADate: ${date}%0AHeure: ${heure}%0AService: ${service}%0AMessage: ${message}`;
      const whatsappLink = `https://wa.me/+212661325840?text=${whatsappMessage}`;
      window.location.href = whatsappLink;
      setFormData({
        nom: "",
        email: "",
        date: "",
        heure: "",
        service: "",
        message: "",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nom, email, date, heure, service, message } = formData;

    if (!nom) {
      toast.error("Le nom est requis");
    } else if (!email) {
      toast.error("l'e-mail est requis");
    } else if (!service) {
      toast.error("Choisissez un service");
    } else {
      // Formspree endpoint for your form
      const formspreeEndpoint = "https://formspree.io/f/mknlawpq";

      // Send the form data to Formspree
      fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom,
          email,
          date,
          heure,
          service,
          message,
        }),
      })
        .then((response) => {
          if (response.ok) {
            // Show success message or redirect
            toast.success(
              "Nous vous remercions pour votre réservation. Une confirmation vous sera envoyée prochainement."
            );
            setFormData({
              nom: "",
              email: "",
              date: "",
              heure: "",
              service: "",
              message: "",
            });
          } else {
            // Show error message
            toast.error(
              "Erreur lors de la soumission du formulaire. Essayez plutôt Whatsapp !"
            );
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          toast.error("Internal Server Error. Please try again later.");
        });
    }
  };
  return (
    <div className="bg-primary md:h-[715px] pb-8" id="réservation">
      <div className="max-w-[1124px] px-8 xl:px-0 mx-auto md:pt-9 flex flex-col md:flex-row h-full">
        {/* left */}
        <div className="flex-1 h-full flex flex-col justify-center pt-9 relative">
          <span className="text-[18px] md:text-[30px] text-center md:text-left font-bold text-blue z-10">
            Pour toute réservation, veuillez remplir les informations suivantes
            ou nous contacter directement au :
          </span>
          {/* Numbers */}
          <div className="flex items-center justify-center md:justify-start flex-wrap gap-3 py-[1.5rem] md:py-[1rem]">
            <span className="text-[11px] md:text-[14px] font-sora font-semibold bg-blue text-light px-2 py-2 rounded-md">
              +212 6 61 32 58 40
            </span>
            <span className="text-[11px] md:text-[14px] font-sora font-semibold bg-blue text-light px-2 py-2 rounded-md">
              +212 6 61 16 66 27
            </span>
            <span className="text-[11px] md:text-[14px] font-sora font-semibold bg-blue text-light px-2 py-2 rounded-md">
              +212 5 22 31 96 95
            </span>
          </div>
          <div className="text-[18px] md:text-[30px] text-center md:text-left font-bold text-blue z-10">
          Lieu : Casablanca
          </div>
          {/* Icons */}
          <div className="py-[1.5rem] md:py-[1rem] flex items-center justify-center md:justify-start gap-3">
            <Link
              className="border border-light bg-blue rounded-md"
              target="_blank"
              href={"https://www.facebook.com/profile.php?id=100063616118440"}
            >
              <FacebookIcon width={35} height={35} fill="currentColor" />
            </Link>
            <Link
              className="border border-light bg-blue rounded-md"
              target="_blank"
              href={"https://www.instagram.com/hammamziani"}
            >
              <InstagramIcon width={35} height={35} fill="currentColor" />
            </Link>
            <Link
              className="border border-light bg-blue rounded-md"
              href={"https://wa.me/+212661325840"}
            >
              <WhatsappIcon width={35} height={35} fill="currentColor" />
            </Link>
          </div>
        </div>
        {/* right */}
        <div className="flex-1 flex items-center justify-center md:justify-end h-full">
          <form
            action="https://formspree.io/f/mknlawpq"
            method="POST"
            className=" md:h-[600px] h-[520px] bg-light w-[320px] md:w-[370px] rounded-t-[14rem] p-[1.5rem] border border-dark text-sm md:text-[17px]"
          >
            <div className="flex h-full gap-1 md:gap-2 flex-col items-center justify-center bg-blue border border-primary rounded-t-[14rem] pt-[4rem] md:pt-[5rem]">
              <input
                className="input rounded-t-[1rem]"
                type="text"
                placeholder="Nom"
                name="nom"
                value={formData.nom}
                onChange={handleChange}
              />
              <input
                className="input"
                type="text"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                className="input  before:text-gray-400 "
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
              <input
                className="input   before:text-gray-400"
                type="time"
                name="heure"
                value={formData.heure}
                onChange={handleChange}
              />
              <Menu as="div" className="input flex relative">
                <Menu.Button className="w-full flex items-center">
                  {formData.service || "Choisissez un service"}
                </Menu.Button>
                <Menu.Items
                  as="ul"
                  className="absolute top-[2.05rem] md:top-[2.4rem] left-0 w-full flex flex-col items-center justify-center bg-light"
                >
                  {services.map((li, index) => {
                    return (
                      <Menu.Item
                        key={index}
                        className="md:p-[10px] p-2 first-of-type:border-t border-b border-dark last-of-type:border-b-0 hover:bg-blue hover:text-light w-full flex items-center justify-center cursor-pointer capitalize"
                        as="li"
                        value={li.name}
                        name="services"
                        onClick={() => handleServiceChange(li.name)}
                      >
                        {li.name}
                      </Menu.Item>
                    );
                  })}
                </Menu.Items>
              </Menu>
              <input
                className="w-[92%] max-w-[250px] md:w-full p-2  md:pb-[4rem] pb-[3.5rem] bg-white border border-solid border-blue text-blue rounded-none outline-none text-[16px]"
                type="text"
                placeholder="Commentaire"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              <div className="w-[92%] md:w-full max-w-[250px] flex items-center justify-between">
                <button
                  onClick={handleSubmit}
                  className="bg-primary border border-blue flex items-center justify-center gap-2 px-3 py-3 text-[12px] md:text-[14px] w-1/2 font-semibold"
                >
                  <BsEnvelope className="text-[16px] md:text-xl" />
                  <span>Réserver</span>
                </button>
                <button
                  className="border border-blue flex items-center justify-center gap-2 bg-green-600 text-light px-1 py-3 w-1/2 text-[12px] md:text-[14px] font-semibold"
                  onClick={handleSubmitWhatsapp}
                >
                  <BsWhatsapp className="text-[16px] md:text-xl" />
                  <span>Par Whatsapp</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
