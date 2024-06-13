import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    if (isClient) {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (isClient) {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [isClient]);

  if (!isClient) {
    return "desktop"; // Default to desktop on the server
  }

  return isMobile ? "mobile" : "desktop";
};

export default useScreenSize;
