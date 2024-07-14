import React from "react";

const Text = () => {
  return (
    <section className="h-[180vh] w-full bg-white dark:bg-gray text-black dark:text-white flex flex-col items-center justify-center gap-20 py-20 overflow-y-hidden">
      <div className="flex flex-col items-center justify-between px-10">
        <h1 className="text-[15vw] leading-none font-bold tracking-tight font-poppins uppercase">
          here <span className="text-secondary font-normal">creativity</span> meets <span className="text-secondary font-normal">science</span>
        </h1>
      </div>
      <div className=" flex justify-end px-10">
        <h3 className="text-[3vw] text-end w-1/3 leading-none font-medium tracking-tighter font-plus ">
          We collaborate with visionary leaders to build influential brands that
          shape our world.
        </h3>
      </div>
    </section>
  );
};

export default Text;
