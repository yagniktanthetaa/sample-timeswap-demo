import React, { useEffect, useState } from "react";
// import CircularProgressBar from "../CircularProgressBar/CircularProgressBar";

const Footer = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    // This will calculate how many pixels the page is vertically
    const winScroll = document.documentElement.scrollTop;
    // This is responsible for subtracticing the total height of the page - where the users page is scrolled to
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // This will calculate the final total of the percentage of how much the user has scrolled.
    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    // Fires when the document view has been scrolled
    window.addEventListener("scroll", onScroll);

    // Clean the document view has been not scrolled
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed bottom-10 left-0 right-0 container mx-auto">
        <h5 className="text-white">Introduction</h5>
        <div className="progressMainWrapper my-4">
          <div
            className="progressMainStyle"
            style={{ width: `${scrollTop}%` }}
          />
        </div>
        <div className="flex-between">
          <div className="flex gap-5">
            {/* <CircularProgressBar
              strokeWidth="2"
              sqSize="50"
              percentage={scrollTop}
            /> */}
            <div className="w-10 h-10 text-xl bg-[#00FFFF] rounded-full flex-center">
              <i className="fa-brands fa-linkedin rounded-xl"></i>
            </div>

            <div className="w-10 h-10 text-xl bg-[#00FFFF] rounded-full flex-center">
              <i className="fa-brands fa-twitter"></i>
            </div>

            <div className="w-10 h-10 text-xl bg-[#00FFFF] rounded-full flex-center">
              <i className="fa-brands fa-instagram"></i>
            </div>

            <div className="w-10 h-10 text-xl bg-[#00FFFF] rounded-full flex-center">
              <i className="fa-solid fa-envelope"></i>
            </div>
          </div>
          <div>
            <ul className="flex gap-5 text-xl text-white">
              <li>Our Story</li>
              <li>Our Mission</li>
              <li>Projects</li>
              <li>Expertise</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
