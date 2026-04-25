export type Project = {
  title: string;
  description: string;
  highlights: string[];
  techStack: string[];
  github: string;
  demo?: string;
  featured?: boolean;
};

export type Skill = {
  name: string;
  level: number;
};

export const profile = {
  name: "Kerolos Adham",
  title: "Full Stack Developer (.NET & React)",
  email: "k.adham2251@gmail.com",
  github: "https://github.com/Keroadham112",
  linkedin: "https://www.linkedin.com/in/kerolos-adham-91383b324",
  image: "/profile-photo.jpg",
  summary:
    "Full Stack Developer with experience in building web applications using .NET and React, and integrating AI features into interactive systems.",
} as const;

export const projects: Project[] = [
  {
    title: "Digital Twin in Breast Cancer",
    description:
      "AI-powered system for intelligent simulation and 3D visualization in medical scenarios.",
    highlights: [
      "AI-powered system with 3D visualization",
      "Real-time interaction between frontend and AI model",
    ],
    techStack: ["React", "TypeScript", "3D Visualization", "AI Integration"],
    github: "https://github.com/Keroadham112",
    featured: true,
  },
  {
    title: "Maswada AI",
    description:
      "Modern React 19 application centered around responsive AI interaction and dynamic UI flows.",
    highlights: [
      "React 19 application with AI interaction",
      "Dynamic UI and responsive design",
    ],
    techStack: ["React 19", "TypeScript", "Framer Motion", "AI Features"],
    github: "https://github.com/Keroadham112",
  },
  {
    title: "Restaurant Management System",
    description:
      "Operational frontend experience for restaurant workflows, currently evolving into a full-stack system.",
    highlights: [
      "Frontend system simulating restaurant operations",
      "Being developed into full-stack using ASP.NET Core and SQL Server",
    ],
    techStack: ["React", "ASP.NET Core", "SQL Server", "System Design"],
    github: "https://github.com/Keroadham112",
  },
];

export const skillGroups: { title: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 92 },
      { name: "JavaScript", level: 88 },
      { name: "HTML/CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "C#", level: 90 },
      { name: "ASP.NET Core", level: 86 },
      { name: "SQL Server", level: 82 },
    ],
  },
  {
    title: "Tools & Other",
    skills: [
      { name: "Git & GitHub", level: 87 },
      { name: "AI Integration", level: 85 },
      { name: "Basic Networking", level: 72 },
    ],
  },
];
