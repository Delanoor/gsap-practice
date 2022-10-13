import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const app = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(
        ".box",
        {
          opacity: 0,
        },
        app
      );
      gsap.to(".box", {
        x: "100%",
        xPercent: -50,
        duration: 3,
        opacity: 1,
        repeatDelay: 1,
        yoyo: true,
      });
    }, app); // scope

    return () => ctx.revert();
  }, []);
  return (
    <div className="App" ref={app}>
      <div className="box">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
