"use client";

import * as React from "react";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
} from "react-particle-image";
export default function ParticleImageComponent() {
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

  return (
    <div className="overflow-hidden">
      <ParticleImage
        src="/side.png"
        scale={0.6}
        entropy={20}
        maxParticles={15000}
        backgroundColor="inheret"
        creationDuration={1000}
        particleOptions={particleOptions}
        height={900}
        width={900}
        mouseMoveForce={motionForce}
        touchMoveForce={motionForce}
        mouseDownForce={activeForce}
      />
    </div>
  );
}
