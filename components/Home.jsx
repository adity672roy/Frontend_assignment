import React from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";

const Home = () => {
  return (
    <section className="bg-[#F2F4F7] h-full relative">
      <div className=" container mx-auto  py-32">
        <div className="md:max-w-xl py-6 mx-3 md:mx-6">
          <p className="font-bold text-[2.5rem]">
            <span className="text-yellow-400">User-Centric Excellence</span>:
            Our App Development services Tackles Your Pain Points
          </p>
          <p className="py-3 font-normal text-lg text-justify">
            Experience a Seamless Digital Journey with Desun - Where Every Line
            of Code Resolves Your Challenges and{" "}
            <span className="text-yellow-400">
              Elevates Your App Experience
            </span>{" "}
            to Unparalleled Heights.
          </p>
        </div>
        <ContactForm />
      </div>

      <div className="hidden xl:block">
        <Image
          src="/home.png"
          alt="home"
          width={630}
          height={150}
          className="h-full w-auto -z-0
           absolute right-0 top-0 "
        />
      </div>
    </section>
  );
};

export default Home;
