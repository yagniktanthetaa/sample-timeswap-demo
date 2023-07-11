import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import "./Scene.css";
import Introduction from "../Introduction/Introduction";
import TrustTruth from "../TrustTruth/TrustTruth";
import OurStory from "../OurStory/OurStory";
import OurMission from "../OurMission/OurMission";
import OurProjects from "../OurProjects/OurProjects";
import Expertise from "../Expertise/Expertise";
import Contact from "../Contact/Contact";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const panels = useRef([]);
  const panelsContainer = useRef();

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };

  useEffect(() => {
    const totalPanels = panels.current.length;
    let ctx = gsap.context(() => {
      gsap.to(panels.current, {
        xPercent: -100 * (totalPanels - 1),
        ease: "none",
        scrollTrigger: {
          trigger: panelsContainer.current,
          pin: true,
          scrub: 1,
          snap: 1 / (totalPanels - 1),
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: () => "+=" + panelsContainer.current.offsetWidth,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div>
        <div className="panel-container" ref={panelsContainer}>
          <section className="panel" ref={(e) => createPanelsRefs(e, 0)}>
            <Introduction />
          </section>
          <section className="panel" ref={(e) => createPanelsRefs(e, 1)}>
            <TrustTruth />
          </section>
          <section className="panel" ref={(e) => createPanelsRefs(e, 2)}>
            <OurStory />
          </section>
          <section className="panel" ref={(e) => createPanelsRefs(e, 3)}>
            <OurMission />
          </section>
          <section className="panel" ref={(e) => createPanelsRefs(e, 4)}>
            <OurProjects />
          </section>
          <section className="panel" ref={(e) => createPanelsRefs(e, 5)}>
            <Expertise />
          </section>
          <section className="panel" ref={(e) => createPanelsRefs(e, 6)}>
            <Contact />
          </section>
        </div>
      </div>
    </>
  );
}
