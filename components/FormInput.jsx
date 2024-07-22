import React from "react";

const FormInput = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <div>
          <label className="block text-sm font-semibold text-[#667085]">
            Full name
          </label>
          <input
            type="text"
            className="w-full border-b border-gray-300 py-3 outline-none placeholder:text-black placeholder:font-semibold"
            placeholder="My Name"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#667085]">
            Business name
          </label>
          <input
            type="text"
            className="w-full border-b placeholder:text-black placeholder:font-semibold border-gray-300 py-3 outline-none"
            placeholder="ABC Technologies PVT LTD"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 mt-5 md:mt-0">
        <div>
          <label className="block text-sm font-semibold text-[#667085]">
            Phone number
          </label>
        
          <input
            type="text"
            className="w-full border-b border-gray-300 py-3 placeholder:text-black placeholder:font-semibold outline-none"
            placeholder="&#x1F1EE;&#x1F1F3;  +91 0000000000"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-[#667085]">
            Business mail
          </label>
          <input
            type="email"
            className="w-full border-b placeholder:text-black placeholder:font-semibold border-gray-300 py-3 outline-none"
            placeholder="demoaccount@gmail.com"
          />
        </div>
      </div>
    </>
  );
};

export default FormInput;
