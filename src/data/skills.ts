import { SiExpress, SiPrisma, SiNextdotjs } from "react-icons/si";
import { ReactRouterDomIcon } from "@/components/icons";
import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";
import C from "@/public/icons/cprogramming.svg";
import java from "@/public/icons/java.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";

import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import MuiSvg from "@/public/icons/mui.svg";
import ViteSvg from "@/public/icons/vite.svg";

// Backend
import NodejsSvg from "@/public/icons/nodejs.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import sql from "@/public/icons/sql.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import Github from "@/public/icons/github.svg";
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
        percentage: 95,
      },
      {
        name: "CSS",
        icon: CsssSvg,
        percentage: 90,
      },
      {
        name: "C",
        icon: C,
        percentage: 60,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
        percentage: 92,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
        percentage: 85,
      },
      {
        name: "Python",
        icon: PythonSvg,
        percentage: 80,
      },
      {
        name: "Java",
        icon: java,
        percentage: 70,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "Reactjs",
        icon: ReactjsSvg,
        percentage: 90,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
        percentage: 85,
      },
      {
        name: "React Router Dom",
        icon: ReactRouterDomIcon,
        percentage: 80,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
        percentage: 88,
      },
      {
        name: "MUI",
        icon: MuiSvg,
        percentage: 70,
      },
      {
        name: "Vite",
        icon: ViteSvg,
        percentage: 60,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Nodejs",
        icon: NodejsSvg,
        percentage: 85,
      },
      {
        name: "Express",
        icon: SiExpress,
        percentage: 80,
      },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
        percentage: 75,
      },
      {
        name: "SQL",
        icon: sql,
        percentage: 70,
      },
      {
        name: "Prisma",
        icon: SiPrisma,
        percentage: 65,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
        percentage: 90,
      },
      {
        name: "GitHub",
        icon: Github,
        percentage: 90,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
        percentage: 80,
      },
    ],
  },
];
