import Image from "next/image";


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
      <Image
        src={image}
        alt={title}
        className="why-choose-us-image"
        width={500}
        height={300}
      />
      <div className="why-choose-us-content">
        <p className="why-choose-us-description">{description}</p>
      </div>
    </div>
  );
};

export default WhyChooseUs;
