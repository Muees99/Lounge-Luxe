import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import Image from "next/image";
import Button from "@/app/Ui/Button";
import { IoChevronForwardOutline } from "react-icons/io5";

const Discounts: React.FC = () => {
  return (
    <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%] mt-10">
      <div className="flex justify-between items-center md:gap-24 animate-slide-right">
        <div className="text-lg font-bold">Discounts:</div>
        <Button className="flex items-center gap-2 text-blue-100">
          See all <IoChevronForwardOutline className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 animate-slide-right">
        {/* Each card */}
        <div className="flex flex-col  bg-white rounded-lg shadow-lg overflow-hidden relative">
          {/* Image */}
          <div className="relative h-60">
            <Image
              src={"/assets/seatout1.png"}
              alt="teal"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Content */}
          <div className="p-4 text-slate-500 flex flex-col">
            {/* Title */}
            <h4 className="text-lg font-semibold mb-2">Panton Chair </h4>
            {/* Price and cart icon */}
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">$99.99</span>
              <GiShoppingCart className="text-xl font-bold" />
            </div>
          </div>
        </div>
        {/* Each card */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden relative">
          {/* Image */}
          <div className="relative h-60">
            <Image
              src={"/assets/yellowset.png"}
              alt="teal"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Content */}
          <div className="p-4 text-slate-500 flex flex-col">
            {/* Title */}
            <h4 className="text-lg font-semibold mb-2">
              Fredericia Lounge Chair
            </h4>
            {/* Price and cart icon */}
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">$99.99</span>
              <GiShoppingCart className="text-xl font-bold" />
            </div>
          </div>
        </div>
        {/* Each card */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden relative">
          {/* Image */}
          <div className="relative h-60">
            <Image
              src={"/assets/seatout2.png"}
              alt="teal"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Content */}
          <div className="p-4 text-slate-500 flex flex-col">
            {/* Title */}
            <h4 className="text-lg font-semibold mb-2">Swivel chair</h4>
            {/* Price and cart icon */}
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">$99.99</span>
              <GiShoppingCart className="text-xl font-bold" />
            </div>
          </div>
        </div>
        {/* Each card */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden relative">
          {/* Image */}
          <div className="relative h-60">
            <Image
              src={"/assets/graysofa.png"}
              alt="teal"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Content */}
          <div className="p-4 text-slate-500 flex flex-col">
            {/* Title */}
            <h4 className="text-lg font-semibold mb-2"> Ray Eame chair</h4>
            {/* Price and cart icon */}
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">$99.99</span>
              <GiShoppingCart className="text-xl font-bold" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discounts;
