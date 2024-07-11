import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Picture1 from "../../public/images/1.jpg";
import Picture2 from "../../public/images/2.jpg";
import Picture3 from "../../public/images/3.jpg";

const Approach = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={container}
      className="bg-white dark:bg-gray flex flex-col items-center justify-center min-h-[120vh] w-full text-gray dark:text-white overflow-hidden"
    >
      <Slide
        src={Picture1}
        text="Strategy"
        left="-45%"
        directionX="left"
        progress={scrollYProgress}
      />
      <Slide
        src={Picture2}
        text="Branding"
        left="-20%"
        directionX="right"
        progress={scrollYProgress}
      />
      <Slide
        src={Picture3}
        text="Design"
        left="-40%"
        directionX="left"
        progress={scrollYProgress}
      />
      <div className='h-[100vh]' />
    </section>
  );
};

const Slide = ({ text, left, src, directionX, progress }) => {
  const direction = directionX === "left" ? -1 : 1;
  const translateX = useTransform(progress, [0, 1], [350 * direction, -350 * direction]);

  return (
    <motion.div style={{ x: translateX, left }} className="relative flex whitespace-nowrap">
      <Phrase src={src} text={text} />
      <Phrase src={src} text={text} />
      <Phrase src={src} text={text} />
      <Phrase src={src} text={text} />
    </motion.div>
  );
};

const Phrase = ({ text, src }) => {
  return (
    <div className="px-5 flex gap-5 items-center">
      <p className="text-[13vw] leading-none font-plus font-semibold tracking-tight uppercase">
        {text}
      </p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <img style={{ objectFit: "cover" }} src={src} alt="image" />
      </span>
    </div>
  );
};

export default Approach;
