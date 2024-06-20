import React from "react";
import Image from "next/image";

const logos = [
  "/icons/python/48.png",
  "/icons/dl-icon.png",
  "/icons/next/48.png",
  "/icons/react/48.png",
  "/icons/tailwind/48.png",
  "/icons/ts/48.png",
  "/icons/js/48.png",
  "/icons/css/48.png",
  "/icons/html/48.png",
  "/icons/vite/48.png",
];

const TickerTape: React.FC = () => {
  return (
    <div className="overflow-hidden bg-gray1 py-4 min-h-16 min-w-fit shadow-lg">
      <div className="flex animate-marquee whitespace-nowrap">
        {logos.map((logo, index) => (
          <div key={index} className="h-12 mx-4 relative w-12">
            <Image src={logo} alt={`logo-${index}`} layout="fill" objectFit="contain" />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={index + logos.length} className="h-12 mx-4 relative w-12">
            <Image
              src={logo}
              alt={`logo-${index + logos.length}`}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={index + logos.length} className="h-12 mx-4 relative w-12">
            <Image
              src={logo}
              alt={`logo-${index + logos.length}`}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={index + logos.length} className="h-12 mx-4 relative w-12">
            <Image
              src={logo}
              alt={`logo-${index + logos.length}`}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div key={index + logos.length} className="h-12 mx-4 relative w-12">
            <Image
              src={logo}
              alt={`logo-${index + logos.length}`}
              layout="fill"
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickerTape;
