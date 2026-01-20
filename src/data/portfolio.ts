import { Project, JourneyEvent, NavigationItem } from "../types/portfolio";
import bookhiveImage from "./assets/projects/bookhive.png";
import AiProjectImage from "./assets/projects/AI.png";
import EcommerceProjectImage from "./assets/projects/ecommerce.png";
import FavCharacterProjectImage from "./assets/projects/fav.png";
import ChessProjectImage from "./assets/journey/chess/4f4b6d87-d837-4675-bb07-2034628619a9.jpeg";
import ChessProjectImage2 from "./assets/journey/chess/552201858_3859503134184696_1772215635351051237_n.jpg";
import ChessProjectImage3 from "./assets/journey/chess/5830f5f1-8e68-487c-9761-f562cac7fda0.jpeg";
import ConferenceProjectImage from "./assets/journey/Conference/10fd3398-4bf8-46ea-913f-9382fcb57bb8.jpeg";
import ConferenceProjectImage2 from "./assets/journey/Conference/6f04c96d-1993-46e1-a6c8-afcc5bd35398.jpeg";
import ConferenceProjectImage3 from "./assets/journey/Conference/5eda41ea-18d6-46b5-85d7-9ba8b426b1b6.jpeg";

export const navigationItems: NavigationItem[] = [
  { id: "hero", label: "Home", href: "#hero" },
  { id: "about", label: "About", href: "#about" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "journey", label: "Journey", href: "#journey" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "BookHive",
    description: {
      en: "An AI-powered book recommendation platform that suggests books based on user preferences and reading history",
      fr: "Une plateforme de recommandation de livres alimentée par l'IA qui suggère des livres en fonction des préférences et de l'historique de lecture des utilisateurs",
    },
    image: bookhiveImage,
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Drizzle ORM",
      "Better-Auth",
      "AI-powered",
      "tRPC"
    ],
    githubUrl: "https://github.com/abdellah0l/",
    demoUrl: "https://bookhive-three.vercel.app/",
    featured: true,
  },
  {
    id: "2",
    title: "E-Commerce MR Emballage",
    description: {
      en: "A modern, responsive e-commerce platform built with Next.js. Features include product catalog, shopping cart, and secure checkout. (still in development)",
      fr: "Une plateforme e-commerce moderne et réactive construite avec Next.js. Comprend un catalogue de produits, un panier d'achat et un paiement sécurisé. (toujours en développement)",
    },
    image: EcommerceProjectImage,
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/abdellah0l",
    demoUrl: "https://mr-emballage.vercel.app",
    featured: true,
  },
  {
    id: "3",
    title: "My Ai journey",
    description: {
      en: "A website that shares my journey to becoming an AI engineer",
      fr: "Un site web qui partage mon parcours pour devenir ingénieur en IA",
    },
    image: AiProjectImage,
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/abdellah0l/My-AI-journey",
    demoUrl: "https://my-ai-journey-abdellah.vercel.app/",
    featured: true,
  },
  {
    id: "4",
    title: "My favorite characters",
    description: {
      en: "A responsive website that displays my favorite characters",
      fr: "Un site web réactif qui affiche mes personnages préférés",
    },
    image: FavCharacterProjectImage,
    stack: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "vite",
      "shadcn",
      "firebase",
    ],
    githubUrl: "https://github.com/abdellah0l/my-top-fav-characters-",
    demoUrl: "https://top10favcharacters.web.app/",
    featured: true,
  },
];

export const journeyEvents: JourneyEvent[] = [
  {
    id: "1",
    title: {
      en: "Fullstack Engineer Freelancer",
      fr: "Ingénieur Fullstack Freelance",
    },
    date: "2025-08",
    description: {
      en: "starting a new chapter in delevering a service to the clients",
      fr: "commencer un nouveau chapitre en fournissant un service aux clients",
    },
    type: "work",
    location: "Remote",
  },
  {
    id: "2",
    date: "2025-02-17",
    title: {
      en: "chess competitor ",
      fr: "compétiteur d'échecs",
    },
    description: {
      en: "Joined the 9th edition of the University Algerian Championship 2025, where the best players in each university meets to compete and challange, i won 5 matches out of 8 with 1500 FIDE rating performance (i was not at my prime) leading me to be in the top 25% of the tough players (add me on chess.com : GM11Abdellah)",
      fr: "J'ai rejoint la 9ème édition du Championnat Universitaire Algérien 2025, où les meilleurs joueurs de chaque université se rencontrent pour s'affronter. J'ai gagné 5 matchs sur 8 avec une performance de 1500 Elo FIDE (je n'étais pas à mon meilleur niveau), ce qui m'a permis d'être dans le top 25% des joueurs difficiles (ajoutez-moi sur chess.com : GM11Abdellah)",
    },
    type: "achievement",
    location: "Costantine, Algeria",
    images: [ChessProjectImage, ChessProjectImage2, ChessProjectImage3],
  },
  {
    id: "3",
    date: "2024-12-03",
    title: {
      en: "IC3IT Conference",
      fr: "Conférence IC3IT",
    },
    description: {
      en: "Attending IC3IT 2024 in Batna was a great experience. I gained insights into the latest research in AI, cybersecurity, and data science, and connected with inspiring researchers and students. It gave me new perspectives and motivation to push further in my journey.",
      fr: "Assister à IC3IT 2024 à Batna a été une expérience formidable. J'ai acquis des connaissances sur les dernières recherches en IA, cybersécurité et science des données, et j'ai noué des liens avec des chercheurs et des étudiants inspirants. Cela m'a donné de nouvelles perspectives et la motivation pour aller plus loin dans mon parcours.",
    },
    type: "education",
    location: "Batna, Algeria",
    images: [
      ConferenceProjectImage,
      ConferenceProjectImage2,
      ConferenceProjectImage3,
    ],
  },
];

export const personalInfo = {
  name: "Abdellah Maamra",
  role: "Full-stack Engineer and junior AI Engineer",
  bio: "Passionate Full-Stack Engineer experienced in building user-centric, high-performance web applications. Specialized in Next.js, TypeScript, and modern web technologies, with a strong focus on design, security, scalability, maintainability and optimization.",
  email: "abdellahmaamra2005@gmail.com",
  location: "Algeris, Algeria",
  socials: {
    github: "https://github.com/abdellah0l",
    linkedin: "https://www.linkedin.com/in/abdellah-maamra-091b5229a/",
    instagram: "https://instagram.com/must_raise0l",
    discord: "https://discord.com/users/1018506703303610448",
  },
};
