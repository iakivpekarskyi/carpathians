import React from "react";
import BackgroundWrapper from "./BackgroundWrapper";

const Contacts = () => {
  return (
    <BackgroundWrapper>
      <div
        className="inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("/images/bckg/bckg_contacts.jpeg")`,
        }}
      >
        {/* Content */}
        {/* Your content here */}
      </div>
    </BackgroundWrapper>
  );
};

export default Contacts;

//  <section
//       id="contacts"
//       className="bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center text-white"
//       style={{ backgroundImage: "url('/bckg/bckg_2.jpg')" }}
//     >
//       <div className="container text-center mx-auto px-4">
//         <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>

//         <button
//           type="submit"
//           className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
//         >
//           Submit
//         </button>
//       </div>
//     </section>
