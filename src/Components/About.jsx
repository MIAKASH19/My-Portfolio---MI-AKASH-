import React from "react";
import MagnetoButton from "./MagnetoButton";
import { NavLink } from "react-router-dom";
import LineAnimation from "./LineAnimation";

const About = () => {
  return (
    <section className="w-full min-h-[100vh] flex items-center flex-col justify-center bg-white dark:bg-gray dark:text-white font-semibold py-20">
      <div className="bg-re-500 h-[200px] flex items-center">
        <h2 className="text-5xl font-plus font-normal tracking-tighter">How i Find Interest</h2>
      </div>
      <div className="flex justify-between items-center font-plus font-normal leading-0 tracking-tighter text-center text-[3vw] px-20">
        <LineAnimation
          className="custom-class"
          textClassName="custom-text-class"
          style={{ fontSize: "3vw" }}
        >
          Founded in 2022, a branding agency is a firm that specializes in
          creating and launching brands, and rebranding. The role of a branding
          agency is to create, plan measure and manage branding strategies for
          clientsm including support in advertising and other forms of
          promotion.
        </LineAnimation>
      </div>
      <NavLink className="mt-32" to="/about">
        <MagnetoButton text="About Me" />
      </NavLink>
    </section>
  );
};

export default About;
