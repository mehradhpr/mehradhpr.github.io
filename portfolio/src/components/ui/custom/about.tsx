"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { Card } from "../card";

const About = () => {
  const [textColor, setTextColor] = useState("black");

  return (
    <div className="flex flex-col text-black border-none p-5">
      <TypeAnimation
        sequence={[
          "Mehrad Hassanpour",
          () => {
            console.log("Sequence completed");
          },
        ]}
        wrapper="span"
        cursor={false}
        repeat={0}
        style={{
          color: textColor,
          fontSize: "3em",
        }}
      />

      <TypeAnimation
        sequence={[
          2500,
          "A Software Developer", // Types 'Three' without deleting 'Two'
          1500,
          "A Software  Designer", // Types 'Three' without deleting 'Two'
          1500,
          "An AI enthusiast",
          2000,
          () => {
            console.log("Sequence completed");
          },
        ]}
        wrapper="span"
        cursor={true}
        repeat={Infinity}
        style={{
          color: textColor,
          whiteSpace: "pre-line",
          fontSize: "2em",
          display: "inline-block",
        }}
      />
    </div>
  );
};

export default About;
