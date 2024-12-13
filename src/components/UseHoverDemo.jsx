import { useHover } from "../hooks/useHover";

function Demo() {
  const { hovered, ref } = useHover();
  
  return (
    <div ref={ref} style={{color: hovered ? 'red' : 'blue'}}>
      {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
    </div>
  );
}

export default Demo;