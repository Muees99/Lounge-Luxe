

import Button from "@/app/Ui/Button";
import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import Image from "next/image";

const FitChairs = () => {
  return (
    <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
      <div className="flex justify-between items-center md:gap-24 animate-slide-right">
        <div className="text-lg font-bold">Featured Chairs:</div>
        <Button className="flex items-center gap-2 text-blue-100">
          See all <IoChevronForwardOutline className="h-4 w-4" />
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 animate-slide-right">
        {/* Each card */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Image */}
          <div className="relative h-60">
            <Image
              src={"/assets/chair2.png"}
              alt="teal"
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* Content */}
          <div className="p-4 text-slate-500">
            {/* Title */}
            <h4 className="text-lg font-semibold mb-2">Chair Title</h4>
            {/* Price */}
            <div className="flex items-center">
              <span className="text-lg font-bold">$99.99</span>
              {/* You can add more elements for pricing, like discount */}
            </div>
          </div>
        </div>
        {/* Repeat this structure for each card */}
        {/* Example of another card */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-60">
            <Image
              src={"/assets/chair3.png"}
              alt="teal"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4 text-slate-500">
            <h4 className="text-lg font-semibold mb-2">Chair Title</h4>
            <div className="flex items-center">
              <span className="text-lg font-bold">$99.99</span>
            </div>
          </div>
        </div>
        {/* card */}
        <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-60">
            <Image
              src={"/assets/chair.png"}
              alt="teal"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4 text-slate-500">
            <h4 className="text-lg font-semibold mb-2">Chair Title</h4>
            <div className="flex items-center">
              <span className="text-lg font-bold">$99.99</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-60">
            <Image
              src={"/assets/Lounge chair 5.png"}
              alt="teal"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-4 text-slate-500">
            <h4 className="text-lg font-semibold mb-2">Chair Title</h4>
            <div className="flex items-center">
              <span className="text-lg font-bold">$99.99</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitChairs;

// import React from "react";
// import { GiShoppingCart } from "react-icons/gi";
// import Image from "next/image";
// import Button from "@/app/Ui/Button";
// import { IoChevronForwardOutline } from "react-icons/io5";

// const Discounts: React.FC = () => {
//   return (
//     <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
//       <div className="flex justify-between items-center md:gap-24 animate-slide-right">
//         <div className="text-lg font-bold">Discounts:</div>
//         <Button className="flex items-center gap-2 text-blue-100">
//           See all <IoChevronForwardOutline className="h-4 w-4" />
//         </Button>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 animate-slide-right">
//         {/* Each card */}
//         <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden relative">
//           {/* Image */}
//           <div className="relative h-60">
//             <Image
//               src={"/assets/chair2.png"}
//               alt="teal"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//           {/* Content */}
//           <div className="p-4 text-slate-500 flex flex-col">
//             {/* Title */}
//             <h4 className="text-lg font-semibold mb-2">Barstool</h4>
//             {/* Price and cart icon */}
//             <div className="flex justify-between items-center">
//               <span className="text-lg font-bold">$99.99</span>
//               <GiShoppingCart className="text-xl font-bold" />
//             </div>
//           </div>
//         </div>
//         {/* Each card */}
//         <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden relative">
//           {/* Image */}
//           <div className="relative h-60">
//             <Image
//               src={"/assets/chair3.png"}
//               alt="teal"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//           {/* Content */}
//           <div className="p-4 text-slate-500 flex flex-col">
//             {/* Title */}
//             <h4 className="text-lg font-semibold mb-2">Barstool</h4>
//             {/* Price and cart icon */}
//             <div className="flex justify-between items-center">
//               <span className="text-lg font-bold">$99.99</span>
//               <GiShoppingCart className="text-xl font-bold" />
//             </div>
//           </div>
//         </div>
//         {/* Each card */}
//         <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden relative">
//           {/* Image */}
//           <div className="relative h-60">
//             <Image
//               src={"/assets/chair.png"}
//               alt="teal"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//           {/* Content */}
//           <div className="p-4 text-slate-500 flex flex-col">
//             {/* Title */}
//             <h4 className="text-lg font-semibold mb-2">Barstool</h4>
//             {/* Price and cart icon */}
//             <div className="flex justify-between items-center">
//               <span className="text-lg font-bold">$99.99</span>
//               <GiShoppingCart className="text-xl font-bold" />
//             </div>
//           </div>
//         </div>
//         {/* Each card */}
//         <div className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden relative">
//           {/* Image */}
//           <div className="relative h-60">
//             <Image
//               src={"/assets/Lounge chair 5.png"}
//               alt="teal"
//               layout="fill"
//               objectFit="cover"
//             />
//           </div>
//           {/* Content */}
//           <div className="p-4 text-slate-500 flex flex-col">
//             {/* Title */}
//             <h4 className="text-lg font-semibold mb-2">Barstool</h4>
//             {/* Price and cart icon */}
//             <div className="flex justify-between items-center">
//               <span className="text-lg font-bold">$99.99</span>
//               <GiShoppingCart className="text-xl font-bold" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Discounts;
