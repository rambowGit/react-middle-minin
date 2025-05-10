import { useEffect, useState } from "react";
import { useWindowEvent } from "./useWindowEvent";

export function useWindowScroll() {
  
  const [scroll, setScroll] = useState(() => ({x: window.scrollX, y: window.scrollY}));
  
  useEffect(() => {
    window.scroll(scroll.x, scroll.y);
  }, [scroll]);
  
  const scrollHandler = () => {
    setScroll(() => ({x: window.scrollX, y: window.scrollY}));
    
  }
  
  useWindowEvent('scroll', scrollHandler, {once: false});
  
  return [scroll, setScroll] 
}