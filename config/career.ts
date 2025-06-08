import { ValidSkills } from "./constants";

export interface CareerExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const careerExperiences: CareerExperienceInterface[] = [
  {
    id: "tech-intern",
    position: "Tech Intern",
    company: "Airx",
    location: "Gurugram, India",
    startDate: new Date("2024-02-10"),
    endDate: new Date("2024-04-15"),
    description: [
      "Their platform uses artificial intelligence to significantly reduce booking and planning time—claiming around 500,000 hours saved and a reported 30% cost reduction",
      "Upcoming features include decentralized travel insurance verification and other blockchain-backed tools, though the site is currently undergoing an update.",
      "They highlight collaborations (e.g., with Microsoft for Start‑ups and Mercury Bank) as a pillar for delivering innovative solutions.",
    ],
    achievements: [
      "Collaborated with design and development teams to ensure pixel-perfect UI across 10+ pages by cross-referencing Figma prototypes with live builds.",
      "Developed and maintained 20+ backend API routes, streamlining data fl ow and improving overall system performance.",
    ],
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Figma"],
    companyUrl: "https://www.airx.me/",
    logo: "/career/airx-logo.png",
  },
];
