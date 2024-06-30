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

  const { isActiveMenu, setIsActiveMenu } = useStateContext();

  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const activeLink =
    "nav-item uppercase relative inline-block w-fit cursor-pointer font-machina -ml-4 pl-4 text-[6vh] z-10 text-[#D9FF06]";

  const normalLink =
    "nav-item uppercase relative inline-block w-fit cursor-pointer font-machina -ml-4 pl-4 text-[6vh] z-10 text-[#fff]";

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
      color: "#D9FF06",
    });
  };
  
  const handleMouseLeave = (index) => {
    gsap.to(navRefs.current[index].querySelector(".dot"), { opacity: 0 });
    gsap.to(navRefs.current[index], {
      x: 0,
      duration: 0.3,
      color: "#fff",
    });
  };
  
  const addToSocialRefs = (el) => {
    if (el && !socialRefs.current.includes(el)) {
      socialRefs.current.push(el);
    }
  };
  const secMouseEnter = (index)=> {
    gsap.to(socialRefs.current[index].querySelector(".line"), {
      width: "100%",
    });
  }
  const secMouseLeave = (index)=> {
    gsap.to(socialRefs.current[index].querySelector(".line"), {
      width: "0%",
    });
  }

  

  return (
    <div
      id="sideMenu"
      className="flex justify-end sm:w-[40%] w-full min-w-[350px] translate-x-0 h-full fixed top-0 right-0 z-[56]"
    >
      <motion.div
        variants={menuSlide}
        initial="initial"
        animate="enter"
        exit="exit"
        className="relative bg-gray w-full px-16 py-10 h-full"
      >
        <svg className="absolute fill-gray top-0 -left-[99px] w-full h-full">
          <motion.path
            variants={curve}
            initial="initial"
            animate="enter"
            exit="exit"
          />
        </svg>

        <div className="h-full p-25 flex flex-col justify-between">
          <div className="flex flex-col mt-10">
            <div className="text-white border-b-[1px] border-white uppercase text-[12px] font-plus mb-16">
              <p className="mb-4">Menu</p>
            </div>

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
                <div className="dot w-3 h-3 bg-white rounded-full opacity-0 absolute -translate-x-[50%] -translate-y-[50%] left-0 top-[50%]" />
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
                className="capitalize relative text-white"
                onMouseEnter={() => secMouseEnter(index)}
                onMouseLeave={() => secMouseLeave(index)}
              >
                {social}
                <div className="line w-0 h-[2px] bg-white rounded-full"></div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SideMenu;