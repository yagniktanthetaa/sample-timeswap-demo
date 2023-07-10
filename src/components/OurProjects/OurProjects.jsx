import React from "react";

const OurProjects = () => {
  const myProject = [
    {
      id: 1,
      title: "Permissionless fixed maturity lending & borrowing",
      description:
        "Timeswap allows anyone to do fixed maturity lending & borrowing of any ERC20 token with any other ERC20 token as collateral",
    },
    {
      id: 2,
      title: "Non-Liquidatable Loans",
      description:
        "Timeswap allows anyone to do fixed maturity lending & borrowing of any ERC20 token with any other ERC20 token as collateral",
    },
    {
      id: 3,
      title: "Flexible Risk Profiles",
      description:
        "Timeswap allows anyone to do fixed maturity lending & borrowing of any ERC20 token with any other ERC20 token as collateral",
    },
    {
      id: 4,
      title: "Permissionless Debt Financing",
      description:
        "Timeswap allows anyone to do fixed maturity lending & borrowing of any ERC20 token with any other ERC20 token as collateral",
    },
  ];

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex-col min-h-screen flex items-start justify-center">
          <h3 className="text-6xl text-white  mt-5">Projects</h3>
          <div className="mt-10 flex-center flex-wrap gap-8 project-main-card">
            {myProject.map((project) => (
              <div key={project.id} className="text-white project-card">
                <h3 className="text-[#00E4E4] text-xl font-semibold">
                  {project.title}
                </h3>
                <p className="mt-4 text-xl leading">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurProjects;
