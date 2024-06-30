import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Cursor from "./Components/Cursor";
import Work from "./Pages/Work";
import About from "./Pages/About";
import PlayGround from "./Pages/PlayGround";
import Contact from "./Pages/Contact";
import { useStateContext } from "./Context/ContextProvider";
import { AnimatePresence } from "framer-motion";
import SideMenu from "./Components/SideMenu";

const App = () => {
  const { isActiveMenu } = useStateContext();
  return (
    <div className="bg-black w-full h-full">
      <Cursor />
      <Navbar />
      <AnimatePresence mode="wait">{isActiveMenu && <SideMenu />}</AnimatePresence>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/playground" element={<PlayGround />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
