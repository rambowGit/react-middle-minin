import { useState } from "react";
import { useWindowEvent } from "./useWindowEvent";

export function useViewportSize() {
  
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  
  const resizeHandler = (event) => {
    setHeight(() => event.target.innerHeight);
    setWidth(() => event.target.innerWidth);
  }
  
  useWindowEvent('resize', resizeHandler, {once: false});
  
  return { height, width }
}