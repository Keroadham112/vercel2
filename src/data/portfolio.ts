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
      "End-to-end digital twin framework for modeling breast cancer progression, predicting treatment response, and ranking treatment strategies over time.",
    highlights: [
      "Multi-stage prediction pipeline using clinical, MRI-derived, and engineered longitudinal features",
      "Recursive temporal engine models tumor state evolution from T0 to T3 and projects future trajectories",
      "Bayesian uncertainty layer produces probability distributions, confidence intervals, and confidence scores",
      "Treatment simulation compares outcome trajectories and selects the best treatment arm",
      "Ensemble decision layer combines baseline models, temporal outputs, and Bayesian predictions",
      "Interactive visualization presents tumor trajectories, 3D animation, confidence gauges, and treatment comparison",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Longitudinal ML",
      "Bayesian Inference",
      "Treatment Simulation",
      "3D Visualization",
    ],
    github: "https://github.com/Keroadham112",
    featured: true,
  },
  {
    title: "Northstar Market",
    description:
      "Full-stack inventory management system and electronics storefront for managing products, stock, sales, and customer shopping flows.",
    highlights: [
      "Responsive storefront with product browsing, search, filters, product details, and cart persistence",
      "Admin dashboard for products, categories, suppliers, customers, purchases, and sales",
      "Role-based access with ASP.NET Core Web API, Entity Framework Core, and SQLite",
    ],
    techStack: ["React", "TypeScript", "ASP.NET Core", "EF Core", "SQLite"],
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
