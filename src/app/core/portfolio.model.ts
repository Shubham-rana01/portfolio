export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  year: string;
  context: string;
  summary: string;
  description: string;
  /** Short, quantified outcomes — the headline result of the project. */
  impact: string[];
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  highlight?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  project?: string;
  client?: string;
  period: string;
  location: string;
  achievements: string[];
  technologies: string[];
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface Certification {
  name: string;
  issuer: string;
  url?: string;
}

export interface EducationItem {
  qualification: string;
  institution: string;
  completed: string;
  score: string;
}

export interface Availability {
  status: string;
  startDate: string;
  workPreference: string;
  relocation: string;
  responseTime: string;
  languages: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Profile {
  name: string;
  initials: string;
  title: string;
  tagline: string;
  summary: string;
  /** One line on what you're working on right now — keeps the page feeling current. */
  now: string;
  location: string;
  timezone: string;
  email: string;
  phone?: string;
  resumeUrl?: string;
  /** Absolute URL of the deployed site, used for canonical and social tags. */
  siteUrl: string;
  availableForWork: boolean;
  /** Optional form POST endpoint (e.g. Formspree). Leave empty to fall back to a mailto link. */
  contactFormEndpoint: string;
  socials: SocialLink[];
  stats: Stat[];
  services: Service[];
  engagements: Service[];
  process: ProcessStep[];
  skills: SkillGroup[];
  projects: Project[];
  experience: ExperienceItem[];
  testimonials: Testimonial[];
  certifications: Certification[];
  education: EducationItem[];
  availability: Availability;
}
