export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string[];
  githubUrl: string;
  demoUrl: string;
  featured: boolean;
}

export interface JourneyEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  type: 'education' | 'work' | 'achievement' | 'event';
  location?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}