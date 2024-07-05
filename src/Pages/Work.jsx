import React from "react";

const Work = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center text-9xl text-white font-plus">
      <div className="relative">
        Work
        <svg
          className=" absolute top-[100%] left-0 bg-green-500 flex items-start justify-start -rotate-180"
          width="320"
          height="80"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 0 80 Q 160 -80 320 80" stroke="transparent" fill="black" />
        </svg>
      </div>
    </div>
  );
};

export default Work;
