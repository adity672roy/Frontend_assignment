import React from "react";
import Image from "next/image";

const LogoSection = () => {
  return (
    <div className=" my-10 py-10 border-y border-gray-400 overflow-x-hidden ">
      <div className="flex items-center justify-between animate-logo-section">
        <Image src="/planet-logo.png" alt="logo" width={160} height={70} />
        <Image src="/planet-logo.png" alt="logo" width={160} height={70} />
        <Image src="/planet-logo.png" alt="logo" width={160} height={70} />
        <Image src="/planet-logo.png" alt="logo" width={160} height={70} />
        <Image src="/planet-logo.png" alt="logo" width={160} height={70} />
        <Image src="/planet-logo.png" alt="logo" width={160} height={70} />
      </div>
    </div>
  );
};

export default LogoSection;
