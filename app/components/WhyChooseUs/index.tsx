// const whyChooseUsDescriptions = [

import Image from "next/image";

//   {
//     title: "Quality Craftsmanship",
//     description:
//       "We meticulously handcraft each piece of furniture to ensure the highest quality and durability, so you can enjoy it for years to come.",
//     image: "quality-craftsmanship-image.jpg",
//   },
//   {
//     title: "Unique Designs",
//     description:
//       "Our team of talented designers creates unique and innovative furniture designs that will add character and style to any space.",
//     image: "unique-designs-image.jpg",
//   },
//   {
//     title: "Customer Satisfaction",
//     description:
//       "Customer satisfaction is our top priority. We strive to exceed your expectations by providing exceptional service and support throughout your shopping experience.",
//     image: "customer-satisfaction-image.jpg",
//   },
// ];

// interface WhyChooseUsProps {
//   title: string;
//   description: string;
//   image: string;
// }

// const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
//   title,
//   description,
//   image,
// }) => {
//   return (
//     <div className="why-choose-us">
//       <img src={image} alt={title} className="why-choose-us-image" />
//       <div className="why-choose-us-content">
//         <h2 className="why-choose-us-title">{title}</h2>
//         <p className="why-choose-us-description">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUs;

// import React from "react";
// import WhyChooseUs from "../WhyChooseUs"; // Adjust the import path as per your folder structure

// // Define the whyChooseUsDescriptions array here or import it from another file
// const whyChooseUsDescriptions = [
//   {
//     title: "Quality Craftsmanship",
//     description:
//       "We meticulously handcraft each piece of furniture to ensure the highest quality and durability, so you can enjoy it for years to come.",
//     image: "quality-craftsmanship-image.jpg",
//   },
//   {
//     title: "Unique Designs",
//     description:
//       "Our team of talented designers creates unique and innovative furniture designs that will add character and style to any space.",
//     image: "unique-designs-image.jpg",
//   },
//   {
//     title: "Customer Satisfaction",
//     description:
//       "Customer satisfaction is our top priority. We strive to exceed your expectations by providing exceptional service and support throughout your shopping experience.",
//     image: "customer-satisfaction-image.jpg",
//   },
// ];

// const YourComponent: React.FC = () => {
//   return (
//     <div>
//       {/* Render each WhyChooseUs component with the desired props */}
//       {whyChooseUsDescriptions.map((item, index) => (
//         <WhyChooseUs
//           key={index}
//           title={item.title}
//           description={item.description}
//           image={item.image}
//         />
//       ))}
//     </div>
//   );
// };

// export default YourComponent;

interface WhyChooseUsProps {
  title: string;
  description: string;
  image: string;
}

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="why-choose-us">
      <Image src={image} alt={title} className="why-choose-us-image" />
      <div className="why-choose-us-content">
        <p className="why-choose-us-description">{description}</p>
      </div>
    </div>
  );
};

export default WhyChooseUs;
