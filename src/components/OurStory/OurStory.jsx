import React from "react";
import ProfesionalMan from "../../assets/images/professional-man.png";

const OurStory = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex-center min-h-screen">
          <div className="grid xl:grid-cols-2 gap-2 place-content-center place-items-center">
            <div>
              <img src={ProfesionalMan} alt="ProfesionalMan" loading="lazy" />
            </div>
            <div className="text-white text-center xl:text-start px-4">
              <h3 className="text-4xl text-white  mt-5">
                Our <span className="text-[#00FFFF]">Story</span>
              </h3>
              <p className="mt-5 xl:text-xl">
                Imran Chaudhri is a designer, inventor and innovator. He spent
                over 20 years at Apple imagining and creating some of the
                world’s most beloved consumer products, like the Macintosh,
                iPod, iPad, Apple Watch and iPhone. Imran is best known for his
                work on inventing the groundbreaking user interface and
                interactions on the iPhone, and is named as an inventor on
                thousands of patents.
              </p>
              <p className="mt-5 xl:text-xl">
                Bethany Bongiorno led the teams behind some of Apple's most
                transformational products. As a Director of Software
                Engineering, she was responsible for all software project
                management for iOS and macOS and also played a key leadership
                role in the execution of critical projects such as the launch of
                the original iPad. Prior to her time at Apple, Bethany studied
                physics, worked in astrophysics research, and was a data
                management and software development consultant. Bethany is
                passionate about building and leading high performing teams to
                solve complex problems.
              </p>
              <p className="mt-5 xl:text-xl">
                Together, Imran and Bethany envision a future that is even more
                intelligent and even more personal, and have committed Humane to
                building not for the world as it exists today but as it could be
                tomorrow. Rethinking, reconsidering, and remembering honest
                human connection in the context of computing, they seek to
                reshape the role of technology in our lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStory;
