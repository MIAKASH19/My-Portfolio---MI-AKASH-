import { motion, useTransform } from "framer-motion";
import React from "react";

const Card = ({ title, description, src, url, color, index, progress, range, targetScale }) => {

  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div className="h-[120vh] sticky top-0 flex items-center justify-center text-black dark:text-white" >
      <motion.div className="relative flex items-center justify-center w-[600px] h-[400px] rounded-[30px] origin-top" style={{backgroundColor: color, scale,  top:`calc(-5vh + ${index * 25}px)`}}>
        <p className="font-plus font-medium text-6xl tracking-tighter">{title}</p>
      </motion.div>
    </div>
  );
};

export default Card;
