import Image from "next/image";
import React from "react";

const footerDetails = [
  { id: 1, icon: "/call.png ", title: "Contact nums", desc: "+91 0000000000" },
  { id: 2, icon: "/mail-footer.png ", title: "Gmail", desc: "demo@gmail.com" },
  { id: 3, icon: "/place.png ", title: "Address", desc: "Mumbai, India" },
  {
    id: 4,
    icon: "/message.png ",
    title: "Leave a request",
    desc: "Leave a request",
  },
];

const Footer = () => {
  return (
    <nav className="mx-auto bg-black my-10 px-2 py-4 rounded-md shadow-lg max-w-7xl">
      <div className="container mx-auto flex flex-col justify-between items-center">
        <div>
          <Image
            src="/logo-footer.png"
            alt="logo"
            width={174}
            height={60}
            className="w-auto h-auto"
          />
        </div>

        <div className="w-full py-10 text-white flex flex-wrap gap-5 items-center justify-between">
          {footerDetails.map((f) => (
            <div key={f.id}>
              <div className="flex items-center gap-2">
                <Image
                  src={f.icon}
                  alt={f.title}
                  width={24}
                  height={24}
                  className="w-auto h-auto"
                />
                <p className="text-gray-500 text-sm">{f.title}</p>
              </div>

              <p className="text-base">{f.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-white text-xs">We work throughout the world</p>
      </div>
    </nav>
  );
};

export default Footer;
