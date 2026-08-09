
import { Education, SkillGroup, WorkExperience, Project, Participation, Certification } from './types';

export const PERSONAL_INFO = {
  name: "MEERA FAREENA",
  title: "Aspiring AI Engineer | Full-Stack Developer | Open Source Enthusiast",
  email: "meerafareena2905@gmail.com",
  phone: "+91 75983 40237",
  linkedin: "linkedin.com/in/meera-fareena-90007a330",
  github: "github.com/Meera2906",
  resumeUrl: "https://drive.google.com/file/d/1lD_INVsEYm8cKuwrxlAntYJjnxbH7iN4/view?usp=sharing",
  summary: "B.Tech student in Artificial Intelligence & Data Science with strong hands-on experience in full-stack and backend development. Proficient in building scalable REST APIs, secure authentication systems, and responsive web applications.",
  avatar: "/pfp.png"
};

export const EDUCATION: Education[] = [
  {
    school: "Sri Krishna College of Technology",
    degree: "Bachelor of Technology - Artificial Intelligence and Data Science",
    location: "Coimbatore, India",
    period: "Present - 2028",
    extra: "CGPA: 8.81"
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
  { category: "Programming",      skills: ["Python", "Java", "C++", "TypeScript", "JavaScript"] },
  { category: "Frontend",         skills: ["React.js", "Tailwind CSS", "Vite", "HTML", "CSS"] },
  { category: "Backend",          skills: ["Node.js", "Express.js", "Spring Boot", "REST APIs", "JWT Auth"] },
  { category: "Databases",        skills: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "NeonDB"] },
  { category: "Tools & Platforms",skills: ["Git", "Docker (basics)", "Swagger", "Vercel", "Render", "Jupyter"] },
  { category: "AI / ML",          skills: ["Gemini API", "Multi-Agent AI", "Scikit-learn", "Power BI"] },
];

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    role: "FULL STACK DEVELOPMENT INTERN",
    company: "COGNIFYZ TECHNOLOGIES",
    link: "https://drive.google.com/file/d/1WMpUvadpr7vxNzYoenQySa5F7feQvGZt/view?usp=drive_link",
    period: "November - December 2025",
    achievements: [
      "Completed a remote Full Stack Development internship, delivering assigned tasks with strong attention to detail.",
      "Recognized for coordination, communication, and consistent dedication across the internship period.",
    ],
    tech: ["Full-Stack Development"]
  },
  {
    role: "WEB DEVELOPMENT INTERN",
    company: "PINNACLE LABS",
    link: "https://drive.google.com/file/d/1xlZQL5GfHE-hkHZD7eXPot9PydGRxQnl/view?usp=drive_link",
    period: "April – May 2025",
    achievements: [
      "Engineered 3 production-grade web apps — calculator, developer portfolio, AI education coach — deployed to Vercel/Render; achieved sub-2s load times via Vite bundle optimisation and NeonDB serverless queries.",
      "Extended the app to a desktop Electron.js build with offline AI support — same React/TS codebase, second deployment target, zero code duplication.",
    ],
    tech: ["HTML", "CSS", "TypeScript", "Express.js", "React.js", "Electron.js", "Vite", "Gemini AI", "NeonDB"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Lumina Dental",
    period: "May 2026",
    link: "https://github.com/Meera2906/lumina-dental",
    description: [
      "Full-stack dental clinic platform with online appointment booking & automated email confirmations.",
      "Express backend saves bookings to Supabase in real time with Nodemailer SMTP confirmation flow.",
      "Multi-page React app with Framer Motion animations, React Hook Form, and mobile-responsive UI."
    ],
    tech: ["React 19", "TypeScript", "Vite", "Express.js", "Supabase", "Nodemailer", "Tailwind CSS v4"],
    image: "/lumina.png"
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
    image: "/Play.png"
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
    image: "/hustlr.png"
  },
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
    image: "https://nhsjs.com/wp-content/uploads/2026/01/AI.png"
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
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/smart-assistant-organizing-tasks-on-productivity-hub-3d-icon-png-download-14926387.png&auto=format&fit=crop"
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
    image: "/learn.png"
  },
  {
    title: "Crop Care Coach",
    period: "March 2025",
    link: "https://github.com/Meera2906/crop-care-coach/tree/main/crop-care-coach",
    description: [
      "End-to-end agriculture platform for disease detection.",
      "Implemented offline AI models for remote farm usage.",
      "Multilingual IVR voice-bot for accessible farmer support."
    ],
    tech: ["AI", "Python", "Flutter", "Twilio"],
    image: "https://img.magnific.com/free-vector/organic-flat-farming-profession_52683-58713.jpg?semt=ais_hybrid&w=740&q=80"
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
    image: "https://img.magnific.com/premium-vector/vector-illustration-about-risk-assessment-concept-with-speedometer-risk-management_675567-8462.jpg?semt=ais_hybrid&w=740&q=80"
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
    title: "DevHack 2026 | Technathon",
    team: "Runner-Up",
    link: "#",
    period: "March 2026",
    achievements: [
      "Secured the Runner-Up position at DevHack 2026 - Technathon, held at Sri Krishna College of Technology.",
      "Recognized for innovation, technical skill, and dedication in developing a creative solution during the hackathon."
    ]
  },
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
  },
  {
    title: "GirlScript Summer of Code (GSSoC) 2026",
    team: "Open Source Contributor · Rank #291",
    link: "#",
    period: "2026",
    achievements: [
      "Contributed across 4 repos (GitVerse, Learnova, CreatorOs, DevTrack) in week 1 - fixing OAuth flows, aligning Node.js 22.x docs, adding a dynamic contributors showcase, and investigating backend 500 errors with a unified metrics cache.",
      "Merged PRs improved onboarding clarity, authentication reliability, and API stability across real-world open-source codebases."
    ]
  },
  {
    title: "ICPC Algo Queen 2025",
    team: "All India Rank 55 · 493 Participants",
    link: "#",
    period: "2025",
    achievements: [
      "Achieved All India Rank 55 among 493 participants nationwide at the ICPC Algo Queen contest hosted by Amrita Vishwa Vidyapeetham.",
      "Demonstrated strong competitive programming and algorithmic problem-solving skills on a national stage."
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { title: "Micro-Certification - Agentic AI Executive", issuer: "ServiceNow", date: "July 2026" },
  { title: "Virtual Internship Program", issuer: "ServiceNow / SmartBridge / AICTE", date: "May 2026" },
  { title: "Engineer AI Agents with Agent Development Kit (ADK)", issuer: "Google Cloud", date: "2026" },
  { title: "Certification Excellence - Frontend Frameworks", issuer: "iamneo (NIIT Venture)", date: "January 2026" },
  { title: "Certification Excellence - Algorithm Design Techniques", issuer: "iamneo (NIIT Venture)", date: "January 2026" },
  { title: "MongoDB University - MongoDB", issuer: "MongoDB", date: "July 2025" },
  { title: "Intro to Software Engineering", issuer: "IBM", date: "June 2025" },
];
