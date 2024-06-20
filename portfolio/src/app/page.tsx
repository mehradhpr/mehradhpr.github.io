"use client";

import About from "@/components/about";
import ParticleImageComponent from "@/components/image-particles";
import React from "react";
import Education from "./education/page";
import Projects from "./projects/page";
import Experience from "./experience/page";
import Volunteering from "./volunteering/page";
import TickerTape from "@/components/scroller";
import Contact from "@/app/contact/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center border-none min-h-screen w-screen rounded-none mx-auto overflow-hidden">
      <ParticleImageComponent />
      <About />
      <TickerTape />
      <Education />
      <Projects />
      <Experience />
      <Volunteering />
      <Contact />
    </div>
  );
}
