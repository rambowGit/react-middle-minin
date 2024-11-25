import { log } from "console";

function Demo() {
  // const { hovered, ref } = useHover();
  const [hovered, setHovered] = useState(false);
  const ref = useRef();
  console.log(ref);
  
  return (
    <div ref={ref}>
      {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
    </div>
  );
}

export default Demo;