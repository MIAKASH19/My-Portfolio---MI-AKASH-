import React from "react";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-black flex items-start flex-col justify-between">
      <div className="mt-32 px-10 bg-gren-500">
        <div>
          <h1 className="uppercase text-[13vw] text-white font-plus leading-none font-semibold tracking-tighter">
            Developer
          </h1>
        </div>
        <div className="flex gap-10 items-baseline">
          <h1
            className="uppercase  text-[13vw] text-white font-plus leading-none font-semibold
       tracking-tighter"
          >
            &designer
          </h1>
          <span className="text-2xl text-white font-plus">( © 2024 )</span>
        </div>
      </div>
      <div className="flex items-center justify-between w-full h-20 bg-black px-10">
        <h1 className="font-plus text-white text-xl">hi </h1>
        <h1 className="font-plus text-white text-xl">hello</h1>
        <h1 className="font-plus text-white text-xl">assalamualaikum</h1>
      </div>
    </section>
  );
};

export default Hero;
