import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import BlockContainer from "../Components/BlockContainer";

const Home = () => {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <Hero />
      <About />
    </div>
  );
};

export default Home;
