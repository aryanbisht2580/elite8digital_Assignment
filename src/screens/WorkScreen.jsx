import React from "react";
import { motion } from "framer-motion";
import CardTemplate from "../Components/CardTemplate";
import snapReply from "../assets/gmail.png";

const workData = [
  {
    title: "Journeys",
    description:
      "Journeys is a full-stack platform for buying and selling branded shoes. It allows users to list, browse, and securely purchase footwear. Features include Razorpay integration for smooth transactions and a dedicated admin panel for efficient order management.",
    techStack: ["HTML", "CSS", "React", "NodeJs", "BootStrap"],
    image: "https://aryan-portfolio-ejfl.onrender.com/assets/projects/journeys.png",
  },
  {
    title: "Clabble",
    description:
      "Clabble is a real-time chat application built for seamless communication. It enables users to sign in via Google, share images, text, and emojis, and stay connected using WebSocket-powered messaging. The intuitive UI makes chatting with friends or teams simple and enjoyable.",
    techStack: ["React", "FireBase", "Socket", "Tailwind"],
    image: "https://aryan-portfolio-ejfl.onrender.com/assets/projects/clabble.png",
  },
  {
    title: "Petify",
    description:
      "Petify is a React Native app where users can easily sell and adopt pets. Whether you're looking for a new pet or finding a home for one, Petify makes it simple to connect with others and ensure pets find the right homes.",
    techStack: ["React Native", "Firebase", "NodeJs"],
    image: "https://aryan-portfolio-ejfl.onrender.com/assets/projects/petify.png",
  },
  {
    title: "Snap Reply",
    description:
      "Snap Reply is a Google Chrome extension for Gmail that reduces email drafting time by an average of 5–7 minutes per email using AI-powered responses. Built with a Spring Boot backend and React frontend, it integrates Gemini API to generate intelligent, context-aware replies, improving both efficiency and accuracy.",
    techStack: ["Spring Boot", "React", "Chrome Extension", "Gemini API"],
    image: snapReply,
  },
];

const cardVariants = {
  hidden: (custom) => ({
    opacity: 0,
    x: custom % 2 === 0 ? -100 : 100,
    y: 30,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const WorkScreen = () => {
  return (
    <main className="pt-25 min-h-screen px-6 md:px-20 py-10 space-y-16 bg-gradient-to-b from-black to-gray-900">

      {/* ✅ Visible instantly */}
      <div>
        <CardTemplate
          title={workData[0].title}
          description={workData[0].description}
          techStack={workData[0].techStack}
          image={workData[0].image}
        />
      </div>

      {/* ✅ Animate on scroll */}
      {workData.slice(1).map((project, index) => (
        <motion.div
          key={index}
          custom={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <CardTemplate
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            image={project.image}
          />
        </motion.div>
      ))}
    </main>
  );
};

export default WorkScreen;
