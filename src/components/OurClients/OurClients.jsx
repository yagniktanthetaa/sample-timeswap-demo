import React from "react";
import MutiCoin from "../../assets/images/multicoin.png";
import Definance from "../../assets/images/definance.png";
import MechanismCapital from "../../assets/images/mechanismcapital.png";

const OurClients = () => {
  const myClients = [
    {
      id: 1,
      title: "Founder",
      images: [MutiCoin, Definance, MechanismCapital],
    },
    {
      id: 2,
      title: "Advisors",
      images: [MutiCoin, Definance, MechanismCapital],
    },
    {
      id: 3,
      title: "Investors",
      images: [MutiCoin, Definance, MechanismCapital],
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex-between">
          {myClients.map((clients) => (
            <div key={clients.id}>
              <h4 className="text-white text-6xl font-semibold flex-center">
                {clients.title}
              </h4>
              <div className="mt-20 ">
                {clients.images.map((image, index) => (
                  <div className="flex-center" key={index}>
                    <img
                      key={image}
                      src={image}
                      alt={clients.title}
                      className="mt-4"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurClients;
