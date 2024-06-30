import React, { useState, useContext, createContext } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined)
  const [showNavBtn, setShowNavBtn] = useState(false)
  return (
    <StateContext.Provider value={{ 
        isActiveMenu, 
        setIsActiveMenu, 
        screenSize, 
        setScreenSize,
        showNavBtn,
        setShowNavBtn,
        }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);