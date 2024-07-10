// import React, { useEffect, useRef, useState } from "react";
// import { gsap, Expo, Power3 } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const ImageRow = ({ item }) => {
//   const imgRef = useRef(null);
//   const elemRef = useRef(null);
//   const borderRef = useRef([]);
//   borderRef.current = [];
//   const [rotateInit, setRotateInit] = useState(0);

//   useEffect(() => {
//     gsap.to(borderRef.current, {
//       width: "100%",
//       scrollTrigger: {
//         scroll: "body",
//         trigger: elemRef.current,
//         start: "top 50%",
//         end: "top 30%",
//       },
//     });
//   }, []);

//   useEffect(() => {
//     const handleMouseLeave = () => {
//       gsap.to(imgRef.current, {
//         opacity: 0,
//         duration: 1,
//         ease: Expo.easeInOut,
//         rotate: 0,
//       });
//     };

//     const handleMouseMove = (e) => {
//       const elem = e.currentTarget;
//       const diffY = e.clientY - elem.getBoundingClientRect().top;
//       const diffX = e.clientX - elem.getBoundingClientRect().left;
//       const newDiffRot = e.clientX - rotateInit;
//       setRotateInit(e.clientX);

//       gsap.to(imgRef.current, {
//         opacity: 1,
//         duration: 0.5,
//         top: diffY,
//         left: diffX,
//         ease: Power3.easeOut,
//         rotate: gsap.utils.clamp(-20, 20, newDiffRot * 2),
//       });
//     };

//     const elem = imgRef.current.parentElement;
//     elem.addEventListener("mouseleave", handleMouseLeave);
//     elem.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       elem.removeEventListener("mouseleave", handleMouseLeave);
//       elem.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, [rotateInit]);

//   return (
//     <div ref={elemRef} className="relative h-[15vh] sm:h-[30vh] md:h-[25vh] lg:h-[35vh] w-full flex items-center justify-between">
//       <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-plus uppercase tracking-tighter font-medium">
//         {item.title}
//       </h1>
//       <div ref={(el) => (borderRef.current = el)} className="absolute top-0 left-0 w-0 bg-slate-900 h-[1px]" />
//       <img
//         ref={imgRef}
//         src={images[item.src]}
//         alt={item.alt}
//         className="absolute h-[150%] sm:h-[180%] md:h-[200%] lg:h-[230%] opacity-0 z-[9999] pointer-events-none top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
//       />
//     </div>
//   );
// };

// export default ImageRow;

import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ImageRow = ({ item, index }) => {
  return (
    <div
      className={`w-full h-20  flex items-center justify-between pl-10 font-plus text-gray dark:text-white border-b-2`}
    >
      <div className="flex items-center justify-between gap-8">
        <p className="">{item.id}</p>
        <h1 className="text-2xl uppercase">{item.heading}</h1>
      </div>
      <button className="bg-transparent border-[1px] border-black dark:border-white text-black dark:text-white w-16 h-16 flex items-center justify-center rounded-full">
        <MdArrowOutward className="text-2xl"/>
      </button>
    </div>
  );
};

export default ImageRow;
