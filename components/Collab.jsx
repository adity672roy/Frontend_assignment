import React from "react"; 
import FormInput from "./FormInput";
import FormButton from "./FormButton";

const Collab = () => {
  return (
    <section className="bg-gradient-to-r-custom py-16  ">
      <div className="container mx-auto max-w-7xl block md:flex justify-between gap-4 ">
        <div className="max-w-md text-white">
          <h1 className="text-4xl font-bold  ">
            Let's discuss <br />
            Your project
          </h1>

          <p className=" my-8 max-w-md font-normal">
            Let's figure out how to create an effective application, its cost
            and terms of its development
          </p>
        </div>

        <div className="flex flex-col gap-3 bg-white  p-6  rounded-lg shadow-lg md:mx-6 max-w-2xl  ">
          <form className="block md:flex gap-6 pt-4 ">
            <FormInput />
          </form>
          <div className="text-center md:text-end">
            <FormButton title="Discuss the project" color="bg-yellow-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collab;
