
export interface Education {
  school: string;
  degree: string;
  location: string;
  period: string;
  extra?: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface WorkExperience {
  role: string;
  company: string;
  link: string;
  period: string;
  achievements: string[];
  tech: string[];
}

export interface Project {
  title: string;
  period: string;
  link: string;
  description: string[];
  tech: string[];
  image: string;
}

export interface Participation {
  title: string;
  team: string;
  link: string;
  period: string;
  achievements: string[];
}
