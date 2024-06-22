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
    setIsMobile(window.innerWidth <= 810); // You can adjust this value based on your design
  };

  useEffect(() => {
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <div>
      <div className="fixed top-0 w-screen bg-gray2 flex justify-between items-center z-20 shadow-4xl">
        <div className="flex items-center gap-1">
          {isMobile &&
            (mobileNavOpen ? (
              <Rows3 onClick={mobileNavToggle} className="text-title" />
            ) : (
              <Menu onClick={mobileNavToggle} className="text-title" />
            ))}

          <Link href="https://github.com/mehradhpr">
            <GithubIcon className="transition-colors p-2 size-10 lg:size-12  rounded-md text-pink" />
          </Link>

          <Link href="https://www.linkedin.com/in/mehradhassanp/">
            <Linkedin className="transition-colors p-2 size-10 lg:size-12 rounded-md text-blue" />
          </Link>
        </div>

        {isMobile ? (
          mobileNavOpen && (
            <div className="absolute top-11 right-0 w-full z-40 shadow-xl bg-gray2">
              <div className="flex flex-col p-2">
                <div className="flex flex-col z-10">
                  <div className="flex flex-row">
                    <Link href="/" className="p-2 rounded-md" onClick={handleLinkClick}>
                      <div className="px-2 py-1 size-fit text-title rounded-lg border border-pink hover:bg-blue shadow-lg cursor-pointer transition-colors duration-300 ml-auto">
                        About
                      </div>
                    </Link>
                    <div className="flex flex-row ml-auto items-end">
                      <Link href="/contact" className="p-2 rounded-md" onClick={handleLinkClick}>
                        <div className="px-4 py-1 bg-gradient-to-r from-blue to-pink size-fit text-title rounded-lg shadow-lg hover:bg-blue cursor-pointer transition-colors duration-300 ml-auto">
                          Contact
                        </div>
                      </Link>
                      <Link href="/blog" className="p-2 rounded-md" onClick={handleLinkClick}>
                        <div className="px-4 py-1 bg-gradient-to-r from-green-500 to-blue size-fit text-title rounded-lg shadow-lg hover:bg-blue cursor-pointer transition-colors duration-300 ml-auto">
                          Blog
                        </div>
                      </Link>
                    </div>
                  </div>

                  <Link href="/ed&ex" className="p-2 rounded-md" onClick={handleLinkClick}>
                    <div className="px-2 py-1 size-fit text-title rounded-lg border border-pink hover:bg-blue shadow-lg cursor-pointer transition-colors duration-300">
                      Education and Experience
                    </div>
                  </Link>
                  <Link href="/projects" className="p-2 rounded-md" onClick={handleLinkClick}>
                    <div className="px-2 py-1 size-fit text-title rounded-lg border-2 border-blue hover:bg-blue shadow-lg cursor-pointer transition-colors duration-300">
                      Projects
                    </div>
                  </Link>
                  <Link href="/volunteering" className="p-2 rounded-md" onClick={handleLinkClick}>
                    <div className="px-2 py-1 size-fit text-title rounded-lg border border-pink hover:bg-blue shadow-lg cursor-pointer transition-colors duration-300">
                      Volunteering
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )
        ) : (
          <div className="flex justify-center sm:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl">
            <Link
              href="/"
              className="p-2 py-3 hover:bg-pink hover:text-title transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/ed&ex"
              className="p-2 py-3 hover:bg-blue hover:text-title transition-colors duration-300"
            >
              Education & Experience
            </Link>
            <Link
              href="/projects"
              className="p-2 py-3 hover:bg-green-500 hover:text-title transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              href="/volunteering"
              className="p-2 py-3 hover:bg-orange-500 hover:text-title transition-colors duration-300"
            >
              Volunteering
            </Link>
            <Link
              href="/contact"
              className="p-2 py-3 hover:bg-white hover:text-blue transition-colors duration-300 font-bold"
            >
              Contact
            </Link>
            <Link
              href="/blog"
              className="p-2 py-3 hover:bg-title hover:text-pink transition-colors duration-300 font-bold"
            >
              Blog
            </Link>
          </div>
        )}

        <div className="flex justify-end">
          <Link href="/" className="rounded-md">
            <div className="p-2 text-md text-title rounded-xl min-h-fit min-w-fit z-50 tracking-widest xl:text-xl">
              Mehrad Hassanpour
            </div>
          </Link>
        </div>
      </div>
      <div className="h-11"></div>
    </div>
  );
};
