import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Block = ({ children }) => {
  return <div className="block h-1/3 w-80 bg-blue-500 m-2">{children}</div>;
};

const BlockContainer = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const blocks = containerRef.current.children;

    gsap.fromTo(
      blocks,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.5,
        stagger: .2, // Stagger effect
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 35%",
          end: "bottom 100%",
          scrub: 1,
            // pin: true,
          markers: true,
        },
      }
    );
  }, []);

  return (
    <div className="bg-slate-400 flex items-center justify-center h-[100vh] w-full">
      <div
        ref={containerRef}
        className="block-container bg-red-500 h-full w-full flex flex-row flex-wrap justify-center items-center"
      >
        {Array.from({ length: 4 }).map((_, index) => (
          <Block key={index}>Block {index + 1}</Block>
        ))}
      </div>
    </div>
  );
};

export default BlockContainer;
