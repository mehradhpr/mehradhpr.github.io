import React from "react";
import Image from "next/image";

const logos = [
  { small: "/icons/python/48.png", large: "/icons/python/96.png" },
  { small: "/icons/dl-icon.png", large: "/icons/dl-icon.png" },
  { small: "/icons/next/48.png", large: "/icons/next/96.png" },
  { small: "/icons/react/48.png", large: "/icons/react/96.png" },
  { small: "/icons/tailwind/48.png", large: "/icons/tailwind/96.png" },
  { small: "/icons/ts/48.png", large: "/icons/ts/96.png" },
  { small: "/icons/js/48.png", large: "/icons/js/96.png" },
  { small: "/icons/css/48.png", large: "/icons/css/96.png" },
  { small: "/icons/html/48.png", large: "/icons/html/96.png" },
  { small: "/icons/vite/48.png", large: "/icons/vite/96.png" },
];

const TickerTape: React.FC = () => {
  return (
    <div className="overflow-hidden bg-gray1 py-4 min-h-16 min-w-fit shadow-lg lg:mt-16">
      <div className="flex animate-marquee whitespace-nowrap">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="relative mx-4 h-12 w-12 sm:h-16 sm:w-16 md:h-16 md:w-16 lg:h-18 lg:w-18"
          >
            <Image
              src={logo.small}
              alt={`logo-${index}`}
              layout="fill"
              objectFit="contain"
              className="block lg:hidden"
            />
            <Image
              src={logo.large}
              alt={`logo-${index}`}
              layout="fill"
              objectFit="contain"
              className="hidden lg:block"
            />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div
            key={index + logos.length}
            className="relative mx-4 h-12 w-12 sm:h-16 sm:w-16 md:h-16 md:w-16 lg:h-18 lg:w-18"
          >
            <Image
              src={logo.small}
              alt={`logo-${index + logos.length}`}
              layout="fill"
              objectFit="contain"
              className="block lg:hidden"
            />
            <Image
              src={logo.large}
              alt={`logo-${index + logos.length}`}
              layout="fill"
              objectFit="contain"
              className="hidden lg:block"
            />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div
            key={index + logos.length * 2}
            className="relative mx-4 h-12 w-12 sm:h-16 sm:w-16 md:h-16 md:w-16 lg:h-18 lg:w-18"
          >
            <Image
              src={logo.small}
              alt={`logo-${index + logos.length * 2}`}
              layout="fill"
              objectFit="contain"
              className="block lg:hidden"
            />
            <Image
              src={logo.large}
              alt={`logo-${index + logos.length * 2}`}
              layout="fill"
              objectFit="contain"
              className="hidden lg:block"
            />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div
            key={index + logos.length * 3}
            className="relative mx-4 h-12 w-12 sm:h-16 sm:w-16 md:h-16 md:w-16 lg:h-18 lg:w-18"
          >
            <Image
              src={logo.small}
              alt={`logo-${index + logos.length * 3}`}
              layout="fill"
              objectFit="contain"
              className="block lg:hidden"
            />
            <Image
              src={logo.large}
              alt={`logo-${index + logos.length * 3}`}
              layout="fill"
              objectFit="contain"
              className="hidden lg:block"
            />
          </div>
        ))}
        {logos.map((logo, index) => (
          <div
            key={index + logos.length * 4}
            className="relative mx-4 h-12 w-12 sm:h-16 sm:w-16 md:h-16 md:w-16 lg:h-18 lg:w-18"
          >
            <Image
              src={logo.small}
              alt={`logo-${index + logos.length * 4}`}
              layout="fill"
              objectFit="contain"
              className="block lg:hidden"
            />
            <Image
              src={logo.large}
              alt={`logo-${index + logos.length * 4}`}
              layout="fill"
              objectFit="contain"
              className="hidden lg:block"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TickerTape;
