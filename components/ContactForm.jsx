import React from "react";
import FormInput from "./FormInput";
import FormButton from "./FormButton";

const ContactForm = () => {
  return (
    <div className="  bg-white p-6 rounded-lg shadow-lg mx-6 max-w-2xl mt-8">
      <h2 className="text-xl max-w-md font-bold mb-4">
        Leave your contacts and we will call you back   within 30 minutes
      </h2>
      <form className="block md:flex gap-6 pt-4  items-end">
        <FormInput />

        <FormButton title="Get Consultaion" color="bg-[#80A948]" />
      </form>
    </div>
  );
};

export default ContactForm;
