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
//       image: "/assets/graysofa.png",
//     },
//     {
//       title: "Customer Satisfaction",
//       description:
//         "Customer satisfaction is our top priority. We strive to exceed your expectations by providing exceptional service and support throughout your shopping experience.",
//       image: "/assets/yellow2.png",
//     },
//   ];

//   return (
//     <div className="flex justify-between items-start">
//       <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
//         <div className="flex flex-col w-full h-full justify-center items-center mt-6">
//           <h3 className=" font-montserrat font-bold text-3xl md:text-5xl sm:text-2xl leading-[140%] text-red-50 ">
//             Why Choose Us
//           </h3>
//           {/* Render each WhyChooseUs component with the desired props */}
//           {whyChooseUsDescriptions.map((item, index) => (
//             <WhyChooseUs
//               key={index}
//               title={item.title}
//               description={item.description}
//               image={item.image}
//             />
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
      image: "/assets/graysofa.png",
    },
    {
      title: "Customer Satisfaction",
      description:
        "Customer satisfaction is our top priority. We strive to exceed your expectations by providing exceptional service and support throughout your shopping experience.",
      image: "/assets/yellow2.png",
    },
  ];

  return (
    <>
      <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
        {/* <div className="container mx-auto px-6 lg:px-0"> */}
          <div className="flex flex-col w-full h-full justify-center items-center mt-10">
            <h3 className="font-montserrat font-bold text-3xl md:text-5xl sm:text-2xl leading-[140%] text-red-50">
              Why Choose Us
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUsDescriptions.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <WhyChooseUs
                    title={item.title}
                    image={item.image}
                    description={""}
                  />
                  <p className=" text-center">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      {/* </div> */}
    </>
  );
};

export default YourComponent;
