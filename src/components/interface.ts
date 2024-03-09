export interface AboutMe {
  thai_name: string;
  name: string;
  username: string;
  detail: string;
  contact: Contact;
  education: Education;
  questions: Question[];
  music: Music[];
  skills: Skills;
  projects: Project[];
  certificates: Certificate[];
}

export interface Certificate {
  id: number;
  type: string;
  title: string;
  img: Img;
  link: string;
}

export interface Img {
  high: string;
  low: string;
}

export interface Contact {
  github: string;
  linkedin: string;
  youtube: string;
}

export interface Education {
  name: string;
  faculty: string;
  major: string;
}

export interface Music {
  name: string;
  link: string;
  youtube_id: string;
}

export interface Project {
  id: number;
  title: string;
  descript: string;
  link: string;
  img: string;
  source: string;
}

export interface Question {
  question: string;
  answer: string[];
}

export interface Skills {
  languages: Language[];
  tools: string[];
}

export interface Language {
  id: number;
  title: string;
  level: string;
}
