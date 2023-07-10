import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "./Scene.css";
import TrustTruth from "../TrustTruth/TrustTruth";
import OurStory from "../OurStory/OurStory";
import OurMission from "../OurMission/OurMission";
import OurProjects from "../OurProjects/OurProjects";
import Expertise from "../Expertise/Expertise";
import Contact from "../Contact/Contact";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let panels = gsap.utils.toArray(".panel");
    let ctx = gsap.context(() => {
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 0 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          // markers: true
        },
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <>
      <div className="App" ref={component}>
        <div ref={slider} className="newContainer">
          {/* <div className="panel">
            <section className="main-section" id="welcome-section">
              <div className="welcome-text" id="welcome-txt1">
                <h1 className="text-[350px]">Hello</h1>
              </div>
              <div className="welcome-text" id="welcome-txt2">
                <h1 className="text-5xl">
                  <span className="text-[#00FFFF]">We</span> are By Experience
                </h1>
              </div>
              <div className="welcome-text" id="welcome-txt3">
                <h1 className="text-5xl">
                  <span className="text-[#00FFFF]">We</span> solve problems
                </h1>
              </div>
              <div className="welcome-text" id="welcome-txt4">
                <h1 className="text-5xl">
                  <span className="text-[#00FFFF]">We</span> make things happen
                  We
                </h1>
              </div>
              <div className="welcome-text" id="welcome-txt5">
                <h1 className="text-5xl">
                  through creative and efficient use of design.
                </h1>
              </div>
            </section>
          </div> */}
          <div className="panel flex-center">
            <TrustTruth />
          </div>
          <div className="panel flex-center">
            <OurStory />
          </div>
          <div className="panel flex-center">
            <OurMission />
          </div>
          <div className="panel flex-center">
            <OurProjects />
          </div>
          <div className="panel flex-center">
            <Expertise />
          </div>
          <div className="panel flex-center">
            <Contact />
          </div>
        </div>
      </div>
    </>
  );
}
