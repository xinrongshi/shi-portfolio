import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import imgPortfolio from "@/public/portfolio.jpg";
import imgBlog from "@/public/blog.jpg";
import imgLLM from "@/public/LLM-vectorDatabase.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [

  {
    title: "Master’s Degree (First Class Honours) / Computer And Information Sciences",
    company: "Auckland University of Technology",
    description:
      "During my pursuit of a Master's degree in Computer and Information Sciences, I focused primarily on enriching my knowledge in the field of artificial intelligence (AI). This period of learning was filled with challenges and opportunities for growth, allowing me to develop a deeper understanding of various aspects of AI.",
    icon: React.createElement(LuGraduationCap),
    date: "JULY 2022 - DECEMBER 2023",
  },
  {
    title: "Software Engineer",
    company: "TD SYNNEX Information Technologies Ltd. (U.S.-based company ranked No. 215 on the 2023 FORTUNE Global 500 List)",
    description:
      "In this project, I focus on developing data processing functionalities (server-side, Java) and automating web page interactions (client-side, Python) within Robotic Process Automation (RPA).",
    icon: React.createElement(CgWorkAlt),
    date: "SEPTEMBER 2021 - AUGUST 2022",
  },
  {
    title: "Software Engineer",
    company: "Nanjing Asiainfo Software Ltd.",
    description:
      "In response to the latest OSS domain specifications, I spearheaded the upgrade of the PG module, achieving a 20% reduction in project delivery times through efficient time management and clear requirement documentation. ",
    icon: React.createElement(CgWorkAlt),
    date: "JULY 2019 - MAY 2021",
  },
  {
    title: "Software Engineer",
    company: "Shenzhen Tianlanse Software Service Ltd.",
    description:
      "As a key developer, I've significantly impacted diverse projects, leading the development of the equipment management module in the production management backend system with a 20% improvement in query speed.",
    icon: React.createElement(CgWorkAlt),
    date: "AUGUST 2016 - APRIL 2019",
  },

] as const;

export const projectsData = [
  {
    title: "Portfolio",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Vercel"],
    imageUrl: imgPortfolio,
  },
  {
    title: "LLM&VectorDatabase Integration",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: [
      "AI",
      "GPT-3.5-turbo-16k",
      "Python",
      "vector database",
      "Elasticsearch",
      "LangChain",
    ],
    imageUrl: imgLLM,
  },
  {
    title: "Personal Blog",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["java", "javascript", "React", "MariaDB", "AWS-EC2", "SpringBoot"],
    imageUrl: imgBlog,
  },
] as const;

export const skillsData = [
  "JAVA",  
  "Python",
  "JavaScript",
  "TypeScript",
  "AWS",
  "MySQL",
  "MariaDB",
  "Redis",
  "MongoDB",
  "ElasticSearch",
  "HTML",
  "CSS",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Jenkins",
  "Confluence",
  "Tailwind",
  "Framer Motion",
] as const;
