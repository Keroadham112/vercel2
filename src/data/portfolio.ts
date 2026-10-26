export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  title: string;
  description: string;
  highlights: string[];
  techStack: string[];
  images: ProjectImage[];
  github: string;
  demo?: string;
  featured?: boolean;
};

export const profile = {
  name: "Kerolos Adham",
  title: "Full Stack Developer (.NET & React)",
  email: "k.adham2251@gmail.com",
  github: "https://github.com/Keroadham112",
  linkedin: "https://www.linkedin.com/in/kerolos-adham-91383b324",
  image: "/profile-photo.jpg",
  cv: "/cv.pdf",
  location: "Giza, Egypt",
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
    images: [
      {
        src: "/projects/digital-twin/dashboard.webp",
        alt: "Recursive Twin dashboard with patient setup, recursive tumor forecast, 3D evolution, and AI treatment decision",
      },
    ],
    github: "https://github.com/Keroadham112/digital-twin-breast-cancer",
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
    images: [
      { src: "/projects/northstar/storefront.webp", alt: "Northstar Market storefront landing page" },
      { src: "/projects/northstar/shop.webp", alt: "Product catalog with search, category filter, and add to cart" },
      { src: "/projects/northstar/admin-dashboard.webp", alt: "Admin inventory dashboard with live metrics from the ASP.NET Core API" },
    ],
    github: "https://github.com/Keroadham112/Library-Management-System",
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
    images: [
      { src: "/projects/restaurant/home.webp", alt: "Restaurant home page with featured dishes carousel and quick categories" },
      { src: "/projects/restaurant/menu.webp", alt: "Menu page with search, sorting, price range, and tag filters" },
      { src: "/projects/restaurant/admin.webp", alt: "Admin dashboard for adding, editing, and exporting menu items" },
    ],
    github: "https://github.com/Keroadham112/restaurant-management-system",
  },
];

export const skillGroups: { title: string; skills: string[] }[] = [
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    skills: ["C#", "ASP.NET Core Web API", "Entity Framework Core", "SQL Server", "SQLite"],
  },
  {
    title: "AI & Tools",
    skills: ["AI Integration", "Machine Learning", "Git & GitHub", "Networking Fundamentals"],
  },
];

export type TimelineItem = {
  title: string;
  org: string;
  period: string;
  points: string[];
};

export const education: TimelineItem = {
  title: "B.Sc. in Computer Science",
  org: "Nile University, Egypt",
  period: "2021 – 2026",
  points: ["Senior student focused on full-stack development, AI integration, and networking."],
};

export const experience: TimelineItem[] = [
  {
    title: ".NET Full Stack Development",
    org: "Training Program",
    period: "Nov 2025",
    points: [
      "Built web applications using ASP.NET Core and SQL Server",
      "Developed RESTful APIs and handled backend logic",
    ],
  },
  {
    title: "Cybersecurity Intern",
    org: "Xpand MCS Academy, Cairo",
    period: "Aug 2025",
    points: [
      "Performed basic network analysis using Nmap and Wireshark",
      "Applied secure coding practices in backend development",
    ],
  },
  {
    title: "CCNA Training",
    org: "CLS Network Academy",
    period: "2024",
    points: [
      "Learned networking fundamentals, routing, switching, and subnetting",
      "Configured routers and switches using Packet Tracer",
    ],
  },
];

export const certifications = [
  "Cisco Certified Network Associate (CCNA)",
  ".NET Full Stack Development",
  "React 19 – Coursera",
];
