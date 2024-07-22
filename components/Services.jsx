import Image from "next/image";
import React from "react";

const services_left = [
  {
    id: 1,
    title: "Analysis",
    icon: "/analysis.png",
    desc: "We craft precise technical specs, aligning with your business, technology, and user requirements.",
  },
  {
    id: 2,
    title: "Design",
    icon: "/design.png",
    desc: "We adapt the customer's corporate identity to the platform guidelines. We draw convenient and understandable interfaces.",
  },
  {
    id: 3,
    title: "Development",
    icon: "/development.png",
    desc: "We create an extensible architecture, write clean and stable code. We integrate with customer technologies.",
  },
];

const services_right = [
  {
    id: 4,
    title: "Testing",
    icon: "/testing.png",
    desc: "We carry out functional testing and do bug fixes. We adapt the application to different phone resolutions",
  },
  {
    id: 5,
    title: "Launching",
    icon: "/launching.png",
    desc: "We design the application page and publish it in the App Store and Google Play stores.",
  },
  {
    id: 6,
    title: "Support",
    icon: "/support.png",
    desc: "We monitor the stability of the application, update it for new devices and versions of iOS and Android.",
  },
];
const Services = () => {
  return (
    <section className="container mx-auto  mt-20">
      <h1 className="text-4xl font-bold px-4 md:px-8 ">Application Development Stages</h1>
      <div className="flex flex-wrap justify-around px-2 md:px-6">
        <div className="w-full lg:w-1/3 p-2 md:p-4 ">
          {services_left.map((service) => (
            <div
              key={service.id}
              className="relative z-10 bg-white rounded-lg shadow-lg p-6 mt-6"
            >
              <div className="absolute text-[200px] text-gray-50 font-extrabold bottom-0 right-0 -top-12 -z-10 ">{service.id}</div>
              <div className="flex items-center gap-4">
                <Image
                  src={service.icon}
                  alt="icon"
                  width={48}
                  height={48}
                  className="w-auto h-auto"
                />
                <h2 className="font-bold text-xl mb-2">{service.title}</h2>
              </div>
              <p className="mt-3">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/3 p-2 md:p-4 flex justify-center items-center">
          <Image
            src="/services_phone.png"
            alt="Mobile"
            width={400}
            height={100}
            className=" h-auto w-auto"
          />
        </div>

        <div className="w-full lg:w-1/3 p-2 md:p-4  ">
          {services_right.map((service) => (
             <div
             key={service.id}
             className="relative z-10 bg-white rounded-lg shadow-lg p-6 mt-6"
           >
             <div className="absolute text-[200px] text-gray-50 font-extrabold bottom-0 right-0 -top-14 -z-10 ">{service.id}</div>
              <div className="flex items-center gap-4">
                <Image
                  src={service.icon}
                  alt="icon"
                  width={48}
                  height={48}
                  className="w-auto h-auto"
                />
                <h2 className="font-bold text-xl mb-2">{service.title}</h2>
              </div>
              <p className=" mt-3">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
