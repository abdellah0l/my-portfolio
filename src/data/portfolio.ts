import { Project, JourneyEvent, NavigationItem } from '../types/portfolio';
import AiProjectImage from './assets/projects/AI.png';
import EcommerceProjectImage from './assets/projects/ecommerce.png';
import FavCharacterProjectImage from './assets/projects/fav.png';
import PortfolioProjectImage from './assets/projects/portfolio.png';
import ChessProjectImage from './assets/journey/chess/4f4b6d87-d837-4675-bb07-2034628619a9.jpeg';
import ChessProjectImage2 from './assets/journey/chess/16958ae7-3e46-464f-b1fd-35b6c1f075c5.jpeg';
import ChessProjectImage3 from './assets/journey/chess/5830f5f1-8e68-487c-9761-f562cac7fda0.jpeg';
import ConferenceProjectImage from './assets/journey/Conference/10fd3398-4bf8-46ea-913f-9382fcb57bb8.jpeg';
import ConferenceProjectImage2 from './assets/journey/Conference/6f04c96d-1993-46e1-a6c8-afcc5bd35398.jpeg';
import ConferenceProjectImage3 from './assets/journey/Conference/5eda41ea-18d6-46b5-85d7-9ba8b426b1b6.jpeg';



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
    description: 'A modern, responsive e-commerce platform built with Next.js. Features include product catalog, shopping cart, and secure checkout. (still in development)',
    image: EcommerceProjectImage,
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/abdellah0l',
    demoUrl: 'https://mr-emballage.vercel.app',
    featured: true,
  },
  {
    id: '2',
    title: 'My Ai journey',
    description: 'A website that shares my journey to becoming an AI engineer',
    image: AiProjectImage,
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/abdellah0l/My-AI-journey',
    demoUrl: 'https://my-ai-journey-abdellah.vercel.app/',
    featured: true,
  },
  {
    id: '3',
    title: 'My favorite characters',
    description: 'A responsive weather dashboard that displays current conditions and forecasts using multiple weather APIs with beautiful data visualizations.',
    image: FavCharacterProjectImage,
    stack: ['React.js', 'TypeScript', 'Tailwind CSS', 'vite', 'shadcn', 'firebase'],
    githubUrl: 'https://github.com/abdellah0l/my-top-fav-characters-',
    demoUrl: 'https://top10favcharacters.web.app/',
    featured: true,
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'A minimalist portfolio website showcasing projects and skills with smooth animations and responsive design.',
    image: PortfolioProjectImage,
    stack: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'Vite', 'TypeScript'],
    githubUrl: 'https://github.com/abdellah0l',
    demoUrl: 'https://abdellahsp.space',
    featured: true,
  },
];

export const journeyEvents: JourneyEvent[] = [
  {
    id: '1',
    title: 'Fullstack Developer Freelancer',
    date: '2025-08',
    description: 'starting a new chapter in delevering a service to the clients',
    type: 'work',
    location: 'Remote',
  },
  {
    id: '2',
    date: '2025-02-17',
    title: 'chess competitor ',
    description: 'Joined the 9th edition of the University Algerian Championship 2025, where the best players in each university meets to compete and challange, i won 5 matches out of 8 with 1500 FIDE rating performance (i was not at my prime) leading me to be in the top 25% of the tough players (add me on chess.com : GM11Abdellah)',
    type: 'achievement',
    location: 'Costantine, Algeria',
    images: [ChessProjectImage, ChessProjectImage2, ChessProjectImage3],
  },
  {
    id: '3',
    date: '2024-12-03',
    title: 'IC3IT Conference',
    description : 'Attending IC3IT 2024 in Batna was a great experience. I gained insights into the latest research in AI, cybersecurity, and data science, and connected with inspiring researchers and students. It gave me new perspectives and motivation to push further in my journey.',
    type: 'education',
    location: 'Batna, Algeria',
    images: [ConferenceProjectImage, ConferenceProjectImage2, ConferenceProjectImage3],
  },
  
];

export const personalInfo = {
  name: 'Abdellah Maamra',
  role: 'Full-stack Developer and junior Ai Engineer',
  bio: "Passionate Full-Stack Developer experienced in building user-centric, high-performance web applications. Specialized in React, TypeScript, and modern web technologies, with a strong focus on design, security, scalability, and optimization.",
  email: 'abdellhamaamra2005@example.com',
  location: 'Algeris, Algeria',
  socials: {
    github: 'https://github.com/abdellah0l',
    linkedin: 'https://www.linkedin.com/in/abdellah-maamra-091b5229a/',
    instagram: 'https://instagram.com/must_raise0l',
    discord: 'https://discord.com/users/1018506703303610448',
  },
};
