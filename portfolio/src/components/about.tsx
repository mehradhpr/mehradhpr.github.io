"use client";

import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1070);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1070);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div
        className={`flex flex-col items-start justify-start text-left border-none max-w-80 min-[1070px]:max-w-[500px] overflow-hidden min-[1300px]:ml-20`}
      >
        <TypeAnimation
          sequence={[
            500,
            "Hey, I am",
            () => {
              console.log("Sequence completed");
            },
          ]}
          wrapper="span"
          cursor={false}
          repeat={0}
          style={{
            width: 320,
            color: "#D15EFF",
            fontSize: isMobile ? "1em" : "1.5em",
          }}
        />

        <TypeAnimation
          sequence={[
            1500,
            "Mehrad Hassanpour",
            () => {
              console.log("Sequence completed");
            },
          ]}
          wrapper="span"
          cursor={false}
          repeat={0}
          style={{
            width: 500,
            color: "#e3e3e3",
            fontSize: isMobile ? "2em" : "3em",
          }}
        />

        <TypeAnimation
          sequence={[
            3000,
            "A Software Developer",
            1500,
            "A Software Designer",
            1500,
            "An AI enthusiast",
            2000,
            () => {
              console.log("Sequence completed");
            },
          ]}
          cursor={true}
          repeat={Infinity}
          style={{
            width: 600,
            color: "#5296FC",
            fontSize: isMobile ? "1.5em" : "2em",
            display: "inline-block",
            fontWeight: "bold",
            marginTop: "15px",
          }}
        />
      </div>
      <Link href="/contact" className="p-2 rounded-md">
        <div className="px-4 py-1 bg-gradient-to-r from-blue to-pink lg:text-xl  size-fit text-title rounded-lg shadow-lg hover:from-green-500 hover:to-blue cursor-pointer transition-all duration-300 ml-auto">
          Get in Touch
        </div>
      </Link>

      <div className="h-12"></div>
    </div>
  );
};

export default About;
