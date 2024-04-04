"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView();

  console.log(inView);

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 ">
        Combining a background in Marketing with a passion for coding, I've
        ventured into the world of programming out of genuine interest. From
        self-learning Java to exploring JavaScript and beyond, I've embraced
        continuous learning, always eager to expand my skill set with new
        languages and tools.
      </p>
      <div className="mt-4">
        <p>
          Outside of work, I find joy in staying active, with a recent interest
          in bouldering catching my attention. It's a refreshing way to unwind
          and challenge myself physically and mentally. Join me on this journey
          as I blend the art of persuasion with the logic of code, navigating
          the ever-evolving landscape of technology with curiosity and
          determination.
        </p>
      </div>
    </motion.section>
  );
}
