import "../styles/third-screen.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);

function ThirdScreen() {
  let app = useRef(null);
  let video = useRef(null);
  useEffect(() => {
    // console.log(video.duration);
    video.currentTime = 0;
    let ctx = gsap.context(() => {
      let videoAnimation = gsap.fromTo(
        video,
        { currentTime: 0, autoAlpha: 0 },
        {
          //   duration: 1,
          autoAlpha: 1,
          currentTime: video.duration || 1,
          ease: "power3.inOut",
        }
      );
      ScrollTrigger.create({
        trigger: ".video-container",
        animation: videoAnimation,
        start: "top top",
        end: "+=400%",
        pin: true,
        markers: true,
        scrub: true,
      });
    }, app);

    return () => ctx.revert();
  }, []);
  return (
    <section className="third-screen" ref={app}>
      ThirdScreen
      <div className="video-container">
        <video
          ref={(el) => (video = el)}
          src={"/video_sample.mp4"}
          preload="auto"
          muted
          playsInline
          className="sample-video"
        />
      </div>
    </section>
  );
}

export default ThirdScreen;
