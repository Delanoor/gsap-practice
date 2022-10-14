import "../styles/second-screen.scss";
import streetImg from "../images/street_black.webp";
import { useLayoutEffect, useRef } from "react";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import gsap from "gsap";

function SecondScreen() {
  let container = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  const app = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current && tl.current.progress(0).kill();
      tl.current = gsap
        .timeline()
        .to(imageReveal, {
          width: "0%",
          duration: 1.2,
          ease: "power2.inOut",
        })
        .from(image, {
          duration: 1.4,
          scale: 1.6,
          ease: "power2.inOut",
          delay: -1.6,
        })
        .from(".img-title", {
          yPercent: 100,
          opacity: 0,
          duration: 0.3,
        });
      // .to(".img-container", {
      //   scale: 0.9,
      //   xPercent: 10,
      //   yPercent: -20,
      // });
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <section className="second-screen" ref={app}>
      <div ref={(el) => (container = el)} className="container">
        <>
          <h2 className="img-title">Great Photography</h2>
          <div className="img-container">
            <img
              ref={(el) => (image = el)}
              src={streetImg}
              alt="street_image"
            />
          </div>
          <div className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            quasi praesentium dolores nostrum vero porro, nobis nihil esse saepe
            iusto eligendi quisquam doloremque sint dolorem quo laborum et
            aspernatur fugiat! Inventore quia ab aliquid temporibus laudantium
            dolores tempore animi soluta sunt, et, molestiae unde ratione velit,
            excepturi maxime modi pariatur?
          </div>
        </>
      </div>
    </section>
  );
}

export default SecondScreen;
