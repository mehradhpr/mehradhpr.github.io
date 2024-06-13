"use client";

import React from "react";

import useScreenSize from "@/hooks/useScreenSize";

export const Footer = () => {
  const screenSize = useScreenSize();

  if (screenSize === "mobile") {
    return (
      <div className="text-black w-screen bg-white flex justify-center py-2 mx-auto rounded-none -z-10">
        Developed by Mehrad Hassanpour
      </div>
    );
  } else {
    return (
      <div className="text-black w-11/12 flex justify-center py-2 shadow-2xl bg-card rounded-2xl mx-auto my-4">
        Developed by Mehrad Hassanpour
      </div>
    );
  }
};
