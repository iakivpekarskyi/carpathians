"use client";


import Image from "next/image";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/bckg/bckg_1.jpg')" }}
    >
      <div className="w text-center">
        <h1 className="text-4xl font-bold">Uncover Carpathian’s Secrets</h1>
          <Image className="object-contain"
            src="/public/images/logo/svg.svg"
            alt="Logo"
            width={59} // Adjust the width as needed
            height={21} // Adjust the height as needed
          />
        <Link to="contacts" smooth={true} duration={500}>
          <button>Join Now</button>
        </Link>
       
      </div>
    </section>
  );
};

export default Hero;

// const Hero = () => {
//   return (
//     <div className="font-inter relative h-[763px] w-full overflow-hidden text-left text-base text-white">
//       <div className="absolute left-[calc(50%_-_640px)] top-[calc(50%_-_275.5px)] h-[577px] w-[1280px] overflow-hidden">
//         <div
//           className="absolute left-[24px] top-[24px] h-[529px] w-[1232px]"
//           style={{ backgroundImage: "url('/bckg/bckg_1.jpg')" }}
//         >
//           <div className="absolute left-[0px] top-[0px] h-[529px] w-[646px]">
//             <div className="absolute left-[0px] top-[505px] inline-block w-[608px] font-extralight leading-[24px] tracking-[0.09em]">
//               Hoverla / Yaremche / Zakarpattia / Vorokhta / Synevyr Lake /
//               Bukovel
//             </div>
//             <div className="text-79xl absolute left-[0px] top-[0px] inline-block w-[646px] uppercase tracking-[-0.04em]">
//               <p className="m-0 font-medium">Uncover</p>
//               <p className="m-0 font-thin">{`Carpathian’s `}</p>
//               <p className="m-0 font-thin">Secrets</p>
//             </div>
//           </div>
//           <div className="text-79xl absolute left-[927px] top-[0px] h-[523px] w-[305px]">
//             <div className="absolute left-[0px] top-[0px] h-[123px] w-[305px]">
//               <div className="absolute left-[0px] top-[0px] inline-block w-[57px] font-medium">
//                 7
//               </div>
//               <div className="absolute left-[65px] top-[0px] inline-block w-60 font-thin">
//                 DAYS
//               </div>
//               <div className="absolute left-[4px] top-[104px] inline-block w-[295px] text-base font-light tracking-[2.28em]">
//                 JOURNEY
//               </div>
//             </div>
//             <div className="absolute left-[11px] top-[304px] inline-block w-[294px] text-justify text-[18px] font-extralight leading-[24px]">
//               We offer you unforgettable trips to the most beautiful parts of
//               the Carpathians. Enjoy stunning views, exciting expeditions, and
//               the best service!
//             </div>
//             <div className="bg-gray absolute left-[12px] top-[452px] flex flex-row items-center justify-center border-[1px] border-dashed border-white px-16 py-4 text-center text-[32px]">
//               <Link
//                 className="relative"
//                 to="contacts"
//                 smooth={true}
//                 duration={500}
//               >
//                 <button>Join Now</button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="absolute left-[calc(50%_-_616px)] top-[24px] h-[34px] w-[1235px] text-sm">
//         <div className="absolute left-[calc(50%_+_103.5px)] top-[10px] flex flex-row items-start justify-start gap-[56px]">
//           <div className="relative tracking-[0.1em]">About</div>
//           <div className="relative tracking-[0.1em]">Services</div>
//           <div className="relative tracking-[0.1em]">Career</div>
//           <div className="relative tracking-[0.1em]">Gallery</div>
//           <div className="relative tracking-[0.1em]">Contacts</div>
//         </div>
//         <div className="font-karantina absolute left-[0px] top-[0px] flex flex-col items-start justify-start gap-[2px]">
//           <div className="relative h-[22px] w-[61px] shrink-0 overflow-hidden"></div>
//           <div className="relative tracking-[0.19em]">CarpTravel</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
