"use client";

import { Link } from "react-scroll";
import BackgroundWrapper from "./BackgroundWrapper";

const Hero = () => {
  return (
    <BackgroundWrapper>
      <section
        className="inset-0 h-full w-full  bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/images/bckg/bckg_hero.jpeg")`,
        }}
      >
        <div className="">
          {/* Content */}
          <div className="absolute left-0 right-0 top-28 flex flex-col  gap-6 text-center">
            <div className="mb-4 text-4xl uppercase">
              <div className="flex items-center justify-end">
                <p className="font-medium">7</p>
                <p className="ml-1 font-thin">DAYS</p>
              </div>
              <p className="text-right text-xs font-light tracking-[9.48px]">
                JOURNEY
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-4xl font-medium uppercase">
                <p className="font-medium">Uncover</p>
                <p className="font-thin">{`Carpathian’s `}</p>
                <p className="font-thin">Secrets</p>
              </div>
            </div>
            <p className="max-w-xs text-center text-sm font-extralight">
              We offer you unforgettable trips to the most beautiful parts of
              the Carpathians. Enjoy stunning views, exciting expeditions, and
              the best service!
            </p>
            <p className="text-xs font-extralight">
              Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake /
              Bukovel
            </p>
            <div>
              <Link to="contacts" smooth={true} duration={500}>
                <button className="relative">Join Now</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </BackgroundWrapper>
  );
};

export default Hero;

// const Hero = () => {
//   return (
//     <section className="relative ">
//       {/* Background Image */}
//       <div className=" bg-cover bg-center bg-no-repeat">
//         <Image
//           src="/images/bckg/bckg_hero.jpeg"
//           alt="Background Image"
//           width={4096}
//           height={2688}
//           layout="responsive"
//           objectFit="cover"
//         />
//         {/* Background Overlay */}
//         <div className="absolute inset-0 bg-neutral-950 bg-opacity-50"></div>

//         {/* Background Gradient */}
//         <div className="absolute h-[287px] w-full opacity-[0.75] [background:linear-gradient(180deg,_#001826,_rgba(0,_37,_49,_0))]"></div>
//       </div>

//       {/* Content */}
//       <div className="absolute left-0 right-0 top-28 text-center">
//         <div className="mb-4 text-4xl uppercase">
//           <div className="flex items-center justify-end">
//             <p className="font-medium">7</p>
//             <p className="ml-1 font-thin">DAYS</p>
//           </div>
//           <p className="text-right text-xs font-light tracking-[9.48px]">
//             JOURNEY
//           </p>
//         </div>

//         <div className="flex flex-col items-center">
//           <div className="text-4xl font-medium uppercase">
//             <p className="font-medium">Uncover</p>
//             <p className="font-thin">{`Carpathian’s `}</p>
//             <p className="font-thin">Secrets</p>
//           </div>
//         </div>
//         <p className="max-w-xs text-center text-sm font-extralight">
//           We offer you unforgettable trips to the most beautiful parts of the
//           Carpathians. Enjoy stunning views, exciting expeditions, and the best
//           service!
//         </p>
//         <p className="text-xs font-extralight">
//           Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake / Bukovel
//         </p>
//         <div>
//           <Link to="contacts" smooth={true} duration={500}>
//             <button className="relative">Join Now</button>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
