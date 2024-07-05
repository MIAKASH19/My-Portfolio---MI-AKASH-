import React, { useState, useContext, createContext, useEffect } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  const [screenSize, setScreenSize] = useState(undefined)
  const [showNavBtn, setShowNavBtn] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

  return (
    <StateContext.Provider value={{ 
        isActiveMenu, 
        setIsActiveMenu, 
        screenSize, 
        setScreenSize,
        showNavBtn,
        setShowNavBtn,
        isDarkMode,
        toggleDarkMode
        }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);