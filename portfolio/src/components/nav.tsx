"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { GithubIcon, Linkedin, Menu, Rows3 } from "lucide-react";

export const NavBar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const mobileNavToggle = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const handleLinkClick = () => {
    setMobileNavOpen(false);
  };

  const updateScreenSize = () => {
    setIsMobile(window.innerWidth <= 830); // You can adjust this value based on your design
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <div>
      <div className="fixed top-0 w-screen bg-gray2 flex justify-between items-center p-1 z-20 shadow-4xl">
        <div className="flex items-center gap-1">
          {isMobile &&
            (mobileNavOpen ? (
              <Rows3 onClick={mobileNavToggle} className="text-title" />
            ) : (
              <Menu onClick={mobileNavToggle} className="text-title" />
            ))}

          <Link href="https://github.com/mehradhpr">
            <GithubIcon className="transition-colors p-2 size-10 rounded-md text-pink" />
          </Link>

          <Link href="https://www.linkedin.com/in/mehradhassanp/">
            <Linkedin className="transition-colors p-2 size-10 rounded-md text-blue" />
          </Link>
        </div>

        {isMobile ? (
          mobileNavOpen && (
            <div className="absolute top-11 right-0 w-full z-40 shadow-xl bg-gray2">
              <div className="flex flex-col p-2">
                <Link href="/" className="p-2 rounded-md" onClick={handleLinkClick}>
                  About
                </Link>
                <Link href="/education" className="p-2 rounded-md" onClick={handleLinkClick}>
                  Education
                </Link>
                <Link href="/experience" className="p-2 rounded-md" onClick={handleLinkClick}>
                  Experience
                </Link>
                <Link href="/projects" className="p-2 rounded-md" onClick={handleLinkClick}>
                  Projects
                </Link>
                <Link href="/volunteering" className="p-2 rounded-md" onClick={handleLinkClick}>
                  Volunteering
                </Link>
              </div>
            </div>
          )
        ) : (
          <div className="flex gap-4 p-2 justify-center">
            <Link href="/" className="p-2 rounded-md">
              About
            </Link>
            <Link href="/education" className="p-2 rounded-md">
              Education
            </Link>
            <Link href="/experience" className="p-2 rounded-md">
              Experience
            </Link>
            <Link href="/projects" className="p-2 rounded-md">
              Projects
            </Link>
            <Link href="/volunteering" className="p-2 rounded-md">
              Volunteering
            </Link>
          </div>
        )}

        <div className="flex justify-end">
          <div className="p-2 text-md text-title rounded-xl min-h-fit min-w-fit z-50 tracking-widest">
            Mehrad Hassanpour
          </div>
        </div>
      </div>
      <div className="h-11"></div>
    </div>
  );
};
