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
        <div className="mb-4 lg:mb-0">© 2024 Mehrad Hassanpour</div>
        <nav className="flex flex-wrap gap-4 mb-4">
          <a href="/" className="hover:text-gray-400">
            Home
          </a>
          <a href="/contact" className="hover:text-gray-400">
            Contact
          </a>
          <a href="/blog" className="hover:text-gray-400">
            Blog
          </a>
        </nav>
        <div className="flex gap-4 mb-4">
          <a href="mailto:youremail@example.com" className="hover:text-gray-400">
            <Mail />
          </a>
          <a href="https://linkedin.com/yourprofile" className="hover:text-gray-400">
            <Linkedin />
          </a>
          <a href="https://github.com/yourprofile" className="hover:text-gray-400">
            <Github />
          </a>
        </div>
        <div onClick={scrollToTop} className="text-title py-2 px-4 text-sm underline">
          Back to Top
        </div>
      </div>
    </footer>
  );
};
