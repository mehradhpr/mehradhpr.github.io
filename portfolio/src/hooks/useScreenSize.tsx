"use client";

import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return isMobile ? "mobile" : "desktop";
};

export default useScreenSize;
