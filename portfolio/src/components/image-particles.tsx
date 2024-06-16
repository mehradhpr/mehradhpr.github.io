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
      return pixel.g < 110;
    },
    color: ({ x, y, image }) => {
      const pixel = image.get(x, y);
      if (pixel.g < 1) {
        return "#5296FC";
      } else if (pixel.g < 60) {
        return "#D15EFF";
      }
      return "#e3e3e3";
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
        scale={0.3}
        entropy={20}
        maxParticles={8000}
        backgroundColor="inheret"
        creationDuration={1000}
        particleOptions={particleOptions}
        height={500}
        width={450}
        mouseMoveForce={motionForce}
        touchMoveForce={motionForce}
      />
    </div>
  );
}
