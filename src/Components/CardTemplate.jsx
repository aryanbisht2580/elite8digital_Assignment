// CardTemplate.jsx
import React from "react";

const CardTemplate = ({ title, description, image, techStack }) => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-6 p-6 rounded-2xl bg-[#1a1a1a] shadow-lg">
      <img src={image} alt={title} className="w-full md:w-1/2 rounded-xl cursor-pointer" />
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl font-bold ">{title}</h2>
        <p className="text-gray-300 text-justify">{description}</p>
        <div className="flex flex-wrap gap-2">
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
