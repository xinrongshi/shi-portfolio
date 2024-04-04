"use client";
import Image from "next/image";
import portrait from "@/public/image.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="scroll-mt-[100rem] mb-28 max-w-[50rem] text-center sm:mb-0"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: [0, 1, 0.5, 1, 0.7, 1, 0.9, 1] }}
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
        <span className="font-bold">Hey</span> there!{" "}
        <motion.span
          className=""
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            delay: 0.5,
            duration: 1.7,
          }}
        >
          👋
        </motion.span>{" "}
        I'm <span className="font-bold">Lexi</span>, a seasoned Software
        Engineer with <span className="font-bold"> 7+ years</span> of
        experience. From mastering
        <span className="font-bold"> backend </span>intricacies to seamlessly
        tackling <span className="font-bold">frontend </span>challenges, I've
        got you covered. Let's <span className="font-bold">connect</span> and
        build something awesome <span className="font-bold">together</span>! 🚀
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none
          focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          className="group bg-white text-gray-700 px-7 py-3 flex items-center gap-2 rounded-full outline-none
          focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10"
          href="/public/Lexi-Shi-CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.35rem]
          focus:scale-[1.2] hover:text-gray-950 hover:scale-[1.2] active:scale-105 transition cursor-pointer border border-black/10"
          href="https://www.linkedin.com/in/xinrong-shi/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.35rem] 
          focus:scale-[1.2] hover:text-gray-950 hover:scale-[1.2] active:scale-105 transition cursor-pointer border border-black/10"
          href="https://github.com/xinrongshi"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
