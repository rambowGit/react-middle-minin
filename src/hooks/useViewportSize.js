import { useCallback, useState } from "react";
import { useWindowEvent } from "./useWindowEvent";

export function useViewportSize() {
  
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);
  
  const resizeHandler = useCallback((event) => {
    setHeight(() => event.target.innerHeight);
    setWidth(() => event.target.innerWidth);
  },[event]);
  
  useWindowEvent('resize', resizeHandler, {once: false});
  
  return { height, width }
}