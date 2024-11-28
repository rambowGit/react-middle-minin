import { useWindowScroll } from "../hooks/useWindowScroll";

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <div style={{
        height: '2000px'
      }}>
        <div style={{
          position: 'sticky',
          top: '20px',
        }}>
          <p>
            Scroll position x: {scroll.x}, y: {scroll.y}
          </p>
          <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
        </div>
      
     
      </div>
    </>
   
  );
}

export default Demo;