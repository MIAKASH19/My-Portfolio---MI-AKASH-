import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import BlockContainer from "../Components/BlockContainer";
import Projects from "../Components/Projects";
import Text from "../Components/Text";
import Services from "../Components/Services";
import Approach from "../Components/Approach";

const Home = () => {
  return (
    <div className="w-full h-full">
      <Hero />
      <About />
      {/* <Text /> */}
      <Projects />
      <Services />
      <Approach />
    </div>
  );
};

export default Home;
