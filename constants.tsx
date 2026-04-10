
import { Education, SkillGroup, WorkExperience, Project, Participation } from './types';

export const PERSONAL_INFO = {
  name: "MEERA FAREENA",
  title: "Aspiring AI Engineer | Full-Stack Developer | Open Source Enthusiast",
  email: "meerafareena2905@gmail.com",
  phone: "+91 75983 40237",
  linkedin: "linkedin.com/in/meera-fareena-90007a330",
  github: "github.com/Meera2906",
  resumeUrl: "https://drive.google.com/file/d/1TFKXcVb03viwg4V2i4cqkbuGSutdAiM6/view?usp=sharing",
  summary: "B.Tech student in Artificial Intelligence & Data Science with strong hands-on experience in full-stack and backend development. Proficient in building scalable REST APIs, secure authentication systems, and responsive web applications.",
  avatar: "/pfp.png"
};

export const EDUCATION: Education[] = [
  {
    school: "Sri Krishna College of Technology",
    degree: "Bachelor of Technology - Artificial Intelligence and Data Science",
    location: "Coimbatore, India",
    period: "Present - 2028",
    extra: "CGPA: 8.77"
  },
  {
    school: "Francis Xavier School",
    degree: "Primary and Higher Secondary Schooling",
    location: "Tirunelveli, India",
    period: "June 2012 - March 2024",
    extra: "Percentage: 92.4%"
  }
];

export const SKILLS: SkillGroup[] = [
  { category: "Back-end", skills: ["Python", "C++", "Java", "SQL", "MongoDB", "REST API", "SpringBoot"] },
  { category: "Front-end", skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Flutter"] },
  { category: "Platforms", skills: ["PyCharm", "VS Code", "Spyder", "Jupyter Notebook", "Github"] },
  { category: "Soft Skills", skills: ["Teamwork", "Leadership", "Critical Thinking", "Communication"] }
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    role: "WEB DEVELOPMENT INTERN",
    company: "PINNACLE LABS",
    link: "#",
    period: "April - May 2025",
    achievements: [
      "Developed an interactive, aesthetically refined calculator with smooth functionality.",
      "Executed responsive designs for all screen sizes and deployed via Vercel.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Electron.js", "Cloud AI"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Self-Evolving AI Mentor Ecosystem",
    period: "March 2026",
    link: "https://github.com/Meera2906/self-evolving-ai-mentor-ecosystem",
    description: [
      "Multi-agent AI tutoring platform that personalizes learning paths in real-time.",
      "4 specialized agents: Learner, Assessment, Strategy & Analytics collaborate dynamically.",
      "Generates adaptive quizzes via Google Gemini AI with mastery-based difficulty scaling."
    ],
    tech: ["TypeScript", "React 19", "Node.js", "Gemini AI", "SQLite", "Express"],
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=2532&auto=format&fit=crop"
  },
  {
    title: "Hustlr",
    period: "2026",
    link: "https://github.com/Meera2906/hustlr",
    description: [
      "A modern Next.js application built for the go-getter generation.",
      "Full-stack TypeScript architecture with clean, scalable module boundaries.",
      "Deployed on Vercel with responsive design and optimized performance."
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Play For Good",
    period: "April 2026",
    link: "https://github.com/Meera2906/play-for-good",
    description: [
      "Premium full-stack golf charity platform with subscriptions & monthly draw rewards.",
      "Algorithmic draw engine, Supabase RLS, winner verification & admin console.",
      "Live: play-for-good-hazel.vercel.app"
    ],
    tech: ["React", "TypeScript", "Supabase", "Tailwind CSS v4", "Vite", "Vercel"],
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Task Manager",
    period: "April 2026",
    link: "https://github.com/Meera2906/task-manager",
    description: [
      "Full-stack task management app with Laravel REST API and React frontend.",
      "Supports creating, completing, and deleting tasks with live status filtering.",
      "Decoupled architecture deployed on Railway (backend) and Vercel (frontend)."
    ],
    tech: ["Laravel", "React", "PHP", "REST API", "Railway", "Vercel"],
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "LearnNook",
    period: "April 2026",
    link: "https://github.com/Meera2906/LearnNook",
    description: [
      "AI-powered educational platform generating personalized lessons for grades 5–10.",
      "Produces real-world imagery and interactive quizzes via OpenRouter AI models.",
      "Built with FastAPI, Neon PostgreSQL, and deployed on Vercel."
    ],
    tech: ["FastAPI", "Python", "PostgreSQL", "OpenRouter AI", "React", "Vercel"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop"
  },
  {
    title: "Crop Care Coach",
    period: "March 2025",
    link: "https://github.com/Meera2906/SIH",
    description: [
      "End-to-end agriculture platform for disease detection.",
      "Implemented offline AI models for remote farm usage.",
      "Multilingual IVR voice-bot for accessible farmer support."
    ],
    tech: ["AI", "Python", "Flutter", "Twilio"],
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Visitor Risk Scoring Engine",
    period: "Nov 2025 - Present",
    link: "https://github.com/Meera2906/Visitor-Risk-Score-Engine",
    description: [
      "Built secure Spring Boot REST APIs for visitor risk assessment.",
      "Implemented JWT authentication with role-based access control.",
      "Designed scalable backend using JPA, Hibernate, MySQL, and Swagger."
    ],
    tech: ["Spring Boot", "JWT", "MySQL", "JPA"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
  },
  {
    title: "Aesthetic Calculator",
    period: "April 2025",
    link: "https://github.com/Meera2906/Calculator",
    description: [
      "A high-performance interactive calculator with a neo-brutalist UI.",
      "Features smooth animations and responsive layouts.",
      "Built as part of the Pinnacle Labs internship program."
    ],
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    image: "https://img.kwcdn.com/product/fancy/d2ff344a-8745-499d-89fc-10c49da9d476.jpg?q=80&w=2670&auto=format&fit=crop"
  }
];

export const PARTICIPATIONS: Participation[] = [
  {
    title: "SIH Hackathon | Crop Care Coach",
    team: "Team SixthSense",
    link: "#",
    period: "March 2025",
    achievements: [
      "Shortlisted (Rank 79) for developing an end-to-end agriculture platform.",
      "Developed offline AI disease detection and a multilingual IVR voice-bot."
    ]
  },
  {
    title: "SAP Hackathon | AI Ethics Validator",
    team: "Team HackOps",
    link: "#",
    period: "March 2025",
    achievements: [
      "Collaborated to develop an AI model fairness and bias evaluation tool.",
      "Gained direct exposure to industry insights on AI ethics."
    ]
  }
];
