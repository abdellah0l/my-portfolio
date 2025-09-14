import { Project, JourneyEvent, NavigationItem } from '../types/portfolio';

export const navigationItems: NavigationItem[] = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'journey', label: 'Journey', href: '#journey' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A modern, responsive e-commerce platform built with Next.js and Stripe integration. Features include product catalog, shopping cart, and secure checkout.',
    image: '/placeholder.svg',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Prisma'],
    githubUrl: 'https://github.com/username/ecommerce',
    demoUrl: 'https://ecommerce-demo.vercel.app',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: '/placeholder.svg',
    stack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/username/taskapp',
    demoUrl: 'https://taskapp-demo.vercel.app',
    featured: true,
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard that displays current conditions and forecasts using multiple weather APIs with beautiful data visualizations.',
    image: '/placeholder.svg',
    stack: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Sass', 'PWA'],
    githubUrl: 'https://github.com/username/weather',
    demoUrl: 'https://weather-dashboard.vercel.app',
    featured: false,
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A minimalist portfolio website showcasing projects and skills with smooth animations and responsive design.',
    image: '/placeholder.svg',
    stack: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/username/portfolio',
    demoUrl: 'https://portfolio.vercel.app',
    featured: false,
  },
];

export const journeyEvents: JourneyEvent[] = [
  {
    id: '1',
    date: '2024-01',
    title: 'Senior Frontend Developer',
    description: 'Joined TechCorp as Senior Frontend Developer, leading a team of 4 developers in building modern web applications.',
    type: 'work',
    location: 'San Francisco, CA',
  },
  {
    id: '2',
    date: '2023-09',
    title: 'React Conference Speaker',
    description: 'Spoke about "Building Accessible React Components" at React Conference 2023, presenting to over 500 developers.',
    type: 'achievement',
    location: 'New York, NY',
  },
  {
    id: '3',
    title: 'Fullstack Developer',
    date: '2022-03',
    description: 'Promoted to Fullstack Developer at StartupXYZ, responsible for both frontend and backend development of their main product.',
    type: 'work',
    location: 'Remote',
  },
  {
    id: '4',
    date: '2021-06',
    title: 'Computer Science Graduate',
    description: 'Graduated with Bachelor of Science in Computer Science from University of Technology, Magna Cum Laude.',
    type: 'education',
    location: 'Boston, MA',
  },
  {
    id: '5',
    date: '2020-08',
    title: 'First Internship',
    description: 'Started my first software development internship at WebDev Inc., working on frontend development with React.',
    type: 'work',
    location: 'Seattle, WA',
  },
];

export const personalInfo = {
  name: 'Abdellah Maamra',
  role: 'Full-stack Developer and junior Ai Engineer',
  bio: 'Passionate frontend developer with 4+ years of experience creating beautiful, user-centric web applications. I specialize in React, TypeScript, and modern web technologies, with a keen eye for design and performance optimization.',
  email: 'abdellhamaamra2005@example.com',
  location: 'Algeris, Algeria',
  socials: {
    github: 'https://github.com/abdellah0l',
    linkedin: 'https://linkedin.com/in/alexthompson',
    twitter: 'https://twitter.com/alexthompson',
  },
};