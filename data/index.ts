import javascript from "../assets/tech/javascript.png";
import typescript from "../assets/tech/typescript.png";
import reactjs from "../assets/tech/reactjs.png";
import mongodb from "../assets/tech/mongodb.png";
import aws from "../assets/tech/aws.png";
import cpp from "../assets/tech/cpp.png";
import python from "../assets/tech/python.png";
import java from "../assets/tech/java.jpg";
import nextjs from "../assets/tech/next.png";
import go from "../assets/tech/go.png";
import express from "../assets/tech/express.png";
import postgres from "../assets/tech/postgres.png";
import supabase from "../assets/tech/supabase.webp";
import docker from "../assets/tech/docker.png";
import postman from "../assets/tech/postman.png";
import github from "../assets/tech/github.png";


export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
  { name: "Resume", link: "https://drive.google.com/file/d/1vvJLK8pk-RioVCWO0ODyzP7h299RRedl/view?usp=sharing"}
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize Client Collaboration, fostering Open Communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with different time zones",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Tech Stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech Enthusiast with a passion for Development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently diving deeper into the realms of Cloud, System Design & Open Source.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Recoup",
    des: "An AI agent platform that detects revenue at risk across payments, diagnoses each case, and executes a governed recovery.",
    img: "/p1.png",
    iconLists: ["/next.svg", "/tailwind.png", "/openai.webp", "/ts.svg"],
    link: "recoup-rzp.vercel.app/",
    titleLink: "https://github.com/Subhooo5/recoup"
  },
  {
    id: 2,
    title: "Streakforge",
    des: "A high-performance Next.js API that transforms raw GitHub contribution data into premium, 3D isometric monoliths.",
    img: "/p2.png",
    iconLists: ["/next.svg", "/github.png", "/ts.svg", "/mongodb.png"],
    link: "streakforge-one.vercel.app",
    titleLink: "https://github.com/Subhooo5/StreakForge"
  },
  {
    id: 3,
    title: "TaskFlow",
    des: "A modern, intuitive application designed to streamline your document processing and task management workflows.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/ts.svg", "/tailwind.png", "/firebase.webp"],
    link: "https://taskflow2.vercel.app/",
    titleLink: "https://github.com/Subhooo5/Taskflow"
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/github.png",
    link: "https://github.com/Subhooo5"
  },
  {
    id: 2,
    img: "/X.jpg",
    link: "https://x.com/SiMpL36969",
  },
  {
    id: 3,
    img: "/LinkedIn.png",
    link: "https://www.linkedin.com/in/subhodeep-chatterjee-78210828b/",
  },
  {
    id: 4,
    img: "/lc.png",
    link: "https://leetcode.com/u/s1mpL33/",
  }
];

export const technologies = [
  { name: "java", icon: java.src },
  { name: "python", icon: python.src },
  { name: "cpp", icon: cpp.src },
  { name: "JavaScript", icon: javascript.src },
  { name: "TypeScript", icon: typescript.src },
  { name: "Go", icon: go.src },
  { name: "React JS", icon: reactjs.src },
  { name: "Next JS", icon: nextjs.src },
  { name: "Express JS", icon: express.src },
  { name: "MongoDB", icon: mongodb.src },
  { name: "Postgres", icon: postgres.src },
  { name: "Supabase", icon: supabase.src },
  { name: "GitHub", icon: github.src },
  { name: "Docker", icon: docker.src },
  { name: "Postman", icon: postman.src },
  { name: "AWS", icon: aws.src }
];