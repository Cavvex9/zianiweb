import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import {
  RiPhoneLine,
  RiMailLine,
  RiFacebookCircleLine,
  RiInstagramLine,
  RiWhatsappLine,
} from "react-icons/ri";
export default function TopBar() {
  const pathname = usePathname();
  return (
    <div id="topbar">
      <section className="h-[2.8rem] bg-blue text-light hidden md:block">
        <div className="max-w-[1124px] flex items-center justify-between mx-auto h-full px-8 xl:px-0">
          {/* left */}
          <div className="flex items-center gap-3">
            <RiPhoneLine size={23} />
            <p className="text-[15px]">05-22-31-96-95</p>
            <RiMailLine size={23} />
            <p className="text-[15px]">Hammamziani@yahoo.com</p>
          </div>
          {/* right */}
          <div className="flex items-center gap-[6px] text-primary">
            <Link
              href={"https://www.facebook.com/profile.php?id=100063616118440"}
              target="_blank"
            >
              <RiFacebookCircleLine size={23} />
            </Link>
            <Link
              href={"https://www.instagram.com/hammamziani"}
              target="_blank"
            >
              <RiInstagramLine size={23} />
            </Link>
            <Link href={"https://www.whatsapp.com"} target="_blank">
              <RiWhatsappLine size={23} />
            </Link>
          </div>
        </div>
      </section>
      {/* Mobile */}
      <section className="h-[2.8rem] bg-blue text-light md:hidden">
        <div className="flex h-full items-center justify-center relative">
          <span className="font-semibold text-[15px] z-10 tracking-wide text-primary">
            {pathname === "/en"
              ? "Open from 7 AM to 9:30 PM 7 days a week"
              : "Ouvert de 7h à 21h30 7j/7"}
          </span>
          {/* <span className="font-semibold text-[15px] tracking-wide absolute top-[12.4px] left-[91px]">Ouvert de 7h à 21h30 7j/7</span> */}
        </div>
      </section>
    </div>
  );
}
