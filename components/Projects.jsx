"use client";
import Image from "next/image";
import React, { useState } from "react";

const Projects = () => {
  const projects = [
    { name: "Project 1" },
    { name: "Project 2" },
    { name: "Project 3" },
    { name: "Project 4" },
  ];

  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  const handleProjectClick = (index) => {
    setSelectedProjectIndex(index);
  };

  return (
    <div className="px-4 md:px-8 mt-10">
      <h1 className="text-4xl font-bold  ">Projects we are proud of</h1>

      <p className=" my-6 max-w-2xl font-medium">
        Our software development company is truly proud of the wonderful clients
        we have worked with. We enjoy a long-term partnership
      </p>

      <ul className="flex flex-wrap items-center gap-4 md:gap-8 py-20">
        {projects.map((project, index) => (
          <li
            className={`text-base cursor-pointer font-medium py-1 ${
              selectedProjectIndex === index
                ? "border-b-4 border-yellow-500"
                : ""
            }`}
            key={index}
            onClick={() => handleProjectClick(index)}
          >
            {project.name}
          </li>
        ))}
      </ul>
      {selectedProjectIndex !== null && (
        <div className="flex flex-wrap justify-between ">
          <div>
            <h2 className="text-4xl font-bold ">
              {projects[selectedProjectIndex].name}
            </h2>
            <p className=" my-10 max-w-2xl font-medium">
              Crafted an innovative rental property management app, seamlessly
              integrating secure login, absence registration, and a tenant
              notice board. Elevating the resident experience with user-friendly
              design and efficient communication channels.
            </p>

            <div className="flex flex-wrap  items-center gap-2 text-gray-500 cursor-pointer mb-4 text-base font-medium">
              <span className="py-1">
                Business analysis{" "}
                <span className="text-yellow-500 mr-1">/</span>
              </span>
              <span className="py-1">
                iOS <span className="text-yellow-500 mr-1">/</span>
              </span>
              <span className="py-1">
                Android <span className="text-yellow-500 mr-1">/</span>
              </span>
              <span className="py-1">
                QA <span className="text-yellow-500 mr-1">/</span>
              </span>
              <span className="py-1">
                UI/UX Design <span className="text-yellow-500">/</span>
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-8 my-10">
              <div className="flex items-center gap-2">
                <Image
                  src="/india.png"
                  width={24}
                  height={24}
                  className="h-auto w-auto"
                />
                <span>India</span>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/real-estate.png"
                  width={24}
                  height={24}
                  className="h-auto w-auto"
                />
                <span>Real Estate</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-8 my-10">
              <div className=" ">
                <h2 className="text-2xl font-bold">400%</h2>
                <p className="text-sm text-gray-500 py-2">User Growth</p>
              </div>
              <div className=" ">
                <h2 className="text-2xl font-bold">+ 200 000</h2>
                <p className="text-sm text-gray-500 py-2">Active Users</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-8 my-10">
              <Image
                src="/ios-ps.png"
                alt="download"
                width={150}
                height={40}
                className="h-auto w-auto"
              />
              <Image
                src="/android-ps.png"
                alt="download"
                width={150}
                height={40}
                className="h-auto w-auto"
              />
            </div>
          </div>

          <div>
            <Image
              src="/project-phone.png"
              alt=""
              width={450}
              height={450}
              className="h-auto w-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
