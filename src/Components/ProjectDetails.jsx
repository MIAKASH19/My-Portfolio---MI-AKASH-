import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useStateContext } from "../Context/ContextProvider";
import { FiArrowLeft } from "react-icons/fi";
import images from "../Utils";
import Example from "./Example";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { projects } = useStateContext();

  console.log(id);

  const project = projects[id];

  return (
    <div className="min-h-screen w-full bg-black text-white font-poppins text-3xl p-10 pt-20">
      <h1 className="text-9xl font-semibold">{project.title}</h1>
      <hr className="my-5" />
      <p className="text-md">{project.description}</p>
      <button
        onClick={() => navigate(-1)}
        className="bg-orange-500 px-5 py-2 rounded-full text-lg font-bold mt-10 flex items-center gap-3"
      >
        <FiArrowLeft />
        Go Back
      </button>
      <div className="bg-red-500 w-full h-screen my-10 ">
        <img className="w-full h-full object-cover" src={project.link}  alt={project.id} />
      </div>
      <Example />
    </div>
  );
};

export default ProjectDetails;
