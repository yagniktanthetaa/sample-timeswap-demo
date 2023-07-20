import React from "react";
import CircleImage from "../../assets/images/circle.png";
import CurveLine from "../../assets/images/curve-line.png";
import CallCenter from "../../assets/images/call-center.png";

const Contact = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex-col min-h-screen flex items-start justify-center">
          {/* <h3 className="text-6xl text-white  mt-5">Contact</h3> */}
          <div className="mt-20 relative px-96">
            <div className="relative">
              <img src={CircleImage} alt="Circle" />
              <img
                src={CurveLine}
                alt="Circle"
                className="absolute inset-y-0 -right-36"
              />

              <div>
                <div className="contact-card p-3 flex items-center gap-4 absolute -top-7 -right-96">
                  <div className="w-8 h-8 text-xl bg-[#00FFFF] rounded-full flex-center">
                    <img src={CallCenter} alt="call-center" />
                  </div>
                  <p className="text-white">(675) 3456784567</p>
                </div>

                <div className="contact-card p-3 flex items-center gap-4 absolute top-40 -right-[450px]">
                  <div className="w-8 h-8 text-xl bg-[#00FFFF] rounded-full flex-center">
                    <i className="fa-brands fa-linkedin rounded-xl"></i>
                  </div>
                  <p className="text-white">test.user51100@gmail.com</p>
                </div>

                <div className="contact-card p-3 flex items-center gap-4 absolute -right-[450px]">
                  <div className="w-8 h-8 text-xl bg-[#00FFFF] rounded-full flex-center">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <p className="text-white">test.user51100@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
