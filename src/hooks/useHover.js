import { useEffect, useRef, useState } from "react";

export function useHover() {
  const [hovered, setHovered] = useState(false)
  const ref = useRef();

  
  useEffect(() => {
    
    ref.current.addEventListener('mouseover', () => setHovered(true));
    ref.current.addEventListener('mouseout', () => setHovered(false));
    
    return () => {
      ref.current.removeEventListener('mouseover', () => setHovered());
      ref.current.removeEventListener('mouseout', () => setHovered());
      setHovered(false);
    };
    
    
  }, []);
  
  return {ref, hovered}
}