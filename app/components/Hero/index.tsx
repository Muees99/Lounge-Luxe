// import React from "react";
// import { CiSearch } from "react-icons/ci";

// const Hero = () => {
//   return (
//     <header
//       className=" relative w-full sm:h-screen h-full"
//       style={{
//         backgroundImage: `url('/assets/couch.png')`,
//         backgroundSize: "cover",
//         backgroundPosition: "center center",
//       }}
//     >
//       <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%] ">
//         <div className="flex w-full h-full justify-center items-center">
//           <div className="relative flex-1 max-w-[800px]">
//             <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//             <input
//               className="pl-10 pr-10 py-3 md:py-4 text-[#BBB] placeholder-opacity-100 border rounded-lg focus:outline-none bg-transparent w-full"
//               placeholder="Search for chaise lounge , benny bear couch, furniture accessories of your choice and more..."
//             />
//           </div>
//         </div>
//         <div className="flex flex-col w-full h-full justify-center items-center mt-6">
//           <div className="font-montserrat font-bold text-3xl md:text-5xl sm:text-2xl leading-[140%] text-red-50">
//             Welcome to LoungeLuxe
//           </div>
//           <p className="font-montserrat my-25 mx-132 text-[25px] leading-[28px] mt-6 text-[#f0eab1]">
//             Here we provide you with the latest and fashionable chairs for your
//             crib.
//           </p>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Hero;



import React from "react";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";

const Hero = () => {
  return (
    <header className="relative w-full sm:h-screen h-full">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/couch.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          // quality={100}
        />
      </div>

      {/* Content */}
      <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%] relative z-10">
        <div className="flex w-full h-full justify-center items-center">
          <div className="relative flex-1 max-w-[800px]">
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              className="pl-10 pr-10 py-3 md:py-4 text-[#BBB] placeholder-opacity-100 border rounded-lg focus:outline-none bg-transparent w-full"
              placeholder="Search for chaise lounge, benny bear couch, furniture accessories of your choice and more..."
            />
          </div>
        </div>
        <div className="flex flex-col w-full h-full justify-center items-center mt-6">
          <div className="font-montserrat font-bold text-3xl md:text-5xl sm:text-2xl leading-[140%] text-red-50">
            Welcome to LoungeLuxe
          </div>
          <p className="font-montserrat my-25 mx-132 text-[25px] leading-[28px] mt-6 text-[#f0eab1]">
            Here we provide you with the latest and fashionable chairs for your
            crib.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
