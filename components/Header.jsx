"use client";

import { Link } from "react-scroll";
import Image from "next/image";
import logo from "../public/images/logo/sprite.svg";

const Header = () => {
  return (
    <header className="absolute max-w-full h-auto">
      <div className="flex items-center justify-between px-4">
       <div className="items-center">
  <Image
    src="/public/images/logo/sprite.svg"
    alt="Logo"
    width={59} // Adjust the width as needed
    height={21} // Adjust the height as needed
  />
  <p className="ml-2 text-xl font-semibold">Carp Tavel</p>
</div>
        <div className="flex space-x-4">
          <div className="menu text-sm font-normal tracking-wider text-white">
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="rounded px-2 py-1 text-sm font-medium text-white transition-all duration-300 hover:bg-transparent hover:font-semibold hover:text-black"
            >
              Home
            </Link>
            <Link
              to="gallery"
              smooth={true}
              duration={500}
              className="rounded px-2 py-1 text-sm font-medium text-white transition-all duration-300 hover:bg-transparent hover:font-semibold hover:text-black"
            >
              Gallery
            </Link>
            <Link
              to="contacts"
              smooth={true}
              duration={500}
              className="rounded px-2 py-1 text-sm font-medium text-white transition-all duration-300 hover:bg-transparent hover:font-semibold hover:text-black"
            >
              Contacts
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
