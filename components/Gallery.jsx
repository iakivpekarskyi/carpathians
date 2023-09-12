import React from "react";
import BackgroundWrapper from "./BackgroundWrapper";

const Gallery = () => {
  return (
    <BackgroundWrapper>
      <div
        className="inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/images/bckg/bckg_gallery.jpeg")`,
        }}
      >
        {/* Content */}
        {/* Your content here */}
      </div>
    </BackgroundWrapper>
  );
};

export default Gallery;
