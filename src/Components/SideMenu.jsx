import React, { useRef } from "react";
import { useStateContext } from "../Context/ContextProvider";
import { SideNavItems, SocialLink } from "../Utils/dummy";
import { motion } from "framer-motion";
import { menuSlide } from "../Utils/anim";
import { NavLink } from "react-router-dom";
import gsap from "gsap";

const SideMenu = () => {
  const navRefs = useRef([]);
  navRefs.current = [];
  const socialRefs = useRef([]);
  socialRefs.current = [];

  const { isActiveMenu, setIsActiveMenu, isDarkMode } = useStateContext();

  const activeLink =
    "nav-item uppercase relative inline-block w-fit cursor-pointer font-plus font-medium -ml-4 pl-4 text-[10vh] z-10 text-[#ff375f]";
  const normalLink =
    "nav-item uppercase relative inline-block w-fit cursor-pointer font-plus font-medium -ml-4 pl-4 text-[10vh] z-10 text-white dark:text-gray";

  const initialPath = `M 0 80 Q ${window.innerWidth / 2} -90 ${window.innerWidth} 80`;
  const targetPath = `M 0 80 Q ${window.innerWidth / 2} 80 ${window.innerWidth} 80`;

  const addToRefs = (el) => {
    if (el && !navRefs.current.includes(el)) {
      navRefs.current.push(el);
    }
  };

  const handleMouseEnter = (index) => {
    gsap.to(navRefs.current[index].querySelector(".dot"), { opacity: 1 });
    gsap.to(navRefs.current[index], {
      x: 20,
      duration: 0.3,
      color: "#ff375f",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(navRefs.current[index].querySelector(".dot"), { opacity: 0 });
    gsap.to(navRefs.current[index], {
      x: 0,
      duration: 0.3,
      color: isDarkMode ? "#16171A" : "#fff",
    });
  };

  const addToSocialRefs = (el) => {
    if (el && !socialRefs.current.includes(el)) {
      socialRefs.current.push(el);
    }
  };

  const secMouseEnter = (index) => {
    gsap.to(socialRefs.current[index].querySelector(".line"), {
      width: "100%",
    });
  };

  const secMouseLeave = (index) => {
    gsap.to(socialRefs.current[index].querySelector(".line"), {
      width: "0%",
    });
  };

  const curve = {
    initial: { d: initialPath },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
    },
  };

  return (
    <div
      id="sideMenu"
      className="flex justify-end w-full translate-x-0 h-full fixed top-0 right-0 z-[10]"
    >
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="relative bg-gray dark:bg-white w-full px-16 py-10 h-full"
      >
        <svg className="absolute fill-gray dark:fill-white -rotate-180 left-0 top-20 w-full h-full">
          <motion.path
            variants={curve}
            initial="initial"
            animate="enter"
            exit="exit"
          />
        </svg>

        <div className="h-full p-25 flex flex-col justify-between">
          <div className="flex flex-col items-center justify-center mt-10">
            {SideNavItems.map((data, index) => (
              <NavLink
                to={data.href}
                key={index}
                ref={addToRefs}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => setIsActiveMenu(!isActiveMenu)}
              >
                {data.title}
                <div className="dot w-3 h-3 bg-gray-900 dark:bg-gray-800 rounded-full opacity-0 absolute -translate-x-[50%] -translate-y-[50%] left-0 top-[50%]" />
              </NavLink>
            ))}
          </div>

          <div className="flex flex-wrap w-full justify-between gap-5 font-plus">
            {SocialLink.map((social, index) => (
              <a
                ref={addToSocialRefs}
                key={index}
                href={`https://www.${social}.com`}
                target="_blank"
                className="capitalize relative text-white dark:text-gray"
                onMouseEnter={() => secMouseEnter(index)}
                onMouseLeave={() => secMouseLeave(index)}
              >
                {social}
                <div className="line w-0 h-[2px] bg-black dark:bg-white rounded-full"></div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SideMenu;
