export const navItems = [
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "learning", label: "Learning", href: "#learning" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const sectionMeta = {
  hero: { number: "01", label: "Hero" },
  about: { number: "02", label: "About" },
  skills: { number: "03", label: "Skills" },
  projects: { number: "04", label: "Projects" },
  experience: { number: "05", label: "Experience" },
  learning: { number: "06", label: "New Learnings" },
  contact: { number: "07", label: "Contact" },
};

export const themes = [
  {
    id: "emerald",
    label: "Emerald",
    color: "#02c78c",
    tokens: {
      accent: "#02c78c",
      accentSoft: "#00a775",
      accentContrast: "#02100b",
      accentRgb: "2 199 140",
      bg: "#040907",
      sectionBg: "#0d1c15",
      panel: "#101f18",
      panelSoft: "#12231b",
      fieldBg: "#0b1712",
      line: "rgba(300, 280, 108, 0.82)",
      lineSoft: "rgba(35, 63, 53, 0.48)",
      gridLine: "rgba(255, 255, 255, 0.018)",
      headerBg: "rgba(3, 6, 5, 0.94)",
      ghostBg: "rgba(9, 18, 14, 0.58)",
      statsBg: "rgba(8, 14, 11, 0.54)",
      tickerBg: "rgba(9, 14, 12, 0.88)",
    },
  },
  {
    id: "gold",
    label: "Gold",
    color: "#d7b84f",
    tokens: {
      accent: "#d7b84f",
      accentSoft: "#b89732",
      accentContrast: "#110e03",
      accentRgb: "215 184 79",
      bg: "#090806",
      sectionBg: "#15130d",
      panel: "#1b180f",
      panelSoft: "#201d14",
      fieldBg: "#100f0a",
        line: "rgba(390, 160, 78, 0.78)",
      lineSoft: "rgba(137, 112, 43, 0.36)",
      gridLine: "rgba(215, 184, 79, 0.032)",
      headerBg: "rgba(5, 5, 4, 0.94)",
      ghostBg: "rgba(18, 15, 9, 0.62)",
      statsBg: "rgba(18, 15, 9, 0.58)",
      tickerBg: "rgba(12, 11, 8, 0.9)",
    },
  },
  {
    id: "blue",
    label: "Blue",
    color: "#5a83f7",
    tokens: {
      accent: "#5a83f7",
      accentSoft: "#3867df",
      accentContrast: "#020816",
      accentRgb: "90 131 247",
      bg: "#05070d",
      sectionBg: "#10141f",
      panel: "#151b2a",
      panelSoft: "#182033",
      fieldBg: "#0b101c",
      line: "rgba(75, 109, 199, 0.62)",
      lineSoft: "rgba(75, 109, 199, 0.34)",
      gridLine: "rgba(90, 131, 247, 0.032)",
      headerBg: "rgba(3, 5, 8, 0.94)",
      ghostBg: "rgba(10, 14, 24, 0.62)",
      statsBg: "rgba(10, 14, 24, 0.58)",
      tickerBg: "rgba(7, 9, 14, 0.9)",
    },
  },
  {
    id: "violet",
    label: "Violet",
    color: "#7657ff",
    tokens: {
      accent: "#7657ff",
      accentSoft: "#5f40e8",
      accentContrast: "#08031b",
      accentRgb: "118 87 255",
      bg: "#08070c",
      sectionBg: "#15141b",
      panel: "#1a1821",
      panelSoft: "#1f1e27",
      fieldBg: "#111018",
      line: "rgba(118, 87, 255, 0.58)",
      lineSoft: "rgba(118, 87, 255, 0.31)",
      gridLine: "rgba(118, 87, 255, 0.036)",
      headerBg: "rgba(5, 5, 7, 0.95)",
      ghostBg: "rgba(18, 16, 24, 0.62)",
      statsBg: "rgba(20, 18, 27, 0.62)",
      tickerBg: "rgba(11, 10, 15, 0.9)",
    },
  },
  {
    id: "orange",
    label: "Orange",
    color: "#ff7f2a",
    tokens: {
      accent: "#ff7f2a",
      accentSoft: "#df6519",
      accentContrast: "#170801",
      accentRgb: "255 127 42",
      bg: "#0a0604",
      sectionBg: "#17100b",
      panel: "#1d140e",
      panelSoft: "#241810",
      fieldBg: "#120c08",
      line: "rgba(185, 91, 31, 0.58)",
      lineSoft: "rgba(185, 91, 31, 0.34)",
      gridLine: "rgba(255, 127, 42, 0.034)",
      headerBg: "rgba(6, 4, 3, 0.94)",
      ghostBg: "rgba(19, 11, 7, 0.62)",
      statsBg: "rgba(20, 12, 8, 0.58)",
      tickerBg: "rgba(13, 8, 5, 0.9)",
    },
  },
];

export const profile = {
  firstName: "Amit",
  lastName: "Kaintura",
  initials: ["A", "K"],
  role: "Frontend Developer",
  company: "Verve Tech",
  email: "kainturaamit862@gmail.com",
  location: "Devprayag, Uttarakhand",
  linkedin: "",
  github: "",
  resume: `${import.meta.env.BASE_URL}Amit_Kaintura_Resume.pdf`,
};

export const stats = [
  { value: "1", label: "Year Frontend Experience" },
  { value: "2", label: "Enterprise Products" },
  { value: "5+", label: "Product Modules" },
  { value: "10+", label: "Core Technologies" },
];

export const heroStats = [
  { value: "1", label: "Year Exp" },
  { value: "2", label: "Products" },
  { value: "infinity", label: "Curiosity" },
];

export const skillTags = [
  "React.js",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "shadcn/ui",
  "Redux Toolkit",
  "Zustand",
  "REST APIs",
  "Axios",
  "Chart Libraries",
  "Drag & Drop",
  "Cookie Auth",
  "NestJS",
  "Prisma",
  "PostgreSQL",
  "Mongoose",
  "Responsive Design",
  "Web Performance",
];

export const skills = [
  {
    group: "Frontend",
    filled: true,
    items: [
      ["React.js", 95],
      ["Next.js", 90],
      ["TypeScript", 84],
      ["JavaScript (ES6+)", 88],
      ["Tailwind CSS / shadcn", 92],
    ],
  },
  {
    group: "State, APIs & Auth",
    items: [
      ["Redux Toolkit", 86],
      ["Zustand", 84],
      ["Context API", 84],
      ["REST APIs / Axios", 90],
      ["Cookie-based JWT Auth", 78],
    ],
  },
  {
    group: "Backend Foundations",
    items: [
      ["NestJS", 70],
      ["CRUD API Design", 76],
      ["Mongoose / MongoDB", 70],
      ["Prisma ORM", 68],
      ["PostgreSQL", 66],
    ],
  },
  {
    group: "UI Engineering & Tools",
    filled: true,
    items: [
      ["Responsive UI", 92],
      ["Charts & Data UI", 84],
      ["Drag-and-Drop UI", 80],
      ["Git & GitHub", 86],
      ["Postman", 82],
    ],
  },
];

export const projects = [
  {
    num: "01",
    eyebrow: "Survey & Campaign Platform",
    title: "Origo Survey Platform",
    text: "Enterprise survey product with influencer and client portals, AI-assisted survey creation, analytics, and developer tools.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux Toolkit", "REST APIs"],
    status: "Professional Work",
    livePreviewUrl: "#contact",
    caseStudy: {
      summary:
        "A multi-portal survey and campaign platform built for clients, influencers, and developer-facing workflows.",
      context:
        "At Verve Tech, I contributed as a frontend developer across several production modules, working closely with backend and product teams.",
      problem:
        "The product needed distinct, responsive workflows for influencer onboarding, campaign management, survey analytics, AI-based survey creation, and secure developer access.",
      solution:
        "Built reusable Next.js and React interfaces, managed shared state with Redux Toolkit, integrated REST APIs, and delivered role-aware modules using TypeScript and Tailwind CSS.",
      impact: [
        "Developed the Influencer Portal for onboarding, promotions, and campaign workflows",
        "Built the Client Portal for campaign management and survey analytics",
        "Implemented AI-based survey creation and a Data Enrichment module",
        "Created developer tools for API key management and secure access control",
      ],
    },
  },
  {
    num: "02",
    eyebrow: "CA Practice Management",
    title: "Sole Practice Application",
    text: "A dynamic CA practice product with API-driven workflows, dashboards, third-party integrations, and secure cookie-based authentication.",
    tags: ["React", "Next.js", "TypeScript", "Zustand", "Charts", "Drag & Drop", "REST APIs", "Cookie Auth"],
    status: "In Progress",
    livePreviewUrl: "#contact",
    caseStudy: {
      summary:
        "A frontend-heavy practice management application designed around the day-to-day workflows of chartered accountants.",
      context:
        "I work as the frontend developer responsible for translating product requirements and backend capabilities into reliable, easy-to-use modules.",
      problem:
        "The application brings together complex practice workflows, data-heavy screens, third-party services, and protected user sessions in one consistent interface.",
      solution:
        "Build dynamic React and Next.js UI, integrate APIs and third-party services, manage client state with Zustand, and use charting and drag-and-drop libraries for interactive workflows. Authentication is handled through secure cookie-based access and refresh token flows.",
      impact: [
        "Delivered reusable, API-driven screens for evolving product requirements",
        "Created clear dashboards and data visualizations with chart libraries",
        "Implemented interactive drag-and-drop experiences for complex workflows",
        "Integrated protected frontend flows with cookie-based authentication",
      ],
    },
  },
];

export const workHistory = [
  {
    role: "Software Developer — Frontend",
    period: "Aug 2025 - Present",
    type: "Full-Time",
    company: "Verve Tech",
    bullets: [
      "Develop scalable frontend applications using Next.js, React, TypeScript, and Tailwind CSS.",
      "Build reusable UI components and data-heavy modules with shadcn/ui, charting, and drag-and-drop libraries.",
      "Manage application state using Redux Toolkit, Zustand, and Context API based on product needs.",
      "Integrate REST APIs and third-party services while collaborating closely with backend and product teams.",
      "Own frontend modules from requirements and implementation through testing and production delivery.",
    ],
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Zustand", "REST APIs"],
  },
];

export const education = [
  {
    title: "Master of Computer Applications (MCA)",
    school: "Shri Guru Ram Rai University (SGRRU), Dehradun",
    period: "2021 - 2023",
    detail: "CGPA: 8.0",
  },
];

export const certifications = [];

export const learning = [
  {
    mark: "triangle",
    title: "Advanced Next.js",
    text: "Going deeper on server rendering, caching, performance, and scalable frontend architecture.",
    type: "Frontend Architecture",
  },
  {
    mark: "leaf",
    title: "NestJS Architecture",
    text: "Building structured REST APIs with modules, controllers, services, validation, and clean error handling.",
    type: "Backend",
  },
  {
    mark: "puzzle",
    title: "Secure Authentication",
    text: "Strengthening access and refresh token flows, HTTP-only cookies, guards, and authorization patterns.",
    type: "Security",
  },
  {
    mark: "circle",
    title: "Prisma & PostgreSQL",
    text: "Designing relational models and building dependable CRUD workflows with Prisma ORM.",
    type: "Database",
  },
  {
    mark: "cloud",
    title: "Mongoose & MongoDB",
    text: "Practising schema design, validation, relationships, and query patterns for document databases.",
    type: "Database",
  },
  {
    mark: "diamond",
    title: "Frontend Performance",
    text: "Improving render behaviour, bundle size, data fetching, and perceived speed in complex interfaces.",
    type: "Frontend",
  },
];

export const tickerItems = [
  "TypeScript",
  "Tailwind CSS",
  "REST APIs",
  "Zustand",
  "Cookie Auth",
  "Chart Libraries",
  "Drag & Drop",
  "Web Performance",
  "React.js",
  "Next.js",
  "NestJS",
];
