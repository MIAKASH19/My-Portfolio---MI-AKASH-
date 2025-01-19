import React, { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../Context/ContextProvider";
import { navList } from "../Utils/dummy";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import Items from "./Items";
import { motion } from "framer-motion";

function Navbar() {
  const {
    isActiveMenu,
    setIsActiveMenu,
    screenSize,
    setScreenSize,
    showNavBtn,
    setShowNavBtn,
    isDarkMode,
    toggleDarkMode,
  } = useStateContext();

  const [scrollDirection, setScrollDirection] = useState("up");

  const handleResize = useCallback(() => {
    setScreenSize(window.innerWidth);
  }, [setScreenSize]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    const shouldShowNavBtn = screenSize <= 900;
    setShowNavBtn(shouldShowNavBtn);
    setIsActiveMenu(false);
  }, [screenSize, setShowNavBtn, setIsActiveMenu]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navAnimation = {
    initial: { x: "0" },
    animate: { x: "-100%" },
    transition: { ease: "linear", repeat: Infinity, duration: 2 },
  };

  const iconAnimation = {
    initial: { rotate: 0 },
    animate: { rotate: 360 },
    transition: { ease: "linear", repeat: Infinity, duration: 2 },
  };

  const renderToggleButton = () => (
    <button
      className="absolute -top-8 -right-5 flex flex-col items-center bg-white justify-center w-14 h-14 rounded-full pointer-events-auto z-[0]"
      onClick={() => setIsActiveMenu(!isActiveMenu)}
    >
      <span
        className={`${
          isActiveMenu ? "rotate-45" : ""
        } h-[2px] w-7 rounded-full bg-black transition-all duration-500`}
      ></span>
      <span
        className={`${
          isActiveMenu ? "-rotate-45 mt-0" : "mt-1"
        } h-[2px] w-7 rounded-full bg-black transition-all duration-500`}
      ></span>
    </button>
  );

  const renderNavLinks = () => (
    <div className="flex gap-8">
      <Items Item={navList} />
    </div>
  );

  return (
    <nav
      className={`h-[15vh] bg-transparent ackdrop-blur-md w-full fixed top-0 left-0 text-text flex items-center justify-between font-plus px-10 z-[11] mix-blend-difference transition-transform duration-500 ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <NavLink
        to="/"
        className="uppercase w-[10vw] flex whitespace-nowrap overflow-hidden text-[1.5vw] border-[1px] rounded-full px-5 py-2 font-plus leading-none text-white font-light mix-blend-difference tracking-tighter"
      >
        {[...Array(3)].map((_, index) => (
          <motion.h1
            key={index}
            {...navAnimation}
            className="inline-block pr-3"
          >
            MI AKASH
          </motion.h1>
        ))}
      </NavLink>
      <div
        className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer text-white"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? (
          <motion.div {...iconAnimation}>
            <GoSun className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div {...iconAnimation}>
            <IoMoonOutline className="w-5 h-5" />
          </motion.div>
        )}
      </div>
      <div className="relative">
        {showNavBtn ? renderToggleButton() : renderNavLinks()}
      </div>
    </nav>
  );
}

export default Navbar;
