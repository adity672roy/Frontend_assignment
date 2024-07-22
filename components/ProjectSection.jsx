import Image from "next/image";
import React from "react";
import Projects from "./Projects";

const industries = [
  { id: 1, icon: "/1.png", name: "Social media" },
  { id: 2, icon: "/2.png", name: "Education" },
  { id: 3, icon: "/3.png", name: "AR technology" },
  { id: 4, icon: "/4.png", name: "Fitness and sport" },
  { id: 5, icon: "/5.png", name: "Auto, transport" },
  { id: 6, icon: "/6.png", name: "TV series" },
  { id: 7, icon: "/7.png", name: "Bank" },
  { id: 8, icon: "/8.png", name: "Medicine, health" },
  { id: 9, icon: "/9.png", name: "Startups" },
  { id: 10, icon: "/10.png", name: "Construction" },
  { id: 11, icon: "/11.png", name: "Restaurants, food delivery" },
  { id: 12, icon: "/12.png", name: "Religion" },
  { id: 13, icon: "/13.png", name: "Game projects" },
  { id: 14, icon: "/14.png", name: "Marketplaces" },
  { id: 15, icon: "/15.png", name: "Online courses" },
];

const ProjectSection = () => {
  return (
    <section className="w-full h-full bg-[#F2F4F7] ">
      <div className="container mx-auto py-20">
        <h1 className="text-4xl font-bold px-4 md:px-8 ">
          Developed more than <span className="text-[#80A948]">100</span> <br />{" "}
          projects in <span className="text-[#80A948]">15</span> industries
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-4 md:px-8 py-4">
          {industries.map((industry) => (
            <div key={industry.id} className="flex items-center ">
              <div className="bg-white rounded-full h-9 p-1 w-9 mr-4 flex items-center justify-center">
                <Image
                  src={industry.icon}
                  alt={industry.name}
                  width={24}
                  height={24}
                  className="text-2xl "
                />
              </div>

              <span className="text-base font-medium">{industry.name}</span>
            </div>
          ))}
        </div>

        <Projects />
      </div>
    </section>
  );
};

export default ProjectSection;
