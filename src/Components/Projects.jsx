import React, { useRef } from "react";
import Card from "./Card";
import { projects } from "../Utils/dummy";
import { useScroll } from "framer-motion";
import MagnetoButton from "./MagnetoButton";

const Projects = () => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <section className="relative bg-white w-full dark:bg-gray text-black dark:text-white flex flex-col items-center justify-center">
      <div className="h-[100vh] sticky top-0 flex flex-col items-center justify-center">
        <h1 className="text-[20vw] leading-none font-bold tracking-tight font-poppins uppercase">
          Projects
        </h1>
      </div>
      {projects.map((project, index) => {
        const targetScale = 1 - ((projects.length - index) * 0.05);
        return <Card key={index} index={index} {...project} progress={scrollYProgress} range={[index * .16, 1]} targetScale={targetScale}/>;
      })}
    </section>
  );
};

export default Projects;
