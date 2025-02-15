import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import MagnetoButton from "./MagnetoButton";
import Items from "./Items";
import Dennis from "../../public/images/Dennis.jpg"
import SectionTitle from "./SectionTitle";

const Hero = () => {
  const dotRef = useRef();
  
  

  return (
    <section className=" section-hero w-full min-h-[105vh] bg-[#999D9E]  flex relative items-center flex-col justify-end overflow-x-hidden">
      <div className="relative dark:bg-gray-700 px-5">
        <div className="first bg-re-500">
          {/* <h1 className="title w-fit text-[12.2vw] uppercase font-poppins leading-none bg-re-500 text-white font-semibold tracking-tight border-b-2 mb-28">
            web Developer
          </h1> */}
          <SectionTitle
          className="custom-class"
          textClassName="text-gray dark:text-white  font-almarena font-bold tracking-tight uppercase text-[12.2vw] leading-none border-b-2 mb-28"
        >
          web Developer
        </SectionTitle>
        </div>
      </div>

      <div className="flex absolute bottom-8 items-center justify-between w-full h-20 bg-gray-100 dark:bg-gray-800 px-10">
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
