import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import GridBox from "../components/GridBox";
import "../styles/main-screen.scss";

function PageMain() {
  const section = useRef();

  let circleYellow = useRef();
  let circleRed = useRef();
  let circleBlue = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".circle-container", {
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
    }, section); // scope

    return () => ctx.revert();
  }, []);

  const mouseEnter = ({ currentTarget }) => {
    // console.log(currentTarget);
    gsap.to(currentTarget, {
      scale: 1.5,
      duration: 0.15,
    });
  };

  const mouseLeave = ({ currentTarget }) => {
    gsap.to(currentTarget, {
      scale: 1,
      duration: 0.25,
    });
  };

  const reanimate = () => {
    gsap.from(".circle-container", {
      visibility: "hidden",
    });
    gsap.to(".circle-container", {
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

  const buttonMouseEnter = () => {
    gsap.to(".reanimate-button", {
      scale: 1.2,
      duration: 0.3,
      cursor: "pointer",
    });
  };
  const buttonMouseLeave = () => {
    gsap.to(".reanimate-button", {
      scale: 1.0,
      duration: 0.1,
    });
  };
  return (
    <section className="main-screen" ref={section}>
      <div className="circle-container">
        <h2>Simple Stagger Animation</h2>
        <div className="circle-group">
          <div
            ref={circleYellow}
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
        <button
          className="reanimate-button"
          onMouseEnter={buttonMouseEnter}
          onMouseLeave={buttonMouseLeave}
          onClick={reanimate}
        >
          Re-animate
        </button>
        <GridBox />
      </div>
    </section>
  );
}

export default PageMain;
