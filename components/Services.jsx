import React from "react";
import BackgroundWrapper from "./BackgroundWrapper";

const Services = () => {
  return (
    <BackgroundWrapper>
      <div
        className="inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/images/bckg/bckg_services.jpeg")`,
        }}
      >
        {/* Content */}
        {/* Your content here */}
      </div>
    </BackgroundWrapper>
  );
};

export default Services;
