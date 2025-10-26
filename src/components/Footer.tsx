import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="bg-muted/50 border-t border-border/50 relative overflow-hidden">
      {/* Animated Background (same style as Contact section) */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
        animate={{ x: ['-100%', '100%'] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
      />
      <div className="section-container section-padding relative z-10 mg-144">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8 mt-8">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {personalInfo.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Passionate developer creating digital experiences that make a difference.
              </p>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Github size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={personalInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Instagram size={20} />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <nav className="space-y-2">
                <motion.a
                  whileHover={{ x: 5 }}
                  href="#about"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </motion.a>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="#projects"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Projects
                </motion.a>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="#journey"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Journey
                </motion.a>
                <motion.a
                  whileHover={{ x: 5 }}
                  href="#contact"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </motion.a>
              </nav>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-lg font-semibold">Get In Touch</h4>
              <div className="space-y-2">
                <p className="text-muted-foreground">
                  <span className="font-medium">Email:</span>{' '}
                  <a 
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium">Location:</span> {personalInfo.location}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div 
            variants={itemVariants}
            className="border-t border-border/50 mb-6"
          />

          {/* Bottom Section */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          >
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-muted-foreground">
              <span>© {new Date().getFullYear()} {personalInfo.name}</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart size={16} className="text-red-500" />
                </motion.div>
                <span>and lots of juice</span>
              </span>
            </div>

            {/* Back to Top Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
