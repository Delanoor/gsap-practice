import "../styles/second-screen.scss";
import streetImg from "../images/street_black.webp";
import barImg from "../images/street_bar.webp";
import { useLayoutEffect, useRef } from "react";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function SecondScreen() {
  let container = useRef(null);
  let firstImage = useRef(null);
  let secondImage = useRef();
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  const app = useRef();
  const tl = useRef();
  const tlSecond = useRef();

  // onEnter, onLeave, onEnterBack, onLeaveBack
  // play, pause, resume, reverse, restart, reset, complete, none
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // tl.current && tl.current.progress(0).kill();
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "restart none none pause",
        },
      });
      tl.to(imageReveal, {
        width: "0%",
        duration: 1.2,

        ease: "power2.inOut",
      });
      tl.from(firstImage, {
        duration: 1.4,
        scale: 1.6,
        ease: "power2.inOut",
        delay: -1.6,
      });
      tl.from(".img-title", {
        yPercent: 100,
        opacity: 0,
        duration: 0.3,
      });
      // tl.to(".img-container", {
      //   scale: 0.5,
      //   scrollTrigger: {
      //     toggleActions: "restart none none pause",
      //     pin: true,
      //     trigger: ".container",
      //     start: "top 10%",
      //     end: "+=100%",
      //     markers: true,
      //     scrub: true,
      //   },
      // yPercent: -20,
      // });

      // let secondTl = gsap.timeline();

      // secondTl.to(".img-container", {
      //   scale: 0.6,
      //   yPercent: -20,
      //   scrollTrigger: {
      //     trigger: ".second-container",
      //     toggleActions: "restart none none pause",
      //     immediateRender: false,
      //     start: "top top",
      //     end: "+=55%",
      //     scrub: true,
      //     pinSpacer: ".img-container",
      //     markers: true,
      // },
      // });

      gsap.utils.toArray(".img-container").forEach((img, i) => {
        let imgAnimation = gsap.to(img, {
          scale: 0.6,
          yPercent: -20,
        });
        ScrollTrigger.create({
          trigger: img,
          animation: imgAnimation,
          start: "top 10%",
          end: "+=100%",
          pin: true,
          pinSpacing: true,
          markers: true,
          scrub: true,
        });
      });
      // gsap.to(".img-container", {
      //   scale: 0.5,
      //   scrollTrigger: {
      //     toggleActions: "restart none none pause",
      //     pin: true,
      //     trigger: ".container",
      //     start: "top 10%",
      //     end: "+=100%",
      //     // markers: true,
      //     scrub: true,
      //     pinSpacing: true,
      //   },
      //   yPercent: -20,
      // });
    }, app);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section className="second-screen" ref={app}>
      <div ref={(el) => (container = el)} className="container">
        <>
          <h2 className="img-title">Great Photography</h2>
          <div className="img-container">
            <img
              ref={(el) => (firstImage = el)}
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
          <div className="img-container img-container-second">
            <img
              ref={(el) => (secondImage = el)}
              src={barImg}
              alt="street_bar"
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
        </div>
      </div>
    </section>
  );
}

export default SecondScreen;
