// import React from "react";
// import Image from "next/image";

// const links = [
//   {
//     id: 1,
//     title: "Services",
//   },
//   {
//     id: 2,
//     title: "Media",
//   },
//   {
//     id: 3,
//     title: "Cases",
//   },
//   {
//     id: 4,
//     title: "FAQ",
//   },
//   {
//     id: 5,
//     title: "Contact",
//   },
// ];
// const contact = [
//   {
//     id: 1,
//     icon: "/smartphone.png",
//     desc: "+91  000000000 ",
//   },
//   {
//     id: 2,
//     icon: "/mail.png",
//     desc: "demo@gmail.com",
//   },
// ];
// const Navbar = () => {
//   return (
//     <nav className="fixed top-6 left-0 right-0 z-20 mx-auto bg-white px-2 py-4 rounded-md shadow-lg max-w-7xl">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center gap-10 justify-between">
//           <Image
//             src="/logo.png"
//             alt="logo"
//             width={174}
//             height={60}
//             className="w-auto h-auto"
//           />

//           <ul className="flex items-center gap-6">
//             {links.map((link) => (
//               <li key={link.id} className="text-[#101828] font-medium">
//                 {link.title}
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div className="flex items-center justify-between gap-8">
//           {contact.map((c) => (
//             <div key={c.id} className="text-[#80A948] flex items-center gap-2">
//               <Image src={c.icon} alt="icon" width={24} height={24} />
//               <p>{c.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


"use client"

import React, { useState } from "react";
import Image from "next/image";
import {Menu} from "lucide-react"

const links = [
  {
    id: 1,
    title: "Services",
  },
  {
    id: 2,
    title: "Media",
  },
  {
    id: 3,
    title: "Cases",
  },
  {
    id: 4,
    title: "FAQ",
  },
  {
    id: 5,
    title: "Contact",
  },
];

const contact = [
  {
    id: 1,
    icon: "/smartphone.png",
    desc: "+91 000000000 ",
  },
  {
    id: 2,
    icon: "/mail.png",
    desc: "demo@gmail.com",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 z-20 mx-auto bg-white px-2 py-4 rounded-md shadow-lg max-w-7xl">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-10 justify-between">
          <Image
            src="/logo.png"
            alt="logo"
            width={174}
            height={60}
            className="w-auto h-auto"
          />

          <ul className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <li key={link.id} className="text-[#101828] font-medium">
                {link.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:flex items-center justify-between gap-8">
          {contact.map((c) => (
            <div key={c.id} className="text-[#80A948] flex items-center gap-2">
              <Image src={c.icon} alt="icon" width={24} height={24} />
              <p>{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
           <Menu />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden mt-4 flex flex-col items-center gap-4">
          <ul className="flex flex-col items-center gap-6">
            {links.map((link) => (
              <li key={link.id} className="text-[#101828] font-medium">
                {link.title}
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-center gap-4">
            {contact.map((c) => (
              <div key={c.id} className="text-[#80A948] flex items-center gap-2">
                <Image src={c.icon} alt="icon" width={24} height={24} />
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
