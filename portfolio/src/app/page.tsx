import About from "@/components/ui/custom/about";
import ParticleImageComponent from "@/components/ui/custom/image-particles";
import React from "react";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <Card className="flex h-screen w-11/12 shadow-2xl bg-card rounded-2xl mx-auto overflow-hidden">
      <div className=" z-0">
        <ParticleImageComponent />
      </div>
      <div className="z-10 -ml-48 mt-40">
        <About />
      </div>
    </Card>
  );
}
