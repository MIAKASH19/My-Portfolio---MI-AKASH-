import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Work from "../Pages/Work";
import About from "../Pages/About";
import PlayGround from "../Pages/PlayGround";
import Contact from "../Pages/Contact";
import ProjectDetails from "../Components/ProjectDetails";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/work/:id" element={<ProjectDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/playground" element={<PlayGround />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default Routing;
