import { motion } from "framer-motion";
import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Heart,
  Instagram,
} from "lucide-react";
import { personalInfo, navigationItems } from "../data/portfolio";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 pt-16 pb-8 border-t border-border/50">
      <div className="section-container section-padding">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text inline-block">
              {personalInfo.name}
            </h3>
            <p className="text-muted-foreground max-w-xs">
              {t("footer.brandText")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-block"
                  >
                    {t(`navigation.${item.id}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-lg mb-4">
              {t("footer.connect")}
            </h4>
            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} className="mr-2" />
                {personalInfo.email}
              </a>

              <div className="flex space-x-4 pt-2">
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background border border-border rounded-full hover:border-primary hover:text-primary transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href={personalInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background border border-border rounded-full hover:border-primary hover:text-primary transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={personalInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background border border-border rounded-full hover:border-primary hover:text-primary transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {currentYear} {personalInfo.name}. {t("footer.rightsReserved")}
          </p>

          <div className="flex items-center text-sm text-muted-foreground">
            <span>{t("footer.madeWith")}</span>
            <Heart
              size={14}
              className="mx-1 text-red-500 fill-red-500 animate-pulse"
            />
            <span>
              {t("footer.by")} {personalInfo.name}
            </span>
          </div>

          <motion.button
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
