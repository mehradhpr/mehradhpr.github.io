"use client";

import * as React from "react";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
} from "react-particle-image";
import useScreenSize from "@/hooks/useScreenSize";

export default function ParticleImageComponent() {
  const screenSize = useScreenSize();

  const particleOptions: ParticleOptions = {
    filter: ({ x, y, image }) => {
      // Get pixel
      const pixel = image.get(x, y);
      // Make a particle for this pixel if blue > 50 (range 0-255)
      return pixel.g < 70;
    },
    color: ({ x, y, image }) => {
      const pixel = image.get(x, y);
      return "#000000";
    },
    radius: () => 1.5,
  };

  const motionForce = (x: number, y: number): ParticleForce => {
    return forces.disturbance(x, y, 30);
  };

  const activeForce = (x: number, y: number): ParticleForce => {
    return forces.blackHole(x, y, 3);
  };

  const props =
    screenSize === "mobile"
      ? { width: 450, height: 500, scale: 0.3 }
      : { width: 900, height: 900, scale: 0.6 };

  return (
    <div className="overflow-hidden">
      <ParticleImage
        src="/side.png"
        scale={props.scale}
        entropy={20}
        maxParticles={1000}
        backgroundColor="inheret"
        creationDuration={1000}
        particleOptions={particleOptions}
        height={props.height}
        width={window.innerWidth / 2}
        mouseMoveForce={motionForce}
        touchMoveForce={motionForce}
      />
    </div>
  );
}
