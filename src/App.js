import React from "react";
import Footer from "./components/Footer/Footer";
import Scene from "./components/Scene/Scene";

const App = () => {
  return (
    <>
      {/* <section className="main-section" id="welcome-section">
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
            <span className="text-[#00FFFF]">We</span> make things happen We
          </h1>
        </div>
        <div className="welcome-text" id="welcome-txt5">
          <h1 className="text-5xl">
            through creative and efficient use of design.
          </h1>
        </div>
      </section> */}

      <Scene />

      <Footer />
    </>
  );
};

export default App;
