import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Send, CheckCircle, Github, Linkedin, MapPin, Instagram } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { ContactFormData } from '../types/portfolio';
import { personalInfo } from '../data/portfolio';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration - using a public template
      const serviceId = 'service_qrxwq8c'; // Public EmailJS service
      const templateId = 'template_igbyvn6'; // Public template
      const publicKey = 'P1GAJI8ZdifwcCkbP'; // This will be replaced with your actual key
      
      // Prepare template parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        message: data.message,
        to_email: 'abdellahmaamra2005@gmail.com',
        reply_to: data.email,
      };
      
      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setIsSubmitted(true);
      reset();
      
      // Reset submitted state after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Fallback to mailto if EmailJS fails
      const subject = `Portfolio Contact from ${data.name}`;
      const body = `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;
      const mailtoLink = `mailto:abdellahmaamra2005@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      window.open(mailtoLink, '_blank');
      
      toast({
        title: "Opening email client...",
        description: "EmailJS not configured yet. Opening your email client as fallback.",
      });
      
      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 3000);
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              I'm always open to discussing new opportunities, interesting projects, 
              or just having a chat about technology and design.
            </p>
            <div className="divider-line max-w-24 mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Beautiful CTA Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-8 border border-primary/20 shadow-strong"
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                />
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Let's start a conversation
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Whether you have a project in mind, want to collaborate, or just want to say hello, 
                    I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
                  </p>
                  
                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-4 right-4 w-8 h-8 bg-primary/20 rounded-full"
                  />
                  <motion.div
                    animate={{ y: [5, -5, 5], rotate: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute bottom-4 left-4 w-6 h-6 bg-accent/20 rounded-full"
                  />
                </div>
              </motion.div>

              {/* Contact Details */}
              <div className="space-y-4">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <Mail className="text-primary" size={24} />
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <MapPin className="text-primary" size={24} />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">{personalInfo.location}</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative overflow-hidden bg-gradient-to-br from-accent/10 via-primary/5 to-accent/10 rounded-2xl p-6 border border-accent/20 shadow-medium"
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                />
                
                <div className="relative z-10">
                  <h4 className="font-semibold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                    Connect with me
                  </h4>
                  <div className="flex space-x-4">
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      href={personalInfo.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-4 rounded-full bg-gradient-to-br from-muted to-muted/50 hover:from-primary hover:to-primary/80 transition-all duration-500 shadow-medium hover:shadow-strong"
                    >
                      <Github size={24} className="group-hover:text-primary-foreground transition-colors duration-500" />
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.5, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: -360 }}
                      whileTap={{ scale: 0.9 }}
                      href={personalInfo.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-4 rounded-full bg-gradient-to-br from-muted to-muted/50 hover:from-primary hover:to-primary/80 transition-all duration-500 shadow-medium hover:shadow-strong"
                    >
                      <Linkedin size={24} className="group-hover:text-primary-foreground transition-colors duration-500" />
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.5, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      href={personalInfo.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-4 rounded-full bg-gradient-to-br from-muted to-muted/50 hover:from-primary hover:to-primary/80 transition-all duration-500 shadow-medium hover:shadow-strong"
                    >
                      <Instagram size={24} className="group-hover:text-primary-foreground transition-colors duration-500" />
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.5, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, rotate: -360 }}
                      whileTap={{ scale: 0.9 }}
                      href={personalInfo.socials.discord}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-4 rounded-full bg-gradient-to-br from-muted to-muted/50 hover:from-primary hover:to-primary/80 transition-all duration-500 shadow-medium hover:shadow-strong"
                    >
                      <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className="group-hover:text-primary-foreground transition-colors duration-500"
                      >
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                      </svg>
                      <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.5, opacity: 1 }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="relative overflow-hidden bg-gradient-to-br from-card via-card/95 to-card rounded-2xl border border-border/50 shadow-strong"
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
                />
                
                <div className="relative z-10 p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Send me a message
                    </h3>
                    <p className="text-muted-foreground text-sm mt-2">
                      Fill out the form below and I'll get back to you as soon as possible.
                    </p>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name Field */}
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        {...register('name', { 
                          required: 'Name is required',
                          minLength: { value: 2, message: 'Name must be at least 2 characters' }
                        })}
                        className="mt-2"
                        placeholder="Your full name"
                      />
                      {errors.name && (
                        <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Please enter a valid email address'
                          }
                        })}
                        className="mt-2"
                        placeholder="your.email@example.com"
                      />
                      {errors.email && (
                        <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        {...register('message', { 
                          required: 'Message is required',
                          minLength: { value: 10, message: 'Message must be at least 10 characters' }
                        })}
                        className="mt-2 min-h-[120px]"
                        placeholder="Tell me about your project or just say hello..."
                      />
                      {errors.message && (
                        <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full group"
                      disabled={isSubmitting}
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="mr-2"
                          >
                            <Send size={20} />
                          </motion.div>
                          Sending...
                        </>
                      ) : isSubmitted ? (
                        <>
                          <CheckCircle size={20} className="mr-2 text-green-500" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          <Send size={20} className="mr-2 group-hover:translate-x-1 transition-transform" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;