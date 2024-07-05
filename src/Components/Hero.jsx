import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import MagnetoButton from "./MagnetoButton";

const Hero = () => {
  useGSAP(() => {
    gsap.from(".first", {
      x: "-100%",
      duration: 1,
      ease: "power1.out"
    });
    gsap.from(".second", {
      x: "100%",
      duration: 1,
      ease: "power1.out"
    });
  }, []);

  return (
    <section className="w-full min-h-screen bg-white dark:bg-gray flex items-start flex-col justify-between overflow-hidden">
      <div className="mt-32 px-10 dark:bg-gray-700">
        <div className="first">
          <h1 className="uppercase text-[8vw] text-black dark:text-white font-plus leading-none font-semibold tracking-tighter flex items-center">
            Developer
          </h1>
        </div>
        <div className="second flex gap-10 items-baseline">
          <h1 className="second uppercase text-[8vw] text-black dark:text-white font-plus leading-none font-semibold tracking-tighter">
            &designer
          </h1>
          <span className="text-2xl text-black dark:text-white font-plus">( © 2024 )</span>
        </div>
      </div>
      <div className="flex items-center justify-between w-full h-20 bg-gray-100 dark:bg-gray-800 px-10">
        <h1 className="font-plus text-black dark:text-white text-md">Based in Bangladesh</h1>
        <h1 className="font-plus text-black dark:text-white text-md">Available for freelance</h1>
      </div>
    </section>
  );
};

export default Hero;
