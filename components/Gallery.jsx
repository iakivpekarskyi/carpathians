import React from "react";
import BackgroundWrapper from "./BackgroundWrapper";

const Gallery = () => {
  return (
    <BackgroundWrapper>
      <section
        className="inset-0 h-full w-full  bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/images/bckg/bckg_gallery.jpeg")`,
        }}
      ></section>
    </BackgroundWrapper>
  );
};

export default Gallery;
