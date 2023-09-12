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
    <section className="absolute z-10 flex w-full  justify-between px-5">
      {/* logo */}
      <div>
        <div>
          <Image
            src={logo}
            alt="Logo"
            width={59}
            height={21}
            className=" mt-9 object-contain"
          />
          <div className="text-justify">
            <p
              className={`${KarantinaFont.className}  text-13 justify-center tracking-[2.59px] `}
            >
              CarpTravel
            </p>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className=" mt-11 sm:hidden">
        <button className=" text-sm font-light uppercase text-white">
          Menu
        </button>
      </div>

      {/* Desktop menu */}
      <div className=" mt-8 hidden sm:block">
        <ul className="flex text-sm font-light sm:gap-8 md:gap-14   ">
          <li>
            <Link to="hero" className="hover:underline">
              Home
            </Link>
          </li>
          {/* <li>
            <Link to="gallery" className="hover:underline">
              Services
            </Link>
          </li> */}
          {/* <li>
            <Link to="gallery" className="hover:underline">
              Career
            </Link>
          </li> */}
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
    </section>
  );
};

export default Header;
