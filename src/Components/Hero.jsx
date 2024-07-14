import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import MagnetoButton from "./MagnetoButton";
import Items from "./Items";

const Hero = () => {
  const dotRef = useRef();
  
  useGSAP(() => {
    gsap.from(".first", {
      x: "-110%",
      delay: 1.5,
      duration: 1,
      ease: "power1.out",
    });
    gsap.from(".second", {
      delay: 1.5,
      x: "130%",
      duration: 1,
      ease: "power1.out",
    });
    gsap.from(".third", {
      delay: 1.5,
      y: "130%",
      duration: 1,
      ease: "power1.out",
    });
  }, []);

  return (
    <section className="w-full min-h-screen bg-white dark:bg-gray flex items-center flex-col justify-between overflow-x-hidden">
      <div className="mt-24 dark:bg-gray-700 px-5">
        <div className="first">
          <h1 className=" text-[13vw] uppercase text-black text-center dark:text-white font-poppins leading-none font-semibold tracking-tight flex items-center">
            Developer
          </h1>
        </div>
        <div className="second">
          <h1 className=" text-[13vw] uppercase text-black dark:text-white font-poppins leading-none font-semibold tracking-tight flex items-center">
          <span className="text-secondary pr-10">&</span>Designer 
          </h1>
        </div>
      </div>
      <div className="second w-full flex justify-center items-baseline mt-10 px-10">
        <h6 className="third mb-0 text-center  text-[1.5vw] text-black w-1/2 dark:text-slate-200 font-plus leading-tight font-medium dark:font-light tracking-normal">
          Delivering comprehensive digital experiences by merging creative
          design and advanced development techniques
        </h6>
      </div>
      <div className="flex items-center justify-between w-full h-20 bg-gray-100 dark:bg-gray-800 px-10">
        <h1 className="font-plus text-black dark:text-white text-md">
          Based in Bangladesh
        </h1>
        <h1 className="flex items-center justify-center gap-3 font-plus text-black dark:text-white  text-md font-semibold rounded-full  px-5 py-3 ">
          <div ref={dotRef} className="rounded-full w-3 h-3 bg-green-600" />
          Available for freelance
        </h1>
      </div>
    </section>
  );
};

export default Hero;
