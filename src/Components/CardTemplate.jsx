
import React from "react";

const CardTemplate = ({ title, description, image, techStack, url }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center md:flex-row md:items-center gap-6 p-6 rounded-2xl bg-[#1a1a1a] shadow-lg ">
      <a href={url} target="_blank" rel="noopener noreferrer" className="w-1/2 flex justify-center items-center ">
        <img
          src={image}
          alt={title}
          className="w-full md:w-3/4 rounded-xl cursor-pointer transition-transform hover:scale-105"
        />
      </a>
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-bold ">{title}</h2>
        <p className="text-gray-300 text-justify">{description}</p>
        <div className="flex flex-wrap gap-2 items-center justify-center">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-neutral-600 text-white text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardTemplate;
