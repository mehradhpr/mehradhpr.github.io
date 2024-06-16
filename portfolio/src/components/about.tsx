"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";

const About = () => {
  const [textColor, setTextColor] = useState("black");

  return (
    <div>
      <div className="flex flex-col items-start justify-start text-left border-none max-w-80 overflow-hidden w-screen">
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
            fontSize: "1em",
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
            width: 320,
            color: "#e3e3e3",
            fontSize: "2em",
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
            width: 320,
            color: "#5296FC",
            fontSize: "1.6em",
            display: "inline-block",
            fontWeight: "bold",
            marginTop: "15px",
          }}
        />
      </div>
      <div className="bg-black h-12"></div>
    </div>
  );
};

export default About;
