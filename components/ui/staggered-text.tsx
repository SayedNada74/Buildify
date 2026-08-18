"use client";

import { motion } from "framer-motion";

interface StaggeredTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function StaggeredText({ text, className = "", delay = 0 }: StaggeredTextProps) {
  // Split the text into words
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
    },
  };

  return (
    <motion.span
      style={{ display: "inline-flex", flexWrap: "wrap", gap: "0.2em", overflow: "hidden" }}
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, index) => (
        <motion.span style={{ display: "inline-block" }} variants={child} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}
