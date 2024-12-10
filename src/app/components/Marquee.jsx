import React from "react";
import Image from "next/image";
const Marquee = () => {
  const images = ["/assets/Next.svg","/assets/React.svg", "/assets/Nodejs.svg", "/assets/MDB.svg", "/assets/Vercel.svg"];
  return (
    <div className="h-32 w-full bg-[#0b0b0b] dark:bg-neutral-800">
      <div className="flex justify-around">
        {images.map((image, index) => (
          <Image
            src={image}
            key={index}
            alt="hero"
            width={1000}
            height={1000}
            className="w-32 h-32 object-contain"
          />
        ))}
      </div>
    </div>
  );
};

export default Marquee;
