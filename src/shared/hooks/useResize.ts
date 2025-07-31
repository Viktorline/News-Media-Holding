import { useEffect, useState } from "react";
import { ScreenBreakpoints } from "../constants/constants";

export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return {
    isScreen480: width >= ScreenBreakpoints.SCREEN_480,
    isScreen720: width >= ScreenBreakpoints.SCREEN_720,
    isScreen1280: width >= ScreenBreakpoints.SCREEN_1280,
  };
};
