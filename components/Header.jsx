"use client";

import { Link } from "react-scroll";
import Image from "next/image";
import logo from "../public/images/svg/logo.svg";
import { Karantina } from "next/font/google";

const KarantinaFont = Karantina({
  subsets: ["latin"],
  display: "swap",
  weight: "300",
});

const Header = () => {
  return (
    <header className="text-slim fixed z-10 mx-auto mt-1 flex items-center justify-between px-5 text-yellow-50 ">
      <div className="">
        {/* logo */}
        <div className="">
          <Image
            src={logo}
            alt="Logo"
            width={59}
            height={21}
            className=" mt-9 object-contain  "
          />
          <div>
            <p
              className={`${KarantinaFont.className} text-m text-center tracking-5 `}
            >
              Carp Travel
            </p>
          </div>
        </div>
      </div>

      {/* Desktop menu */}
      <div className="">
        <ul className="flex text-sm font-light md:gap-6 xl:gap-14   ">
          <li>
            <Link to="hero" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="gallery" className="hover:underline">
              Services
            </Link>
          </li>
          <li>
            <Link to="gallery" className="hover:underline">
              Career
            </Link>
          </li>
          <li>
            <Link to="gallery" className="hover:underline">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="contacts" className="hover:underline">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

{
  /* Mobile menu */
}
{
  /* 
        <div className="">
          <button className="menu text-sm uppercase font-light text-white">
            Menu
          </button>
        </div> */
}
