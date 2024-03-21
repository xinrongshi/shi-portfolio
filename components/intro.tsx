"use client";
import React from "react";
import Image from "next/image";
import portrait from "@/public/image.png";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: [0, 1, 0.5, 1, 0.7, 1, 0.9, 1]}}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            <Image
              src={portrait}
              alt="Xinrong portrait"
              width="150"
              height="150"
              quality="50"
              priority={true}
              className="h-30 w-30 object-cover transition duration-200 transform hover:scale-110 hover:-rotate-12 sm:transform-none"
            />
          </motion.div>
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-12 px-4 text-xl font-medium !leading-[1.5] sm:text-3xl"
      >
        <span className="font-bold">Hey</span> there! <motion.span className="" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 150, delay: 0.5, duration: 1.7 }} >
            👋
          </motion.span> I'm{" "}
        <span className="font-bold">Xinrong Shi</span>, a seasoned Software
        Engineer with <span className="font-bold"> 7+ years</span> of
        experience. From mastering
        <span className="font-bold"> backend </span>intricacies to seamlessly
        tackling <span className="font-bold">frontend </span>challenges, I've
        got you covered. Let's <span className="font-bold">connect</span> and
        build something awesome <span className="font-bold">together</span>! 🚀
      </motion.p>
    </section>
  );
}
