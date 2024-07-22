import Image from "next/image";
import React from "react";

const TeamSection = () => {
  return (
    <section className="w-full h-full bg-[#F2F4F7] py-16  mt-16">
      <div className="container px-10 md:px-16 mx-auto block md:flex justify-between  ">
        <div>
          <div>
            <h2 className="text-4xl font-bold ">Our Team</h2>
            <p className=" my-10 max-w-2xl font-medium">
              Thousand is a full-cycle digital production company with its own
              product analytics, design, web and mobile development.
            </p>
          </div>

          <div className="flex flex-wrap items-center sm:justify-between gap-10 max-w-xl my-10">
            <div className=" ">
              <h2 className="text-5xl font-bold">28</h2>
              <p className="text-sm text-gray-500 py-2">team members</p>
            </div>
            <div className=" ">
              <h2 className="text-5xl font-bold">+100</h2>
              <p className="text-sm text-gray-500 py-2">projects</p>
            </div>
            <div className=" ">
              <h2 className="text-5xl font-bold">7 years</h2>
              <p className="text-sm text-gray-500 py-2">in IT sphere</p>
            </div>
          </div>

          <p className=" my-10 max-w-2xl font-medium">
            Thousand is a full-cycle digital production company with its own
            product analytics, design, web and mobile development.
          </p>
        </div>

        <Image
          src="/team.png"
          alt="team"
          width={600}
          height={400}
          className="shadow-lg h-auto w-auto shadow-black"
        />
      </div>
    </section>
  );
};

export default TeamSection;
