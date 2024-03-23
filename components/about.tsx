"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 ">
        With 7+ years of experience, I specialize in versatile back-end
        development, seamlessly adapting to front-end tasks. A skilled team
        player with effective time management, I am passionate about crafting
        innovative solutions for challenges. Proactively embracing new
        technologies, I continually enhance problem-solving capabilities.
      </p>
      <p></p>
    </motion.section>
  );
}
