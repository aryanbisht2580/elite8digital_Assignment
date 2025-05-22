import React from "react";
import { motion } from "framer-motion";

const raindropCount = 50;

const Raindrop = ({ delay, x }) => (
  <motion.div
    style={{
      position: "absolute",
      top: "-10px",
      left: `${x}%`,
      width: "2px",
      height: "20px",
      background: "rgba(255,255,255,0.6)",
      borderRadius: "50%",
      filter: "blur(0.5px)",
      pointerEvents: "none",
    }}
    animate={{ y: ["-10px", "110vh"] }}
    transition={{
      duration: 1.5,
      ease: "linear",
      repeat: Infinity,
      repeatDelay: delay,
      delay,
    }}
  />
);

const Rain = () => {
  const drops = Array.from({ length: raindropCount }).map((_, i) => {
    const delay = Math.random() * 2;
    const x = Math.random() * 100;
    return <Raindrop key={i} delay={delay} x={x} />;
  });

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {drops}
    </div>
  );
};


export default Rain;
