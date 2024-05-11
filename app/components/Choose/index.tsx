// import React from "react";
// import WhyChooseUs from "../WhyChooseUs"; // Adjust the import path as per your folder structure

// const YourComponent: React.FC = () => {
//   // Define the whyChooseUsDescriptions array here
//   const whyChooseUsDescriptions = [
//     {
//       title: "Quality Craftsmanship",
//       description:
//         "We meticulously handcraft each piece of furniture to ensure the highest quality and durability, so you can enjoy it for years to come.",
//       image: "/assets/fantasy.png",
//     },
//     {
//       title: "Unique Designs",
//       description:
//         "Our team of talented designers creates unique and innovative furniture designs that will add character and style to any space.",
//       image: "/assets/fantasy.png",
//     },
//     {
//       title: "Customer Satisfaction",
//       description:
//         "Customer satisfaction is our top priority. We strive to exceed your expectations by providing exceptional service and support throughout your shopping experience.",
//       image: "/assets/fantasy.png",
//     },
//   ];

//   return (
//     <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%] mb-10">
//       <div className="flex flex-col w-full h-full justify-center items-center mt-10">
//         <h3 className="font-montserrat font-bold text-3xl md:text-5xl sm:text-2xl leading-[140%] text-red-50">
//           Why Choose Us
//         </h3>
//         <p className=" font-montserrat font-semibold text-center  text-slate-200 my-2">
//           We prioritize craftsmanship and materials to ensure each chair is
//           built to last. From premium woods to durable upholstery, we select
//           only the finest components, ensuring longevity and resilience.
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {whyChooseUsDescriptions.map((item, index) => (
//             <div key={index} className="flex flex-col items-center">
//               <WhyChooseUs
//                 title={item.title}
//                 image={item.image}
//                 description={""}
//               />
//               <p className="text-center">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default YourComponent;

// import React from "react";
// import WhyChooseUs from "../WhyChooseUs"; // Adjust the import path as per your folder structure

// const YourComponent: React.FC = () => {
//   // Define the whyChooseUsDescriptions array here
//   const whyChooseUsDescriptions = [
//     {
//       title: "Quality Craftsmanship",
//       description:
//         "We meticulously handcraft each piece of furniture to ensure the highest quality and durability, so you can enjoy it for years to come.",
//       image: "/assets/fantasy.png",
//     },
//     {
//       title: "Unique Designs",
//       description:
//         "Our team of talented designers creates unique and innovative furniture designs that will add character and style to any space.",
//       image: "/assets/fantasy.png",
//     },
//     {
//       title: "Customer Satisfaction",
//       description:
//         "Customer satisfaction is our top priority. We strive to exceed your expectations by providing exceptional service and support throughout your shopping experience.",
//       image: "/assets/fantasy.png",
//     },
//   ];

//   return (
//     <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%] mb-10">
//       <div className="flex flex-col w-full h-full justify-center items-center mt-10">
//         <h3 className="font-montserrat font-bold text-3xl md:text-5xl sm:text-2xl leading-[140%] text-red-50">
//           Why Choose Us
//         </h3>
//         <p className="font-montserrat font-semibold text-center text-slate-200 my-2">
//           We prioritize craftsmanship and materials to ensure each chair is
//           built to last. From premium woods to durable upholstery, we select
//           only the finest components, ensuring longevity and resilience.
//         </p>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
//           {whyChooseUsDescriptions.map((item, index) => (
//             <div key={index} className="flex flex-col items-center sm:flex-row">
//               <WhyChooseUs
//                 title={item.title}
//                 image={item.image}
//                 description={""}
//               />
//               <div className="text-center sm:text-left mt-2 sm:ml-4">
//                 <p className="text-center">{item.title}</p>
//                 <p className="text-center">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default YourComponent;

import React from "react";
import WhyChooseUs from "../WhyChooseUs"; // Adjust the import path as per your folder structure

const YourComponent: React.FC = () => {
  // Define the whyChooseUsDescriptions array here
  const whyChooseUsDescriptions = [
    {
      title: "Quality Craftsmanship",
      description:
        "We meticulously handcraft each piece of furniture to ensure the highest quality and durability, so you can enjoy it for years to come.",
      image: "/assets/fantasy.png",
    },
    {
      title: "Unique Designs",
      description:
        "Our team of talented designers creates unique and innovative furniture designs that will add character and style to any space.",
      image: "/assets/fantasy.png",
    },
    {
      title: "Customer Satisfaction",
      description:
        "Customer satisfaction is our top priority. We strive to exceed your expectations by providing exceptional service and support throughout your shopping experience.",
      image: "/assets/fantasy.png",
    },
     {
      title: "Customer Satisfaction",
      description:
        "Customer satisfaction is our top priority. We strive to exceed your expectations by providing exceptional service and support throughout your shopping experience.",
      image: "/assets/fantasy.png",
    },
  ];
  

  return (
    <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%] mb-10">
      <div className="flex flex-col w-full h-full justify-center items-center mt-10">
        <h3 className="font-montserrat font-bold text-3xl md:text-5xl sm:text-2xl leading-[140%] text-red-50">
          Why Choose Us
        </h3>
        <p className="font-montserrat font-semibold text-center text-slate-200 my-2">
          We prioritize craftsmanship and materials to ensure each chair is
          built to last. From premium woods to durable upholstery, we select
          only the finest components, ensuring longevity and resilience.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {whyChooseUsDescriptions.map((item, index) => (
            <div key={index} className="flex flex-col items-center sm:flex-row">
              <WhyChooseUs
                title={item.title}
                image={item.image}
                description={""}
              />
              <div className="text-center sm:text-left mt-2 sm:ml-4">
                <p className="text-lg font-semibold">{item.title}</p>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
