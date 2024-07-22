import React from "react";
import LogoSection from "./LogoSection";
import { ChevronRight } from "lucide-react";

const web = [
  "PHP",
  "JavaScript",
  "Node.js",
  "Web Socket",
  "Socket.io",
  "Vue.js",
  "Next",
  "MySQL",
  "Laravel",
  "Go lang",
  "Django",
  "Python",
];

const mobile = [
  "Swift",
  "Kotlin",
  "Alamofire",
  "Firebase",
  "CoreData",
  "Room",
  "Realm",
  "Coroutine",
  "RxJava",
  "RxSwift",
  "Unit Test",
  "Navigation",
];

const technologies = [
  "iOS  development",
  "Android development",
  "Web development",
  "UI/UX design",
  "Testing",
  "Launch",
  "IT consulting",
];

const FullStackSection = () => {
  return (
    <section className="container mx-auto my-20">
      <LogoSection />

      <div className="px-4 md:px-8 flex flex-wrap gap-5">
        <div className="md:w-2/3">
          <h2 className="text-4xl font-bold ">Full development cycle</h2>
          <p className=" my-10 font-medium">
            We use proven technologies
          </p>

          <div className="md:w-2/3">
            <p className=" mt-8 pb-2 text-lg font-medium">Web</p>
            <div className="flex flex-wrap items-center gap-2">
              {web.map((w, index) => (
                <p key={index} className="text-sm font-medium text-gray-500">
                  {w} /
                </p>
              ))}
            </div>
          </div>

          <div className="w-2/3">
            <p className=" mt-8 pb-2 text-lg font-medium">Mobile</p>
            <div className="flex flex-wrap items-center gap-2">
              {mobile.map((m, index) => (
                <p key={index} className="text-sm font-medium text-gray-500">
                  {m} /
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {technologies.map((t, index) => (
            <div key={index} className="flex items-center gap-2">
              <p className="hover:border-b hover:font-semibold border-black cursor-pointer py-1">
                {t}
              </p>
              <ChevronRight className="text-gray-500  " />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullStackSection;
