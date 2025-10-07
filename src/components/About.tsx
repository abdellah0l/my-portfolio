import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/portfolio';
import  Image  from '../data/assets/me.jpg';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="section-container section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-1xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="divider-line max-w-24 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative mx-auto lg:mx-0 max-w-md">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-muted to-accent shadow-strong"
                >
                  <img
                    src={Image}
                    alt={personalInfo.name}
                    className="w-full h-[400px] object-cover transition-all duration-500"
                  />
                </motion.div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-4 -right-4 w-24 h-24 bg-primary rounded-full opacity-10"
                ></motion.div>
                <motion.div
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-full opacity-20"
                ></motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Passionate about creating digital experiences
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {personalInfo.bio}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-muted-foreground">
                  <MapPin size={20} className="mr-3 text-primary" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              {/* Skills/Technologies */}
              <div>
                <h4 className="text-xl font-semibold mb-6">Technologies I work with</h4>
                {/* Animated tech display - cool aesthetic */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="grid grid-cols-3 sm:flex sm:flex-wrap gap-4 sm:gap-5 justify-center lg:justify-start"
                >
                  {[
                    { src: "c/c-original.svg", alt: "C" },
                    { src: "python/python-original.svg", alt: "Python" },
                    { src: "javascript/javascript-original.svg", alt: "JavaScript" },
                    { src: "typescript/typescript-original.svg", alt: "TypeScript" },
                    { src: "css3/css3-original.svg", alt: "CSS" },
                    { src: "html5/html5-original.svg", alt: "HTML" },
                    { src: "nodejs/nodejs-original.svg", alt: "NodeJS" },
                    { src: "react/react-original.svg", alt: "React" },
                    { src: "nextjs/nextjs-original.svg", alt: "NextJS" },
                    { src: "vite/vite-original.svg", alt: "Vite" },
                    { src: "tailwindcss/tailwindcss-original.svg", alt: "TailwindCSS" },
                    { src: "express/express-original.svg", alt: "Express", extra: "bg-white rounded p-1" },
                    { src: "firebase/firebase-plain.svg", alt: "Firebase" },
                    { src: "postgresql/postgresql-original.svg", alt: "PostgreSQL" },
                    { src: "mongodb/mongodb-original.svg", alt: "MongoDB" },
                    { src: "mysql/mysql-original.svg", alt: "MySQL" },
                    { src: "php/php-original.svg", alt: "PHP" },
                    { src: "java/java-original.svg", alt: "Java" },
                    { src: "numpy/numpy-original.svg", alt: "NumPy" },
                    { src: "pandas/pandas-original.svg", alt: "Pandas" },
                    { src: "git/git-original.svg", alt: "Git" },
                    { src: "github/github-original.svg", alt: "GitHub", extra: "bg-white rounded p-1" },
                    { src: "postman/postman-original.svg", alt: "Postman" },
                    // add drizzle and better-auth library too
                    { customSrc: "https://api.iconify.design/logos:drizzle.svg", alt: "Drizzle ORM", extra: "bg-white rounded p-1" },
                    { customSrc: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/lock.svg", alt: "Better Auth", extra: "bg-white rounded p-1" },
                  ].map((icon, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.3 }}
                      viewport={{ once: true }}
                      className="group w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center"
                    >
                      <img
                        src={icon.customSrc || `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon.src}`}
                        alt={icon.alt}
                        className={`w-8 h-8 sm:w-10 sm:h-10 grayscale group-hover:grayscale-0 transition  ${icon.extra || ""}`}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;