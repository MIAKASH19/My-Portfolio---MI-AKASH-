import React, { useRef } from "react";
import Card from "./Card";
import { useScroll } from "framer-motion";
import { useStateContext } from "../Context/ContextProvider";
import { Link } from "react-router-dom";

const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const { projects } = useStateContext();

  return (
    <section className="relative bg-white w-full dark:bg-gray text-black dark:text-white flex flex-col items-center justify-center">
      <div className="h-[100vh] sticky top-0 flex flex-col items-center justify-center">
        <h1 className="text-[20vw] leading-none font-bold tracking-tight font-poppins uppercase">
          Projects
        </h1>
      </div>
      {projects.map((project, index) => {
        return (
          <Link to={`/work/${index}`} key={index} className="h-[100vh] sticky top-0 flex items-center justify-center text-black dark:text-white">
            <Card
              {...project}
              progress={scrollYProgress}
              range={[index * 0.16, 1]}
            />
            {/* {project.title} */}
          </Link>
        );
      })}
    </section>
  );
};

export default Projects;
