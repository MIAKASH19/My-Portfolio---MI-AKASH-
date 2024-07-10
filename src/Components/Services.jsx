import React from "react";
import ImageRow from "./ImageRow";
import { ServiceText } from "../Utils/dummy";

const Services = () => {
  return (
    <section className=" flex flex-col items-center min-h-[150vh] gap-20 dark:bg-gray bg-white pb-32">
      <div className="flex items-center justify-center mt-64">
        <h1 className="text-[15vw] text-gray dark:text-white font-poppins tracking-tight uppercase font-semibold">
          Services
        </h1>
      </div>
      <div className="flex items-start justify-center w-full">
        <div className="w-[70%] h-20 px-10 flex items-center ">
          <p className="text-2xl font-plus text-black dark:text-white tracking-tighter font-medium">( What I Do )</p>
        </div>
        <div className="flex flex-col w-full space-y-6 md:space-y-8 lg:space-y-10 mr-10">
          {ServiceText.map((item, index) => (
            <ImageRow key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
