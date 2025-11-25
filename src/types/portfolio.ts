export interface LocalizedString {
  en: string;
  fr: string;
}

export interface Project {
  id: string;
  title: string;
  description: string | LocalizedString;
  image: string;
  stack: string[];
  githubUrl: string;
  demoUrl: string;
  featured: boolean;
}

export interface JourneyEvent {
  id: string;
  date: string;
  title: string | LocalizedString;
  description: string | LocalizedString;
  type: "education" | "work" | "achievement" | "event";
  location?: string;
  images?: string[];
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
