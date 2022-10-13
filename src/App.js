import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, Power3 } from "gsap";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const app = useRef();

  let circleYellow = useRef();
  let circleRed = useRef();
  let circleBlue = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // gsap.from(
      //   ".box",
      //   {
      //     opacity: 0,
      //   },
      //   app
      // );
      // gsap.to(".box", {
      //   x: "100%",
      //   xPercent: -50,
      //   duration: 3,
      //   opacity: 1,
      //   repeatDelay: 1,
      //   yoyo: true,
      // });
      gsap.from(".App", {
        visibility: "hidden",
      });
      gsap.to(".App", {
        visibility: "visible",
      });
      gsap.from(".circle", {
        opacity: 0,
        y: () => window.innerHeight / 4,
        stagger: 0.2,
        ease: "power3.inOut",
        duration: 0.8,
      });
    }, app); // scope

    return () => ctx.revert();
  }, []);

  const mouseEnter = ({ currentTarget }) => {
    // console.log(currentTarget);
    gsap.to(currentTarget, {
      scale: 2.3,
      duration: 0.25,
    });
  };

  const mouseLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      scale: 1,
      duration: 0.25,
    });
  };

  const reanimate = () => {
    gsap.from(".App", {
      visibility: "hidden",
    });
    gsap.to(".App", {
      visibility: "visible",
    });
    gsap.from(".circle", {
      opacity: 0,
      y: () => window.innerHeight / 4,
      stagger: 0.2,
      ease: "power2.inOut",
      duration: 0.8,
    });
  };

  return (
    <div className="App" ref={app}>
      <div className="circle-container">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="circle-group">
          <div
            // ref={circleYellow}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className="circle"
          />
          <div
            ref={circleRed}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className="circle red"
          />
          <div
            ref={circleBlue}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            className="circle blue"
          />
        </div>
        <button className="reanimate-button" onClick={reanimate}>
          Re-animate
        </button>
      </div>
    </div>
  );
}

export default App;
