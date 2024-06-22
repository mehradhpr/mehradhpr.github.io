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
  const [maxParticles, setMaxParticles] = useState(10000);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 3000) {
        setScale(1.3);
        setSize({ width: 1600, height: 2050 });
        setMaxParticles(20000);
      } else if (window.innerWidth > 2500) {
        setScale(1.05);
        setSize({ width: 1400, height: 1600 });
        setMaxParticles(18000);
      } else if (window.innerWidth > 2000) {
        setScale(0.9);
        setSize({ width: 1300, height: 1400 });
        setMaxParticles(16000);
      } else if (window.innerWidth > 1800) {
        setScale(0.68);
        setSize({ width: 1000, height: 1050 });
        setMaxParticles(14000);
      } else if (window.innerWidth > 1600) {
        setScale(0.65);
        setSize({ width: 900, height: 1000 });
        setMaxParticles(12000);
      } else if (window.innerWidth > 1300) {
        setScale(0.57);
        setSize({ width: 750, height: 950 });
        setMaxParticles(11000);
      } else if (window.innerWidth > 1070) {
        setScale(0.5);
        setSize({ width: 620, height: 800 });
        setMaxParticles(10000);
      } else if (window.innerWidth > 830) {
        setScale(0.42);
        setSize({ width: 570, height: 700 });
        setMaxParticles(9000);
      } else {
        setScale(0.3);
        setSize({ width: 500, height: 470 });
        setMaxParticles(8000);
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
    radius: () => 1,
  };

  const motionForce = (x: number, y: number): ParticleForce => {
    return forces.disturbance(x, y, 30);
  };

  return (
    <div className="overflow-visible">
      <ParticleImage
        src="/side.png"
        scale={scale}
        entropy={20}
        maxParticles={maxParticles}
        backgroundColor="inherit"
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
