import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import MagnetoButton from "./MagnetoButton";
import Items from "./Items";

const Hero = () => {
  const dotRef = useRef();
  useGSAP(() => {
    gsap.from(".first", {
      x: "-100%",
      delay: 1.5,
      duration: 1,
      ease: "power1.out",
    });
    gsap.from(".second", {
      delay: 1.5,
      x: "100%",
      duration: 1,
      ease: "power1.out",
    });
  }, []);

  return (
    <section className="w-full min-h-screen bg-white dark:bg-gray flex items-start flex-col justify-between overflow-hidden">
      <div className="mt-32 px-10 dark:bg-gray-700">
        <div className="first">
          <h1 className="uppercase text-[9vw] text-black dark:text-white font-plus leading-none font-semibold tracking-tighter flex items-center">
            Developer
          </h1>
        </div>

        <div className="second flex gap-10 items-baseline">
          <h1 className="second uppercase text-[9vw] text-black dark:text-white font-plus leading-none font-semibold tracking-tighter">
            &designer
          </h1>
          <span className="text-2xl text-black dark:text-white font-plus">
            ( © 2024 )
          </span>
        </div>
      </div>
      <div className="second w-full flex justify-end items-baseline mt-20 px-10">
        <h6 className="second capo text-end text-[1.5vw] text-black w-1/2 dark:text-slate-300 font-plus leading-tight font-medium dark:font-light tracking-normal">
          Delivering comprehensive digital experiences by merging creative
          design and advanced development techniques
        </h6>
      </div>
      <div className="flex items-center justify-between w-full h-20 bg-gray-100 dark:bg-gray-800 px-10">
        <h1 className="font-plus text-black dark:text-white text-md">
          Based in Bangladesh
        </h1>
        <h1 className="flex items-center justify-center gap-3 font-plus text-white dark:text-black text-md font-semibold rounded-full bg-gray dark:bg-slate-200 px-5 py-3 ">
          <div ref={dotRef} className="rounded-full w-3 h-3 bg-green-600" />
          Available for freelance
        </h1>
      </div>
    </section>
  );
};

export default Hero;
