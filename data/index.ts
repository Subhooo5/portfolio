import javascript from "../assets/tech/javascript.png";
import typescript from "../assets/tech/typescript.png";
import html from "../assets/tech/html.png";
import css from "../assets/tech/css.png";
import reactjs from "../assets/tech/reactjs.png";
import redux from "../assets/tech/redux.png";
import tailwind from "../assets/tech/tailwind.png";
import nodejs from "../assets/tech/nodejs.png";
import mongodb from "../assets/tech/mongodb.png";
import figma from "../assets/tech/figma.png";
import cpp from "../assets/tech/cpp.png";
import python from "../assets/tech/python.png";
import java from "../assets/tech/java.png";
import gcp from "../assets/tech/gcp.png";
import github from "../assets/tech/github.png";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" }
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
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
    title: "Currently diving deeper into the realms of ML.",
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
    title: "Hirelytics - AI Resume Analyzer",
    des: "It evaluates resumes based on tone, content, structure, and skills, providing ATS score and suggestions.",
    img: "/p2.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/pu.png", "/vite.png"],
    link: "https://hirelytics-eight.vercel.app/",
  },
  {
    id: 2,
    title: "Droply - A Safe & Secure Cloud File Storage",
    des: "Modern cloud storage solution designed to simplify file management with speed, privacy, and accessibility.",
    img: "/p1.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/pgsql.png", "/dr.png"],
    link: "https://droply-woad.vercel.app/",
  },
  {
    id: 3,
    title: "LogIT",
    des: "A note-taking web app that lets users create, edit, and manage codes or text.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://log-it-pi.vercel.app/",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Subhooo5"
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/SiMpL36969",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/subhodeep-chatterjee-78210828b/",
  },
];

export const technologies = [
  { name: "HTML 5", icon: html.src },
  { name: "CSS 3", icon: css.src },
  { name: "JavaScript", icon: javascript.src },
  { name: "TypeScript", icon: typescript.src },
  { name: "React JS", icon: reactjs.src },
  { name: "Redux Toolkit", icon: redux.src },
  { name: "Tailwind CSS", icon: tailwind.src },
  { name: "Node JS", icon: nodejs.src },
  { name: "MongoDB", icon: mongodb.src },
  { name: "github", icon: github.src },
  { name: "figma", icon: figma.src },
  { name: "gcp", icon: gcp.src },
  { name: "cpp", icon: cpp.src },
  { name: "java", icon: java.src },
  { name: "python", icon: python.src },
];