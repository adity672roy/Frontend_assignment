import React from "react";

const FormButton = ({ title, color }) => {
  return (
    <button
      type="submit"
      className={`${color} mt-5 md:mt-0 text-white px-4 py-2 rounded-lg`}
    >
      {title}
    </button>
  );
};

export default FormButton;
