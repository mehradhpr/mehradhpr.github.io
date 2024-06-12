"use client";

import { Radius } from "lucide-react";
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
      return pixel.g < 255 && pixel.g > 1;
    },
    color: ({ x, y, image }) => {
      const pixel = image.get(x, y);

      if (pixel.g < 125) {
        return "#000000";
      } else {
        return "#FFFFFF";
      }
    },
    radius: () => 1.3,
  };

  const motionForce = (x: number, y: number): ParticleForce => {
    return forces.disturbance(x, y, 7);
  };

  return (
    <div className="overflow-hidden">
      <ParticleImage
        src="/side.png"
        scale={0.55}
        entropy={20}
        maxParticles={30000}
        backgroundColor="inheret"
        creationDuration={1000}
        particleOptions={particleOptions}
        height={920}
        width={900}
        mouseMoveForce={motionForce}
        touchMoveForce={motionForce}
      />
    </div>
  );
}
