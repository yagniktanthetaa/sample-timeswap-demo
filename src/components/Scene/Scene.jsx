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
          snap: 0 / (totalPanels - 1),
          // base vertical scrolling on how wide the container is so it feels more natural.
          end: () => "+=" + panelsContainer.current.offsetWidth,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const reveal = () => {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
        // var windowHeight = window.innerHeight;
        var windowWidth = window.innerWidth;
        console.log("🚀 ~ reveal ~ windowHeight:", windowWidth);
        // var elementTop = reveals[i].getBoundingClientRect().top;
        var elementLeft = reveals[i].getBoundingClientRect().left;
        var elementVisible = 600;

        if (elementLeft < windowWidth - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    };

    window.addEventListener("scroll", reveal);
  }, []);

  return (
    <>
      <div>
        <div className="panel-container" ref={panelsContainer}>
          <section className="panel" ref={(e) => createPanelsRefs(e, 0)}>
            <Introduction />
          </section>
          <section className="panel" ref={(e) => createPanelsRefs(e, 1)}>
            <div className="reveal">
              <TrustTruth />
            </div>
          </section>
          <section className="panel" ref={(e) => createPanelsRefs(e, 2)}>
            <div className="reveal">
              <OurStory />
            </div>
          </section>
          <section className="panel" ref={(e) => createPanelsRefs(e, 3)}>
            <div className="reveal">
              <OurMission />
            </div>
          </section>
          <section className="panel" ref={(e) => createPanelsRefs(e, 4)}>
            <div className="reveal">
              <OurProjects />
            </div>
          </section>
          <section className="panel" ref={(e) => createPanelsRefs(e, 5)}>
            <div className="reveal">
              <Expertise />
            </div>
          </section>
          <section className="panel" ref={(e) => createPanelsRefs(e, 6)}>
            <Contact />
          </section>
        </div>
      </div>
    </>
  );
}
