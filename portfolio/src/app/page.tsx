"use client";

import About from "@/components/about";
import ParticleImageComponent from "@/components/image-particles";
import React from "react";
import Projects from "./projects/page";
import Experience from "./ed&ex/page";
import Volunteering from "./volunteering/page";
import TickerTape from "@/components/scroller";
import Contact from "@/app/contact/page";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    updateScreenSize();
  }, []);

  const updateScreenSize = () => {
    setIsMobile(window.innerWidth <= 830); // You can adjust this value based on your design
  };

  if (isMobile) {
    return (
      <div className="flex flex-col items-center border-none min-h-screen w-screen rounded-none mx-auto overflow-hidden">
        <ParticleImageComponent />
        <About />
        <TickerTape />
        <Experience />
        <Projects />
        <Volunteering />
        <Contact />
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center border-none min-h-screen w-screen rounded-none mx-auto overflow-hidden">
      <div className="min-[830px]:flex min-[830px]:items-center min-[830px]:mr-auto max-[830px]:flex max-[830px]:flex-col">
        <ParticleImageComponent />
        <About />
      </div>
      <TickerTape />
      <Experience />
      <Projects />
      <Volunteering />
      <Contact />
    </div>
  );
}
