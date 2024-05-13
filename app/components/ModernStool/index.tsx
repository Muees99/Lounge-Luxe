import React from "react";
import Image from "next/image";

const Stool = () => {
  return (
    <>
      <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
        <h3 className="font-montserrat font-bold text-2xl md:text-3xl sm:text-2xl leading-[140%] text-red-50 my-5">
          Open concept kitchen
        </h3>
        <div className="flex justify-between items-start">
          <div className="flex flex-row justify-between items-start">
            <div className="mr-4 relative" style={{ width: "50%" }}>
              <div className="relative">
                <Image
                  src="/assets/Furnish2.png"
                  alt="header banner"
                  width={804}
                  height={700}
                  objectFit="cover"
                  priority
                />
                <p className="absolute top-0 left-0 text-white text-sm md:text-sm sm:text-sm bg-black bg-opacity-40 px-4 py-2">
                  Rustic Table Furniture Sets Living room
                </p>
              </div>
            </div>
            <div className="relative" style={{ width: "50%" }}>
              <div className="relative">
                <Image
                  src="/assets/Furnish3.png"
                  alt="header banner"
                  width={804}
                  height={700}
                  objectFit="cover"
                  priority
                />
                <p className="absolute top-0 left-0 text-white text-sm md:text-sm sm:text-sm bg-black bg-opacity-40 px-4 py-2">
                  SofaSet Living room Couch Dining room
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stool;
