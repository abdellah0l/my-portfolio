import { Project, JourneyEvent, NavigationItem } from '../types/portfolio';
import AiProjectImage from './assets/projects/AI.png';
import EcommerceProjectImage from './assets/projects/ecommerce.png';
import FavCharacterProjectImage from './assets/projects/fav.png';
import PortfolioProjectImage from './assets/projects/portfolio.png';
import ChessProjectImage from './assets/journey/chess/4f4b6d87-d837-4675-bb07-2034628619a9.jpeg';
import ChessProjectImage2 from './assets/journey/chess/16958ae7-3e46-464f-b1fd-35b6c1f075c5.jpeg';
import ChessProjectImage3 from './assets/journey/chess/5830f5f1-8e68-487c-9761-f562cac7fda0.jpeg';
import ConferenceProjectImage from './assets/journey/conference/10fd3398-4bf8-46ea-913f-9382fcb57bb8.jpeg';
import ConferenceProjectImage2 from './assets/journey/conference/6f04c96d-1993-46e1-a6c8-afcc5bd35398.jpeg';
import ConferenceProjectImage3 from './assets/journey/conference/5eda41ea-18d6-46b5-85d7-9ba8b426b1b6.jpeg';



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
    title: 'E-Commerce MR Emballage',
    description: 'A modern, responsive e-commerce platform built with Next.js and Stripe integration. Features include product catalog, shopping cart, and secure checkout.',
    image: EcommerceProjectImage,
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'Prisma'],
    githubUrl: 'https://github.com/username/ecommerce',
    demoUrl: 'https://ecommerce-demo.vercel.app',
    featured: true,
  },
  {
    id: '2',
    title: 'My Ai journey',
    description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: AiProjectImage,
    stack: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/username/taskapp',
    demoUrl: 'https://taskapp-demo.vercel.app',
    featured: true,
  },
  {
    id: '3',
    title: 'My favorite characters',
    description: 'A responsive weather dashboard that displays current conditions and forecasts using multiple weather APIs with beautiful data visualizations.',
    image: FavCharacterProjectImage,
    stack: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Sass', 'PWA'],
    githubUrl: 'https://github.com/username/weather',
    demoUrl: 'https://weather-dashboard.vercel.app',
    featured: false,
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A minimalist portfolio website showcasing projects and skills with smooth animations and responsive design.',
    image: PortfolioProjectImage,
    stack: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
    githubUrl: 'https://github.com/username/portfolio',
    demoUrl: 'https://portfolio.vercel.app',
    featured: false,
  },
];

export const journeyEvents: JourneyEvent[] = [
  {
    id: '1',
    title: 'Fullstack Developer Freelancer',
    date: '2025-08',
    description: 'Promoted to Fullstack Developer at StartupXYZ, responsible for both frontend and backend development of their main product.',
    type: 'work',
    location: 'Remote',
  },
  {
    id: '2',
    date: '2025-02-17',
    title: 'chess competitor ',
    description: 'Joined TechCorp as Senior Frontend Developer, leading a team of 4 developers in building modern web applications.',
    type: 'achievement',
    location: 'Costantine, Algeria',
    images: [ChessProjectImage, ChessProjectImage2, ChessProjectImage3],
  },
  {
    id: '3',
    date: '2024-12-03',
    title: 'idex Conference',
    description: 'Spoke about "Building Accessible React Components" at React Conference 2023, presenting to over 500 developers.',
    type: 'education',
    location: 'Batna, Algeria',
    images: [ConferenceProjectImage, ConferenceProjectImage2, ConferenceProjectImage3],
  },
  
];

export const personalInfo = {
  name: 'Abdellah Maamra',
  role: 'Full-stack Developer and junior Ai Engineer',
  bio: 'Passionate frontend developer with 4+ years of experience creating beautiful, user-centric web applications. I specialize in React, TypeScript, and modern web technologies, with a keen eye for design and performance optimization.',
  email: 'abdellhamaamra2005@example.com',
  location: 'Algeris, Algeria',
  socials: {
    github: 'https://github.com/alexthompson',
    linkedin: 'https://linkedin.com/in/alexthompson',
    twitter: 'https://twitter.com/alexthompson',
    instagram: 'https://instagram.com/alexthompson',
    discord: 'https://discord.gg/alexthompson',
  },
};