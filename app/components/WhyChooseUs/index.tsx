// import React from "react";

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
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         marginBottom: "20px",
//       }}
//     >
//       <div className="max-w-[1440px] mx-auto sm:px-[5%] px-[4%]">
//         <div style={{ flex: 1, paddingRight: "20px" }}>
//           <h2 style={{ fontSize: "24px", marginBottom: "10px" }}>{title}</h2>
//           <p style={{ fontSize: "16px", color: "#fff" }}>{description}</p>
//         </div>
//         <div style={{ flexShrink: 0 }}>
//           <img
//             src={image}
//             alt={title}
//             style={{ maxWidth: "100%", height: "auto" }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUs;


import React from "react";

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
    <div className="flex items-center justify-between">
      <div className="max-w-[200px]">
        <div className="overflow-hidden rounded-lg shadow-md">
          <img src={image} alt={title} className="w-full" />
        </div>
      </div>
      <div className="flex-1 ml-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default WhyChooseUs;
