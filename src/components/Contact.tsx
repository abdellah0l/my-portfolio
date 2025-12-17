import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Github, Linkedin, Instagram } from "lucide-react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { personalInfo } from "../data/portfolio";
import { ContactFormData } from "../types/portfolio";
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

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        console.error("EmailJS env vars missing");
        throw new Error("Configuration missing");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_name: personalInfo.name,
          reply_to: data.email,
        },
        publicKey
      );

      toast({
        title: t("contact.successTitle"),
        description: t("contact.successMessage"),
      });

      reset();
    } catch (error) {
      console.error("Error sending email:", error);

      // Fallback to mailto
      window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${data.name}&body=${data.message}`;

      toast({
        title: t("contact.fallbackTitle"),
        description: t("contact.fallbackMessage"),
        variant: "default",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="py-20">
      <div className="section-container section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              {t("contact.subtitle")}
            </p>
            <div className="divider-line max-w-24 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-medium">
                <h3 className="text-2xl font-bold mb-6">
                  {t("contact.ctaTitle")}
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {t("contact.ctaDescription")}
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">
                        {t("contact.emailLabel")}
                      </h4>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4 text-primary">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">
                        {t("contact.locationLabel")}
                      </h4>
                      <p className="text-muted-foreground">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h4 className="font-semibold mb-4">
                    {t("contact.socialLabel")}
                  </h4>
                  <div className="flex gap-4">
                    <a
                      href={personalInfo.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-muted p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:-translate-y-1"
                      aria-label="GitHub"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={personalInfo.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-muted p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:-translate-y-1"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={personalInfo.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-muted p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:-translate-y-1"
                      aria-label="Instagram"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href={personalInfo.socials.discord}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-muted p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:-translate-y-1"
                      aria-label="Discord"
                    >
                      <DiscordIcon size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-medium">
                <h3 className="text-2xl font-bold mb-6">
                  {t("contact.formTitle")}
                </h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("contact.nameLabel")}
                    </label>
                    <Input
                      id="name"
                      placeholder={t("contact.namePlaceholder")}
                      {...register("name", {
                        required: t("contact.nameRequired"),
                      })}
                      className={`bg-background ${
                        errors.name ? "border-destructive" : ""
                      }`}
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("contact.emailLabel")}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t("contact.emailPlaceholder")}
                      {...register("email", {
                        required: t("contact.emailRequired"),
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: t("contact.emailInvalid"),
                        },
                      })}
                      className={`bg-background ${
                        errors.email ? "border-destructive" : ""
                      }`}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("contact.messageLabel")}
                    </label>
                    <Textarea
                      id="message"
                      placeholder={t("contact.messagePlaceholder")}
                      rows={5}
                      {...register("message", {
                        required: t("contact.messageRequired"),
                      })}
                      className={`bg-background resize-none ${
                        errors.message ? "border-destructive" : ""
                      }`}
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2"></span>
                        {t("contact.sending")}
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send size={18} className="mr-2" />
                        {t("contact.sendButton")}
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
