import React from "react";

const Introduction = () => {
  return (
    <>
      <div className="flex-center min-h-screen">
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
      </div>
    </>
  );
};

export default Introduction;
