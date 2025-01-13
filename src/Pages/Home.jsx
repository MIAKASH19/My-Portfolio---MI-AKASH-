import React from "react";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Text from "../Components/Text";
import Services from "../Components/Services";
import Approach from "../Components/Approach";
import Footer from "../Components/Footer";

const Home = () => {
  return (
    <div className="w-full h-full">
      <Hero />
      <About />
      <Projects />
      <Services />
      <Text />
      <Approach />
      <Footer />
    </div>
  );
};

export default Home;
