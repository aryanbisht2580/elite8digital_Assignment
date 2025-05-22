import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Rain from "../Components/Rain";
import "./Home.css"; 
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const Home = () => {
  const navigate = useNavigate();
  const heading = "Design. Code. Create.";
  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Re-enable scrolling on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="Outerdiv relative min-h-screen w-full bg-gradient-to-br overflow-hidden flex items-center justify-center px-6">
      
      <Rain />

      <motion.div
        className="absolute w-[300px] h-[300px] opacity-30 top-[-100px] left-[-100px] blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[200px] h-[200px]  rounded-full opacity-30 bottom-[-80px] right-[-80px] blur-2xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="z-10 max-w-4xl text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          {heading.split(" ").map((word, idx) => (
            <motion.span
              key={idx}
              variants={wordVariants}
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p variants={wordVariants} className="text-lg md:text-xl text-white mb-10">
          I craft digital experiences through clean code and creative design. Explore
          my work, learn about me, or drop a message.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/home/work")}
          className="px-8 py-4 bg-red-100 text-white rounded-full text-lg font-semibold transition-shadow shadow-md hover:shadow-xl"
        >
          Explore My Projects
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Home;
