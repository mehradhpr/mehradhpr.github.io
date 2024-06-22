import React, { useEffect, useState } from "react";
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
} from "react-particle-image";

export default function ParticleImageComponent() {
  const [scale, setScale] = useState(0.3);
  const [size, setSize] = useState({ width: 500, height: 450 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1070) {
        setScale(0.5);
        setSize({ width: 600, height: 800 });
        console.log(size);
      } else if (window.innerWidth > 830) {
        setScale(0.42);
        setSize({ width: 550, height: 700 });
        console.log(size);
      } else {
        setScale(0.3);
        setSize({ width: 500, height: 450 });
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      return "#4CAF50";
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
    <div className="overflow-visible">
      <ParticleImage
        src="/side.png"
        scale={scale}
        entropy={20}
        maxParticles={8000}
        backgroundColor="inehret"
        creationDuration={1000}
        particleOptions={particleOptions}
        height={size.height}
        width={size.width}
        mouseMoveForce={motionForce}
        touchMoveForce={motionForce}
      />
    </div>
  );
}
