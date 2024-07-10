import React, { useEffect, useState, useRef } from "react";
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
import Loader from "./Components/Loader";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";

const App = () => {
  const { isActiveMenu } = useStateContext();
  const [loading, setLoading] = useState(true);
  const loaderRef = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  useEffect(() => {
    // Simulate a network request
    const timer = setTimeout(() => {
      gsap.to(loaderRef.current, {
        y: "-100%", // Move loader to the top
        duration: 1,
        ease: "power1.out",
        onComplete: () => {
          console.log("Loader animation complete");
          setLoading(false);
        },
      });
    }, 500); // 0.5 seconds

    // Cleanup the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={container} className="w-full h-full">
      <div
        ref={loaderRef}
        className="bg-black dark:bg-white flex justify-center items-center h-screen fixed top-0 left-0 w-full z-50"
      >
        <Loader />
      </div>
      <div>
        <Cursor />
        <Navbar />
        <AnimatePresence mode="wait">
          {isActiveMenu && <SideMenu />}
        </AnimatePresence>
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
    </div>
  );
};

export default App;
