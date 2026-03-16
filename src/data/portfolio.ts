export const projects = [
  {
    id: 1,
    title: "Vibexperience",
    description: "An event coordination platform designed to streamline communication and scheduling between DJs and event organizers.",
    techStack: ["Express.js", "Node.js", "MongoDB", "Mongoose", "EJS", "JavaScript" ],
    highlights: [
      "Built backend API routes for event scheduling and data management",
      "Implemented MongoDB database models using Mongoose",
      "Designed full stack architecture integrating frontend views with backend services",
      "Developed dynamic UI rendering using the EJS templating engine"
    ],
    github: "https://github.com/Maj-dot/The-Vibexperience",
    demo: "https://the-vibexperience-f7b30e48c10f.herokuapp.com/",
    category: ["Full Stack"]
  },
  {
    id: 2,
    title: "TruGrind",
    description: "A full stack fitness tracking application that allows users to log workouts, set goals, and visualize progress over time.",
    techStack: ["React", "Express", "Node.js", "MongoDB", "JWT Authentication", "Recharts"],
    highlights: [
      "Built a full stack MERN application with persistent workout tracking",
      "Implemented JWT based authentication for secure user login and session management",
      "Designed responsive React components for data input and dashboard views"
    ],
    github: "https://github.com/Maj-dot/TruGrind",
    demo: "https://trugrind-e387b848377b.herokuapp.com//",
    category: ["Full Stack"]
  },
  {
    id: 3,
    title: "CoinWatch",
    description: "A cryptocurrency tracking platform that provides real time market data and personalized watchlists for monitoring assets.",
    techStack: ["Python", "Django", "CoinGecko API", "PostgreSQL", "JavaScript", "HTML/CSS"],
    highlights: [
      "Built backend services using Django and PostgreSQL",
      "Integrated CoinGecko API to retrieve real time cryptocurrency data",
      "Implemented watchlist functionality allowing users to track selected assets", 
      "Developed dynamic search and filtering for cryptocurrency listings",
      "Collaborated with a team of developers using Git and Agile workflows"
    ],
    github: "https://github.com/ian-ruiz21/CoinWatch",
    demo: "https://coinwatch-26f35a9e73f9.herokuapp.com/",
    category: ["Full Stack", "Backend"]
  },
  {
    id: 4,
    title: "Developer Portfolio",
    description: "A responsive personal portfolio showcasing development projects, technical skills, and professional experience.",
    techStack: ["React", "Tailwind", "Tailwind CSS"],
    highlights: [
      "Built reusable UI components using React and TypeScript",
      "Implemented responsive layouts with Tailwind CSS",
      " Designed project showcase architecture for technical portfolios"
    ],
    github: "https://github.com/Maj-dot/BrittanyHerbert-Portfolio",
    demo: "",
    category: ["Portfolio"]
  }
];

export const skills = [
  {
    category: "Frontend",
    items: ["React", "Tailwind CSS", "JavaScript", "TypeScript", "HTML/CSS"]
  },
  {
    category: "Backend",
    items: ["Python", "Django", "Node.js", "Express", "REST APIs"]
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Supabase"]
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "GitHub", "Postman", "VS Code"]
  },
  {
    category: "Security & Systems",
    items: ["OWASP Security Principles", "JWT Authentication", "OAuth 2.0 Basics", "Authentication & Authorization", "Linux Command Line", "Networking Fundamentals"]
  }
];

export const experience = [
  {
    id: 1,
    title: "Software Development Projects",
    organization: "Independent Development",
    period: "2024 - Present",
    description: "Designing and building full-stack web applications while strengthening practical software engineering and security focused development skills.",
    highlights: [
      "Built projects using React, JavaScript, Python, and Django",
      "Developed applications integrating APIs, authentication, and databases like PostgreSQL and MongoDB",
      "Focused on clean UI, debugging, and maintainable code structure"
    ]
  },
  {
    id: 2,
    title: "Founder",
    organization: "Paybert LLC / DJ Madam Maj",
    period: "Ongoing",
    description: "Operating an independent business focused on event services, brand development and digital presence.",
    highlights: [
      "Developed and maintained brand websites and digital platforms",
      "Managed scheduling, logistics, and customer facing operations for events",
      "Applied technical and organizational skills to streamline workflows and enhance online presence"
    ]
  },
  {
    id: 3,
    title: "Software Engineering Immersive",
    organization: "General Assembly",
    period: "2024",
    description: "Completed a full-stack software engineering program focused on building real world web applications and strengthening programming fundamentals.",
    highlights: [
      "500+ hours of hands on coding experience in JavaScript, Python, React, and Django",
      "Built multiple full stack projects using modern web technologies and best practices",
      "Worked with Git, Agile workflows, and collaborative development practices"
    ]
  }
];

export const socialLinks = {
  github: "https://github.com/maj-dot",
  linkedin: "https://linkedin.com/in/brittany-herbert-360652333/",
  email: "dev.bherbert@gmail.com"
};
