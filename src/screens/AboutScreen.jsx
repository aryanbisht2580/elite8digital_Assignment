import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import  pic from "../assets/pic.png"; 
import Rain from "../Components/Rain";
const skills = [
  { name: "React.js", level: 90 },
  { name: "Node.js", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "MongoDB", level: 80 },
  { name: "PostgreSQL", level: 75 },
  { name: "Framer Motion", level: 80 },
  { name: "React Native", level: 70 },
  { name: "SpringBoot", level: 60 },
];

export default function AboutScreen() {

  return (
    <div className="min-h-screen  text-white p-8 mt-20">
      <Rain/>
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
 <motion.img
  src={pic}
  alt="profile"
  className="rounded-xl grayscale"
  initial={{ y: -200, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 10,
    mass: 1,
    bounce: 0.6,
  }}
/>



        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-extrabold leading-tight text-left">
            Aryan Bisht
          </h1>
          <h3 className="text-xl font-semibold text-neutral-300">
            Full Stack Developer | React & React Native Specialist
          </h3>
          <p className="text-gray-300 text-justify">
            I build modern, high-performance web and mobile applications with a focus on clean code and seamless user experience. Leveraging over two years of professional experience, I excel in React.js, Next.js, and backend databases like MongoDB and Firebase.
          </p>
          <p className="text-gray-300 text-justify">
            Currently, I’m expanding my skills by mastering animation libraries like Framer Motion and enhancing cross-platform development with React Native. I enjoy solving complex problems and turning ideas into elegant, functional products.
          </p>
          <div className="text-gray-400">
            <h4 className="font-semibold mb-2">Beyond Development</h4>
            <ul className="list-disc list-inside space-y-1 flex flex-col items-start">
              <li>Football enthusiast and team player</li>
              <li>UI/UX design admirer, always learning</li>
              <li>Instrumental music lover — a source of creativity and focus</li>
            </ul>
          </div>
        </motion.div>


      </div>

      <motion.div
        className="mt-20 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="space-y-4">
          {skills.map((skill, idx) => (
            <div key={idx}>
              <div className="flex justify-between text-sm mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full h-2 bg-gray-700 rounded-full">
                <motion.div
                  className="h-full bg-gradient-to-r from-neutral-600 to-neutral-300 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1 + idx * 0.2 }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
