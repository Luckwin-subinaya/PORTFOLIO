export type AchievementCategory =
  | "Hackathons & Symposium"
  | "Sports"
  | "Events Organised";

export interface Achievement {
  title: string;
  description: string;
  date: string;
  level: string;
  category: AchievementCategory;
  images: string[];
}

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "K.S.R College of Engineering, Namakkal – Paper Presentation",
    date: "Nov 2023",
    level: "Inter-college",
    category: "Hackathons & Symposium",
    description:
      "Won first place in a competitive level hackathon, presented a technical paper, on crop disease detection using machine learning, demonstrating research and communication skills.",
    images: ["/images/achievements/ksr.png", "/images/achievements/ksr2.png"],
  },
  {
    title: "Mepco Schlenk Engineering College – Idea Presentation",
    date: "Feb 2024",
    level: "Inter-college",
    category: "Hackathons & Symposium",
    description:
      "Presented an innovative idea, focusing on sustainable agriculture, showcasing creativity and problem-solving abilities.",
    images: [
      "/images/achievements/mepco.png",
      "/images/achievements/mepco2.png",
    ],
  },
  {
    title: "Thiagarajar College of Engineering, Madurai – Coding Contest",
    date: "Mar 2025",
    level: "Inter-college",
    category: "Hackathons & Symposium",
    description:
      "Competed in coding challenges, improving logical and problem-solving skills.",
    images: ["/images/achievements/tce1.png"],
  },
  {
    title:
      "Selected in Pragathi path to future by Infosys Springboard Cohort 4",
    date: "Jan 2025",
    level: "National",
    category: "Hackathons & Symposium",
    description:
      "Selected for a prestigious national program by Infosys, demonstrating commitment to learning and professional growth in technology.",
    images: ["/images/achievements/infosys.png"],
  },
  {
    title: "VIT Chennai – 24-Hour Hackathon",
    date: "Feb 2025",
    level: "National",
    category: "Hackathons & Symposium",
    description:
      "Developed a working solution under time constraints in a team environment.",
    images: ["/images/achievements/vit.png"],
  },
  {
    title: "Periyar Maniammai Institute – TNWISE Women Hackathon",
    date: "Apr 2025",
    level: "National",
    category: "Hackathons & Symposium",
    description: "Participated in a national-level women-focused hackathon.",
    images: ["/images/achievements/tnwise.png"],
  },
  {
    title: "District Level basketball Tournament",
    date: "jun 2022",
    level: "School",
    category: "Sports",
    description:
      "Competed in an inter-school sports event, strengthening teamwork and competitive focus.",
    images: ["/images/achievements/school.png"],
  },
  {
    title: "District Level basketball Tournament",
    date: "jun 2024",
    level: "College",
    category: "Sports",
    description:
      "Captain of the team, Competed in an inter-college sports event, strengthening teamwork and competitive focus.",
    images: ["/images/achievements/college.png"],
  },
  {
    title: "DSA Workshop Organizer",
    date: "Jan 2025",
    level: "College",
    category: "Events Organised",
    description:
      "Organised a workshop to introduce students to Data Structures and Algorithms.Practical sessions and coding challenges enhanced participants' problem-solving skills.",
    images: ["/images/achievements/dsa.png"],
  },
  {
    title: "Domain based learningn seminar",
    date: "Jul 2025",
    level: "College",
    category: "Events Organised",
    description:
      "Organised a seminar to discuss domain-specific learning topics for students .",
    images: ["/images/achievements/domain.png"],
  },
];
