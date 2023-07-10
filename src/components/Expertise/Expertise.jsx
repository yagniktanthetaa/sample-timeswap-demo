import React from "react";
import FlexibleInterest1 from "../../assets/images/flexible-interest-1.png";
import FlexibleInterest2 from "../../assets/images/flexible-interest-2.png";
import FlexibleInterest3 from "../../assets/images/flexible-interest-3.png";

const Expertise = () => {
  const myExpertise = [
    {
      id: 1,
      image: FlexibleInterest1,
      title: "Flexible interest rate & collateral factors",
      description:
        "Timeswap is brutally gas efficient and does not require oracles or liquidators",
    },
    {
      id: 2,
      image: FlexibleInterest2,
      title: "Flexible interest rate & collateral factors",
      description:
        "Timeswap is brutally gas efficient and does not require oracles or liquidators",
    },
    {
      id: 3,
      image: FlexibleInterest3,
      title: "Flexible interest rate & collateral factors",
      description:
        "Timeswap is brutally gas efficient and does not require oracles or liquidators",
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="flex-col min-h-screen flex items-start justify-center">
        <h3 className="text-6xl text-white  mt-5">Expertise</h3>
        <div className="mt-10 flex-center flex-wrap gap-8 ">
          {myExpertise.map((expertise) => (
            <div key={expertise.id} className=" expertise-card">
              <img src={expertise.image} alt={expertise.title} />
              <h3 className="my-4 text-white text-2xl font-semibold">
                {expertise.title}
              </h3>
              <p className="text-[#F0F0F0] text-lg leading-normal">
                {expertise.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;
