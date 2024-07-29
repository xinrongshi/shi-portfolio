"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[40rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <motion.p
          className="mb-3 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Hey there! 👋 I'm Lexi, a Software Engineer with a love for coding and over 7 years of experience. From mastering backend intricacies to tackling frontend challenges, I'm always eager to learn and grow.
        </motion.p>
        <motion.p
          className="mt-4 text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Outside of work, I enjoy staying active, especially with bouldering. It's a great way to relax and push my limits. Let's connect and create something amazing together! 🚀
        </motion.p>
      </div>
    </motion.section>
  );
}