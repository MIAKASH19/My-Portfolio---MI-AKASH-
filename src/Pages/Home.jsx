import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import BlockContainer from "../Components/BlockContainer";
import Projects from "../Components/Projects";
import Text from "../Components/Text";
import Services from "../Components/Services";

const Home = () => {
  return (
    <div className="w-full h-full">
      <Hero />
      <About />
      {/* <Text /> */}
      <Projects />
      <Services />
    </div>
  );
};

export default Home;
