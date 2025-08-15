import resumeData from '../resume.json';

export interface PersonalInfo {
  name: string;
  title: string;
  roles: string[];
  location: string;
  email: string;
  phone: string;
  website: string;
  github: string;
  linkedin: string;
  bio: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
  technologies?: string[];
  logo: string;
}

export interface Education {
  degree: string;
  school: string;
  location: string;
  duration: string;
  description: string[];
  logo: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  liveUrl?: string | null;
  features: string[];
}

export interface Skills {
  programming: string[];
  frameworks_tools: string[];
  concepts: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  id: string;
}

export interface Language {
  language: string;
  proficiency: string;
}

export interface ResumeData {
  personal: PersonalInfo;
  experience: Experience[];
  education: Education[];
  projects: Project[];
  skills: Skills;
  languages: Language[];
  leadership_and_involvement: string[];
  citizenship: string;
}

export function getResumeData(): ResumeData {
  return resumeData as ResumeData;
}

export function getPersonalInfo(): PersonalInfo {
  return resumeData.personal as PersonalInfo;
}

export function getExperience(): Experience[] {
  return resumeData.experience as Experience[];
}

export function getEducation(): Education[] {
  return resumeData.education as Education[];
}

export function getProjects(): Project[] {
  return resumeData.projects as Project[];
}

export function getSkills(): Skills {
  return resumeData.skills as Skills;
}

export function getLanguages(): Language[] {
  return resumeData.languages as Language[];
}

export function getLeadershipAndInvolvement(): string[] {
  return resumeData.leadership_and_involvement as string[];
}

export function getCitizenship(): string {
  return resumeData.citizenship as string;
} 