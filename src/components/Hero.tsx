import { motion } from "framer-motion";
import { ArrowDown, Github, Mail, Linkedin, Instagram } from "lucide-react";
import { Button } from "./ui/button";
import { personalInfo } from "../data/portfolio";
import Ichigo from "../data/assets/ichigo.png";
import { useTranslation } from "react-i18next";

const DiscordIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    width={size}
    height={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1971.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
  </svg>
);

const Hero = () => {
  const { t, i18n } = useTranslation();

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

  const resumeLink =
    i18n.language === "fr"
      ? "/fr/AbdellahMaamraResumeFr.pdf"
      : "/en/AbdellahMaamraResumeEn.pdf";

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
                src={Ichigo}
                alt="ichigo"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
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
              {t("hero.greeting")}
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
              {t("hero.role")}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed mb-8"
            >
              {t("hero.description")}
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
                {t("hero.viewWork")}
              </Button>
              <Button
                onClick={handleScrollToContact}
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 font-semibold"
              >
                {t("hero.getInTouch")}
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="text-lg px-8 py-6 font-semibold"
              >
                <a href={resumeLink} download="Abdellah_Resume.pdf">
                  {t("hero.downloadResume")}
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
                aria-label="GitHub"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-foreground transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href={personalInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-foreground transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href={personalInfo.socials.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-foreground transition-colors duration-200"
                aria-label="Discord"
              >
                <DiscordIcon size={24} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-full border border-border hover:border-foreground transition-colors duration-200"
                aria-label="Email"
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
                {t("hero.scrollExplore")}
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
