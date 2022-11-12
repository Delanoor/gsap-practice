import "../styles/second-screen.scss";
import streetImg from "../images/street_black.webp";
import barImg from "../images/street_bar.webp";
import { useLayoutEffect, useRef } from "react";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

function SecondScreen() {
  gsap.registerPlugin(ScrollTrigger);
  let container = useRef(null);
  let image = useRef(null);
  let secondImage = useRef();
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  const app = useRef();
  const tl = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      tl.current && tl.current.progress(0).kill();
      tl.current = gsap
        .timeline({
          scrollTrigger: {
            // trigger: ".container",
            toggleActions: "restart none none pause",
            // onEnter, onLeave, onEnterBack, onLeaveBack
            // play, pause, resume, reverse, restart, reset, complete, none
          },
        })
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
        })

        .to(".img-container", {
          scale: 0.5,

          yPercent: -20,
          scrollTrigger: {
            toggleActions: "restart none none pause",
            pin: true,
            trigger: ".container",
            start: "top 10%",
            end: "+=100%",

            scrub: true,
          },
        })

        .to(".img-container-second", {
          scale: 0.6,
          scrollTrigger: {
            trigger: ".second-container",
            start: "10% 10%",
            end: "+=15%",
            scrub: true,

            markers: true,
          },
        });
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
        <div className="second-container">
          <div className="img-container-second" ref={secondImage}>
            <img src={barImg} alt="street_bar" />
          </div>
          <div className="description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            quasi praesentium dolores nostrum vero porro, nobis nihil esse saepe
            iusto eligendi quisquam doloremque sint dolorem quo laborum et
            aspernatur fugiat! Inventore quia ab aliquid temporibus laudantium
            dolores tempore animi soluta sunt, et, molestiae unde ratione velit,
            excepturi maxime modi pariatur?
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecondScreen;
