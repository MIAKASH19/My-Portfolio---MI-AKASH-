import React from "react";



const Text = () => {
  const positions = [
    { top: "5%", left: "5%" },
    { top: "25%", left: "41%" },
    { top: "15%", left: "76%" },
    { top: "45%", left: "15%" },
    { top: "55%", left: "70%" },
    { top: "70%", left: "5%" },
    { top: "80%", left: "50%" },
  ];

  const divs = positions.map((pos, index) => (
    <div
      key={index}
      className="h-96 w-72 bg-black dark:bg-white rounded-xl absolute"
      style={{ top: pos.top, left: pos.left }}
    ></div>
  ));


  return (
    <section className="min-h-[180vh] relative w-full bg-white dark:bg-gray text-black dark:text-white flex flex-col items-center justify-center gap-20 py-20 ">
      <div className="sticky top-0 flex flex-col items-start justify-between px-10 gap-2  w-full">
        <h1 className=" text-[15vw] leading-[11vw] font-bold tracking-tight font-poppins uppercase">
          here
        </h1>
        <h1 className=" text-[15vw] text-secondary font-normal leading-[12vw] tracking-tight font-poppins uppercase">
          creativity
        </h1>
        <h1 className=" text-[15vw] leading-[12vw] font-bold tracking-tight font-poppins uppercase">
          meets
        </h1>
        <div className=" text-[15vw] text-secondary font-normal leading-[12vw] flex items-center justify-between tracking-tight font-poppins uppercase">
          <h1>Coding</h1>
          <h3 className="text-[2.5vw] text-black dark:text-white text-end w-[30%] leading-none font-medium tracking-tighter font-plus capitalize ">
            I collaborate with visionary leaders to build influential brands
            that shape our world.
          </h3>
        </div>
      </div>

      <div className="min-h-[350vh] relative text-black dark:text-white bg-transparent w-full z-[10] px-10">
        {divs}
      </div>
    </section>
  );
};

export default Text;
