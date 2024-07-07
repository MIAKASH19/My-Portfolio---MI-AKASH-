import React, { useCallback, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../Context/ContextProvider";
import { navList } from "../Utils/dummy";
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import Items from "./Items";

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
    <div className="h-20 bg-transparent w-full fixed top-0 left-0 text-text flex items-center justify-between font-plus px-10 z-[11] mix-blend-difference">
      <div>
        <NavLink
          to="/"
          className="uppercase text-[20px] font-plus leading-none text-white font-normal mix-blend-difference tracking-tighter"
        >
          Mi akash
        </NavLink>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer text-white">
        {isDarkMode ? (
          <div className="mix-blend-difference" onClick={toggleDarkMode}>
            <GoSun className=" w-5 h-5" />
          </div>
        ) : (
          <div className="mix-blend-difference" onClick={toggleDarkMode}>
            <IoMoonOutline className=" w-5 h-5" />
          </div>
        )}
      </div>
      <div className="relative ">
        {showNavBtn ? (
          <button
            className="absolute -top-8 -right-5 flex flex-col items-center bg-white justify-center w-14 h-14 rounded-full pointer-events-auto z-[0]"
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
          <div className="flex gap-8">
            <Items Item={navList} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
