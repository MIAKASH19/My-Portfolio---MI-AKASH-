import React, { useCallback, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useStateContext } from "../Context/ContextProvider";

function Navbar() {
  const {
    isActiveMenu,
    setIsActiveMenu,
    screenSize,
    setScreenSize,
    showNavBtn,
    setShowNavBtn,
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
    const shouldShowNavBtn = screenSize <= 1100;
    setShowNavBtn(shouldShowNavBtn);
    setIsActiveMenu(false);
  }, [screenSize, setShowNavBtn, setIsActiveMenu]);

  return (
    <div className="h-20 bg-black w-full fixed top-0 left-0 text-white flex items-center justify-between font-plus px-10">
      <div>
        <NavLink
          to="/"
          className="uppercase text-[20px] font-plus leading-none font-semibold tracking-tighter"
        >
          Mi akash
        </NavLink>
      </div>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <div className="bg-white w-4 h-4 rounded-full" />
      </div>
      <div className="relative">
        {showNavBtn ? (
          <button
            className="absolute right-0 flex flex-col items-center bg-white justify-center w-14 h-14 rounded-full pointer-events-auto z-[57]"
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
            <li>
              <NavLink exact to="/work" activeClassName="text-yellow-500">
                Work
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/about" activeClassName="text-yellow-500">
                About
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/playground" activeClassName="text-yellow-500">
                Playground
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/contact" activeClassName="text-yellow-500">
                Contact
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
