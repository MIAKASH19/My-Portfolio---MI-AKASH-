import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Components/Navbar";
import Cursor from "./Components/Cursor";
import { useStateContext } from "./Context/ContextProvider";
import { AnimatePresence } from "framer-motion";
import SideMenu from "./Components/SideMenu";
import Loader from "./Components/Loader";
import { gsap } from "gsap";
import Lenis from "@studio-freight/lenis";
import Routing from "./Utils/Routing";

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
    const timer = setTimeout(() => {
      gsap.to(loaderRef.current, {
        y: "-100%", 
        duration: 1,
        ease: "power1.out",
        onComplete: () => {
          console.log("Loader animation complete");
          setLoading(false);
        },
      });
    }, 500);

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
        <Routing />
      </div>
    </div>
  );
};

export default App;
