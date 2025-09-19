import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { personalInfo } from "../data/portfolio";
import BlackSpiderman from "../data/assets/Black-Spiderman-removebg-preview.png";

const Hero = () => {
  const handleScrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-gradient-to-b from-background to-muted/30 pt-16"
    >
      <div className="section-container section-padding w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
          {/* Left: Image sliding from left */}
          <motion.div
            initial={{ x: "-120%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="relative mx-auto lg:mx-0 max-w-lg lg:max-w-xl xl:max-w-2xl"
            >
              <img
                src={BlackSpiderman}
                alt="Black Spider-Man"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
              <p className="mt-4 text-sm md:text-base text-muted-foreground text-center">
                (fun fact : i love spidey)
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Text sliding from right */}
          <motion.div
            initial={{ x: "120%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="order-1 lg:order-2 text-left"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-muted-foreground text-lg md:text-xl mb-4"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Role */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground mb-6"
            >
              {personalInfo.role}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-8"
            >
              I craft beautiful, user-centric digital experiences with modern
              web technologies. Let's build something amazing together.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 items-start mb-10"
            >
              <Button
                onClick={handleScrollToProjects}
                size="lg"
                className="text-lg px-8 py-6 font-semibold"
              >
                View My Work
              </Button>
              <Button
                onClick={handleScrollToContact}
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 font-semibold"
              >
                Get In Touch
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="text-lg px-8 py-6 font-semibold"
              >
                <a href="/AbdellahMaamraResume.pdf" download="Abdellah_Resume.pdf">
                  Download Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex space-x-6"
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-foreground transition-colors duration-200"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-foreground transition-colors duration-200"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-full border border-border hover:border-foreground transition-colors duration-200"
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="hidden lg:flex flex-col items-start mt-10"
            >
              <p className="text-sm text-muted-foreground mb-4">
                Scroll to explore
              </p>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="cursor-pointer"
                onClick={() => handleScrollToProjects()}
              >
                <ArrowDown size={24} className="text-muted-foreground" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
