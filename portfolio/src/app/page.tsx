"use client";

import About from "@/components/ui/custom/about";
import ParticleImageComponent from "@/components/ui/custom/image-particles";
import React from "react";
import { Card } from "@/components/ui/card";
import useScreenSize from "@/hooks/useScreenSize";

export default function Home() {
  const screenSize = useScreenSize();

  if (screenSize === "mobile") {
    return (
      <Card className="flex flex-col items-center h-screen shadow-2xl bg-card rounded-none mx-auto mt-10">
        <div className="z-0">
          <ParticleImageComponent />
        </div>
        <div className="z-10">
          <About />
        </div>
      </Card>
    );
  } else {
    return (
      <Card className="flex h-screen shadow-2xl bg-card rounded-none mx-auto overflow-hidden">
        <div className="z-0">
          <ParticleImageComponent />
        </div>
        <div className="-ml-36 mt-40">
          <About />
        </div>
      </Card>
    );
  }
}
