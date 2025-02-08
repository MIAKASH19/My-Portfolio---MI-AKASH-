import { motion, useTransform } from "framer-motion";
import React from "react";
import Nike from "../../public/images/Nike.jpg";
import { Link, useParams } from "react-router-dom";
import { useStateContext } from "../Context/ContextProvider";

const Card = ({
  title,
  description,
  src,
  url,
  color,
  index,
  progress,
  range,
  targetScale,
}) => {
  const { id } = useParams();

  const { projects } = useStateContext();

  return (
    <motion.div
      className="relative flex flex-col w-screen h-screen rounded-[30px] origin-top px-10 py-5"
      style={{ backgroundColor: color }}
    >
      <div className="bg-re-500 flex items-center justify-between  border-b-2 border-white pb-5">
        <div className="flex items-center gap-5">
          <div className="w-4 h-4 bg-black rounded-full" />
          <h1 className="text-4xl font-plus font-medium tracking-tighter ">
            {id}
          </h1>
        </div>
        <div>
          <h3 className="font-plus font-semibold">2022-2025</h3>
        </div>
      </div>
      <div className="flex items-center gap-16">
        <div className="overflow-hidden w-2/3 h-[80vh] bg-re-500 my-5 rounded-lg">
          <img className="w-full" src={projects.link} alt="Nike" />
        </div>
        <div className="flex flex-col items-start gap-5">
          <h1 className="font-plus text-2xl px-16 py-5 bg-zinc-400 rounded-full">
            Web Development
          </h1>
          <h1 className="font-plus text-2xl px-16 py-5 bg-zinc-400 rounded-full">
            Design
          </h1>
          <h1 className="font-plus text-2xl px-16 py-5 bg-zinc-400 rounded-full">
            UI/UX Design
          </h1>
          <h1 className="font-plus text-2xl px-16 py-5 bg-zinc-400 rounded-full">
            Speed Optimization
          </h1>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
