import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Cursor = ({ hoveredCard }) => {
  const cursorRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 1.2,
        ease: "power3.out",
      });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  useEffect(() => {
    if (hoveredCard) {
      gsap.to(cursorRef.current, {
        width: "100px",
        height: "30px",
        borderRadius: "25px",
        duration: 0.3,
        ease: "power3.out",
      });

      gsap.to(textRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power3.out",
      });
    } else {
      gsap.to(cursorRef.current, {
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        duration: 0.3,
        ease: "power3.out",
      });

      gsap.to(textRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power3.out",
      });
    }
  }, [hoveredCard]);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-2 h-2 bg-[#F0281E] rounded-full pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2 overflow-hidden "
    >
      <div
        ref={textRef}
        className="w-full h-full flex items-center justify-center text-black uppercase text-center opacity-0"
      >
        {hoveredCard && <marquee>{hoveredCard.heading}</marquee>}
      </div>
    </div>
  );
};

export default Cursor;