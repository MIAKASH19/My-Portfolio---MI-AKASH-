import React, { useEffect, useLayoutEffect, useRef } from "react";
import ImageRow from "./ImageRow";
import { ServiceText } from "../Utils/dummy";
import { FiArrowDownRight } from "react-icons/fi";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Services = () => {
  const iconRef = useRef();

  useLayoutEffect(() => {
    const icon = iconRef.current;

    // Create an infinite diagonal up-and-down animation
    gsap.to(icon, {
      x: 10, 
      y: 10, 
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <section className=" flex flex-col items-center min-h-[120vh] gap-20 dark:bg-gray bg-white pb-32">
      <div className="flex items-center justify-center mt-32">
        <h1 className="text-[15vw] text-gray dark:text-white font-poppins tracking-tight uppercase font-semibold">
          Services
        </h1>
      </div>
      <div className="flex items-start justify-center w-full">
        <div className="w-[70%] h-20 px-10 flex items-center ">
          <p className=" flex items-start gap-1 text-3xl font-plus text-black dark:text-white tracking-tighter font-medium">
            What I Do{" "}
            <span ref={iconRef}>
              <FiArrowDownRight className="text-3xl text-secondary" />
            </span>
          </p>
        </div>
        <div className="flex flex-col w-full mr-10">
          {ServiceText.map((item, index) => (
            <ImageRow key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
