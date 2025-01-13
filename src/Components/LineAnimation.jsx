import React, { useEffect, useRef } from "react";
import SplitType from "split-type";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const LineAnimation = ({ children, className = "", textClassName = "", style = {} }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const splitInstance = new SplitType(textRef.current, {
      types: "lines", 
      tagName: "span",
    });

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(splitInstance.lines, { 
      opacity: 0,
      y: 50,
      stagger: 0.1, 
      duration: .7,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 50%", 
        end: "top -10%",
        // scrub: true,
      },
    });

    return () => {
      splitInstance.revert();
    };
  }, []);

  return (
    <div className={className} style={style}>
      <p className={`${textClassName}`}>
        <span ref={textRef}>
          {children || "Default text if no children are passed"}
        </span>
      </p>
    </div>
  );
};

export default LineAnimation;
