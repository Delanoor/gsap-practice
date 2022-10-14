import { useRef, useState } from "react";
import { gsap } from "gsap";

function GridBox() {
  const boxGrid = useRef();
  const [pushed, setPushed] = useState(false);

  const gridEnter = () => {
    gsap.to(".box", {
      scale: 0.7,
      y: 50,
      duration: 0.1,
      stagger: {
        each: 0.02,
        from: "center",
        grid: "auto",
        // ease: "power2.inOut",
      },
    });
  };

  const gridLeave = () => {
    gsap.to(".box", {
      scale: 1.0,
      y: 0,
      duration: 0.1,
      stagger: {
        // each: 0.01,
        amount: 0.3,
        from: "edges",
        grid: "auto",
      },
    });
  };

  const handleButton = () => {
    if (pushed) {
      gridLeave();
    } else {
      gridEnter();
    }
    setPushed(!pushed);
  };

  const BOXNUM = 80;
  let boxes = [];
  for (let i = 0; i < BOXNUM; i++) {
    boxes.push(<div className="box" key={i} />);
  }

  return (
    <>
      <div className="box-grid" ref={boxGrid}>
        {boxes}
      </div>
      <button className="grid-button" onClick={handleButton}>
        Animate
      </button>
    </>
  );
}

export default GridBox;
