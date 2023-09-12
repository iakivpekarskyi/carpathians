"use client";

import { Link } from "react-scroll";
import BackgroundWrapper from "./BackgroundWrapper";

const Hero = () => {
  return (
    <BackgroundWrapper>
      <section className="h-screen w-screen">
        <div
          className="inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("/images/bckg/bckg_hero.jpeg")`,
          }}
        >
          {/* Content */}
          {/* <div className="  inset-0 flex flex-col justify-center items-center text-white">
          <div className="text-4xl font-bold">Uncover Carpathian’s Secrets</div>
          <div className="text-sm font-extralight text-center max-w-xs mt-4">
            We offer you unforgettable trips to the most beautiful parts of the
            Carpathians. Enjoy stunning views, exciting expeditions, and the
            best service!
          </div>
          <div className="text-xs font-extralight mt-4">
            Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
          </div>
          <div className="text-6xl font-medium uppercase mt-4">
            <p className="font-thin">Uncover</p>
            <p className="font-thin">{`Carpathian’s `}</p>
            <p className="font-thin">Secrets</p>
          </div>
          <div className="text-4xl tracking-tighter uppercase mt-4">
            <div className="font-medium">7</div>
            <div className="font-thin">DAYS</div>
            <div className="font-light">JOURNEY</div>
          </div>
          <div className="bg-gray border-[1px] border-dashed border-white px-16 py-4 text-center text-[32px] mt-4">
            <Link to="contacts" smooth={true} duration={500}>
              <button className="relative">Join Now</button>
            </Link>
          </div>
        </div> */}
        </div>
      </section>
    </BackgroundWrapper>
  );
};

export default Hero;
