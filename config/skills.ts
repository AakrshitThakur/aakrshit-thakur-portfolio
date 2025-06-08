// Import icon components for use in skill entries
import { Icons } from "@/components/common/icons";

// Define the shape of a skill object used throughout the app
export interface skillsInterface {
  name: string;          // Name of the skill or technology
  description: string;   // Brief description of the skill
  rating: number;        // Skill proficiency rating (e.g., 1-5)
  icon: any;             // Icon component representing the skill visually
}

// Unsorted array of skills with detailed descriptions, ratings, and icons
export const skillsUnsorted: skillsInterface[] = [
  {
    name: "MongoDB",
    description:
      "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents, enabling scalable and high-performance applications.",
    rating: 4,
    icon: Icons.mongodb,
  },
  {
    name: "Next.js",
    description:
      "Next.js is a React framework for building fast, scalable web applications with features like server-side rendering and static site generation.",
    rating: 4,
    icon: Icons.nextjs,
  },
  {
    name: "TypeScript",
    description:
      "TypeScript is a statically typed superset of JavaScript that adds type safety and modern features for building robust applications.",
    rating: 3,
    icon: Icons.typescript,
  },
  {
    name: "React",
    description:
      "React.js is a JavaScript library for building user interfaces using a component-based architecture and efficient virtual DOM rendering.",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "JavaScript",
    description:
      "JavaScript is a versatile, high-level programming language primarily used to create interactive and dynamic content on websites.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "Node.js",
    description:
      "Node.js is a JavaScript runtime built on Chrome's V8 engine that enables server-side development with non-blocking, event-driven architecture.",
    rating: 4,
    icon: Icons.nodejs,
  },
  {
    name: "Express.js",
    description:
      "Express.js is a minimal and flexible Node.js web application framework that provides robust features for building APIs and web servers.",
    rating: 4,
    icon: Icons.express,
  },
  {
    name: "Sockio.io",
    description:
      "Socket.IO is a JavaScript library that enables real-time, bidirectional communication between web clients and servers using WebSockets and fallback technologies.",
    rating: 3,
    icon: Icons.socketio,
  },
];

// Create a sorted version of the skills array by rating in descending order
export const skills = skillsUnsorted
  .slice() // Create a shallow copy to avoid mutating the original array
  .sort((a, b) => b.rating - a.rating); // Sort skills so highest rating comes first

// Select the top 6 highest-rated skills as featured skills
export const featuredSkills = skills.slice(0, 6);
