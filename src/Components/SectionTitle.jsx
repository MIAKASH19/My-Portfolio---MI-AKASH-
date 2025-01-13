import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import SplitType from "split-type";

const SectionTitle = ({ children, className = "", textClassName = "" }) => {
  const paraRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const splitInstance = new SplitType(paraRef.current, {
      types: "words, chars",
      tagName: "span",
    });

    gsap.from(splitInstance.chars, {
      opacity: 0,
      y: 50,
      stagger: 0.07,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: paraRef.current,
        start: "top 50%",
        end: "top 30%",
      },
    });

    return () => {
      splitInstance.revert();
    };

  }, [children]);

  return (
    <div className={className}>
      <p ref={paraRef} className={textClassName}>
        {children}
      </p>
    </div>
  );
};

export default SectionTitle;
