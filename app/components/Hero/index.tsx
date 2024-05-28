// Hero component with background image
import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";

const Hero = () => {
  return (
    <header className=" w-full sm:h-screen h-full">
      {/* Content */}
      <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%] relative z-10">
        {/* Background Image */}
        <div className=" justify-center items-center flex absolute my-4 inset-100 z-100">
          <Image
            src="/assets/couch.png"
            alt="Background"
            width={1440}
            height={800}
            priority
          />
        </div>
        <div className="flex w-full h-full justify-center items-center">
          <div className="relative flex-1 max-w-[800px]">
            <CiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              className="pl-10 pr-10 py-3 md:py-4 text-[#BBB] placeholder-opacity-100 border rounded-lg focus:outline-none bg-transparent w-full"
              placeholder="Search for chaise lounge, benny bear couch, furniture accessories of your choice and more..."
            />
          </div>
        </div>
        <div className="flex flex-col w-full h-full justify-center items-center mt-6 sm:mt-3">
          <div className="font-montserrat font-bold  text-center text-xl md:text-5xl sm:text-2xl leading-[140%] text-[#ffffff] relative z-[10000]">
            Welcome to LoungeLuxe
          </div>
          <p className="font-montserrat font-light text-center text-lg md:text-2xl sm:text-2xl  leading-[28px] mt-6 text-[#eed70c86] relative z-[10000]">
            Here we provide you with the latest and fashionable chairs for your
            crib.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
