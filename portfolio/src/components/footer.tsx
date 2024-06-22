"use client";

import React from "react";
import { Github, Linkedin } from "lucide-react";
import { Mail } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray2 py-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="mb-4 ml-2 lg:mb-0">© 2024 Mehrad Hassanpour</div>

        <div onClick={scrollToTop} className="text-title py-2 px-4 text-sm underline">
          Back to Top
        </div>
      </div>
    </footer>
  );
};
