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
    title: "Software Engineer",
    company: "Shenzhen Tianlanse Software Service Ltd.",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "AUGUST 2016 - APRIL 2019",
  },
  {
    title: "Software Engineer",
    company: "Nanjing Asiainfo Software Ltd.",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "JULY 2019 - MAY 2021",
  },
  {
    title: "Software Engineer",
    company: "TD SYNNEX Information Technologies Ltd.",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "SEPTEMBER 2021 - AUGUST 2022",
  },
] as const;

export const projectsData = [
  {
    title: "Shi-Portfolio",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind", "Vercel"],
    imageUrl: imgPortfolio,
  },
  {
    title: "LLM-Vector-Database-Integration",
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
    title: "Personal-Blog",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["java", "javascript", "React", "MariaDB", "AWS-EC2", "SpringBoot"],
    imageUrl: imgBlog,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
