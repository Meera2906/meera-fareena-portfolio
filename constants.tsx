
import { Education, SkillGroup, WorkExperience, Project, Participation } from './types';

export const PERSONAL_INFO = {
  name: "MEERA FAREENA",
  title: "Aspiring AI Engineer | Full-Stack Developer | Open Source Enthusiast",
  email: "meerafareena2905@gmail.com",
  phone: "+91 75983 40237",
  linkedin: "linkedin.com/in/meera-fareena-90007a330",
  github: "github.com/Meera2906",
  resumeUrl: "https://drive.google.com/file/d/1zpQFn1ssCu5ypGkhcVJ0vGh4aJz7kaVs/view?usp=sharing",
  summary: "B.Tech student in Artificial Intelligence & Data Science with strong hands-on experience in full-stack and backend development. Proficient in building scalable REST APIs, secure authentication systems, and responsive web applications.",
  avatar: "/pfp.png"
};

export const EDUCATION: Education[] = [
  {
    school: "Sri Krishna College of Technology",
    degree: "Bachelor of Technology - Artificial Intelligence and Data Science",
    location: "Coimbatore, India",
    period: "Present - 2028",
    extra: "CGPA: 8.82"
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
    title: "Crop Care Coach",
    period: "March 2025",
    link: "#",
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
    link: "#",
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
    link: "#",
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
