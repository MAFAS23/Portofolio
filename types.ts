export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  achievements: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  text: string;
  author: string;
  company: string;
}

export interface SuccessStoryItem {
  id: string;
  category: string;
  title: string;
  result: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}