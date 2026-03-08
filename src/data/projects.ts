import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Client-Project-Resource",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "Monaco Editor", "Vercel"],
    image: {
      LIGHT: "/images/projects/homepage.png",
      DARK: "/images/projects/homepage.png",
    },
    style: {
      width: "100px", // Set desired width
      height: "100px", // Set desired height
      padding: "10px", // Set desired padding
    },
  },
  {
    index: 1,
    title: "CropIntel",
    href: "/projects",
    tags: [
      "Flask",
      "Python",
      "Machine Learning",
      "CNN",
      "Random Forest",
      "SVM",
      "Pandas",
    ],
    image: {
      LIGHT: "/images/projects/crophome.png",
      DARK: "/images/projects/crop.png",
    },
    style: {
      width: "100px",
      height: "100px",
      padding: "10px",
    },
  },
  {
    index: 2,
    title: "Quick Rent",
    href: "/projects",
    tags: ["html", "css", "javascript"],
    image: {
      LIGHT: "/images/projects/gadget1.png",
      DARK: "/images/projects/gadget1.png",
    },
    style: {
      width: "100px",
      height: "100px",
      padding: "10px",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Client-Project-Resource",
    favicon: "/images/projects/homepage.png",
    imageUrl: [
      "/images/projects/clientpage.png",
      "/images/projects/homepage.png",
    ],
    description:
      "A client project resource management application. Made using Nextjs, Tailwindcss and Monaco Editor.",
    sourceCodeHref:
      "https://github.com/Luckwin-subinaya/Client-Project_Resource.git",
  
  },
  {
    name: "V-Strong Gym-website",
    favicon: "/images/projects/gym2.png",
    imageUrl: [
      "/images/projects/gym2.png",
      "/images/projects/gym1.png",
      "/images/projects/gym3.png",
    ],
    description:
      " Designed and developed a gym website with admin functionalities to add, edit, and manage members and to generate an invoice and automate it to send it to members’ WhatsApp",
    sourceCodeHref: "https://github.com/Luckwin-subinaya/gym.git",
  },
  {
    name: "AI Crop Prediction",
    favicon: "/images/projects/crophome.png",
    imageUrl: [
      "/images/projects/crop.png",
      "/images/projects/cropp.png",
      "/images/projects/croppp.png",
    ],
    description:
      "Crop Recommendations: ML model suggests best crops based on soil/environmental data.It is a small Flask-based project that recommends crops, fertilizers and pesticides using trained models and CSV datasets.",
    sourceCodeHref: "https://github.com/Luckwin-subinaya/crop-prediction.git",
    liveWebsiteHref: "https://vstrongfitness.in/",
  },
  {
    name: "Quick Rent",
    favicon: "/images/projects/gadgetlogo.png",
    imageUrl: [
      "/images/projects/gadget1.png",
      "/images/projects/gadget2.png",
      "/images/projects/gadget3.png",
    ],
    description:
      "A gadget rental website with a landing page and admin functionalities. Built using HTML, CSS, and JavaScript.",
    sourceCodeHref: "https://github.com/Luckwin-subinaya/quick_rent.git",
    liveWebsiteHref: "https://quickrentalgadgets.netlify.app/",
  },
  {
    name: "My portfolio",
    favicon: "/images/projects/portfolio1.png",
    imageUrl: [
      "/images/projects/portfolio1.png",
      "/images/projects/portfolio2.png",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/Luckwin-subinaya/portfolio-v2.git",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
];
