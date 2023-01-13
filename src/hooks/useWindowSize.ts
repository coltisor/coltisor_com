import { useIsoEffect } from "./useIsoEffect";
import { useEffect, useState } from "react";
import { debounce } from "@utils/debounce";

type WindowSize = {
  width: number;
  height: number;
};

export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  const handleSize = debounce(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, 1000);

  useIsoEffect(() => {
    handleSize();
    const listener = window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return windowSize;
};
