"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import useScreenSize from "@/hooks/useScreenSize";

const About = () => {
  const [textColor, setTextColor] = useState("black");
  const screenSize = useScreenSize();

  if (screenSize === "mobile") {
    console.log("yeah");
    return (
      <div>
        <div className="flex flex-col items-start justify-start text-left text-black border-none max-w-80 overflow-hidden w-screen">
          <TypeAnimation
            sequence={[
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
              color: textColor,
              fontSize: "1.5em",
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
              color: textColor,
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
              color: textColor,
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
  } else {
    console.log("no");

    return (
      <div className="flex flex-col items-start text-left text-black border-none">
        <TypeAnimation
          sequence={[
            "Hey, I am",
            () => {
              console.log("Sequence completed");
            },
          ]}
          wrapper="span"
          cursor={false}
          repeat={0}
          style={{
            width: 200,
            color: textColor,
            fontSize: "2em",
            whiteSpace: "pre-line",
          }}
        />

        <TypeAnimation
          sequence={[
            2000,
            "Mehrad Hassanpour",
            () => {
              console.log("Sequence completed");
            },
          ]}
          wrapper="span"
          cursor={false}
          repeat={0}
          style={{
            width: 350,
            color: textColor,
            fontSize: "2.2em",
            whiteSpace: "pre-line",
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
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{
            width: 400,
            color: textColor,
            whiteSpace: "pre-line",
            fontSize: "2em",
            display: "inline-block",
            fontWeight: "bold",
            marginTop: "15px",
          }}
        />
      </div>
    );
  }
};

export default About;
