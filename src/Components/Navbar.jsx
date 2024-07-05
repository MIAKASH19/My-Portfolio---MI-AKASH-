import React, { useCallback, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../Context/ContextProvider";
import { navList } from "../Utils/dummy";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";

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

  return (
    <div className="h-20 bg-transparent w-full fixed top-0 left-0 text-text flex items-center justify-between font-plus px-10 z-[11]">
      <div>
        <NavLink
          to="/"
          className="uppercase text-[20px] font-plus leading-none text-red-500 font-semibold mix-blend-difference tracking-tighter"
        >
          Mi akash
        </NavLink>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer">
        {isDarkMode ? (
          <div
            onClick={toggleDarkMode}
          >
            <GoSun className="text-white w-5 h-5"/>
          </div>
        ) : (
          <div
            onClick={toggleDarkMode}
          >
            <IoMoonOutline className="text-gray w-5 h-5"/>
          </div>
        )}
      </div>
      <div className="relative ">
        {showNavBtn ? (
          <button
            className="absolute -top-5 -right-5 flex flex-col items-center bg-secondary justify-center w-14 h-14 rounded-full pointer-events-auto z-[0]"
            onClick={() => setIsActiveMenu(!isActiveMenu)}
          >
            <span
              className={`${
                isActiveMenu && "rotate-45"
              } h-[2px] w-7 rounded-full bg-black transition-all duration-500`}
            ></span>
            <span
              className={`${
                isActiveMenu ? "-rotate-45" : "mt-1"
              } h-[2px] w-7 rounded-full bg-black transition-all duration-500`}
            ></span>
          </button>
        ) : (
          <ul className="flex gap-8">
            {navList.map((List, index) => (
              <li
                key={index}
                className="capitalize text-gray dark:text-white font-medium hover:text-secondary dark:hover:text-secondary"
              >
                <NavLink to={`/${List}`}>{List}</NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
