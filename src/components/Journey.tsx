import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap, Award, Users } from 'lucide-react';
import { journeyEvents } from '../data/portfolio';
import { JourneyEvent } from '../types/portfolio';
import { useState, useEffect } from 'react';

const Journey = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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

  const getIcon = (type: JourneyEvent['type']) => {
    switch (type) {
      case 'work':
        return <Briefcase size={24} />;
      case 'education':
        return <GraduationCap size={24} />;
      case 'achievement':
        return <Award size={24} />;
      case 'event':
        return <Users size={24} />;
      default:
        return <Calendar size={24} />;
    }
  };

  const getTypeColor = (type: JourneyEvent['type']) => {
    switch (type) {
      case 'work':
        return 'from-blue-500 to-blue-600';
      case 'education':
        return 'from-green-500 to-green-600';
      case 'achievement':
        return 'from-purple-500 to-purple-600';
      case 'event':
        return 'from-orange-500 to-orange-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="journey" className="py-20 bg-muted/30">
      <div className="section-container section-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              A timeline of my professional growth, achievements, and key milestones 
              that have shaped my career in software development.
            </p>
            <div className="divider-line max-w-24 mx-auto"></div>
          </motion.div>

          {/* Blog Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto">
            {journeyEvents.map((event, index) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <div className="relative overflow-hidden bg-card rounded-2xl shadow-medium hover:shadow-strong transition-all duration-500 border border-border/50 h-[420px]">
                  {/* Rotating Images */}
                  <div className="relative h-48 overflow-hidden">
                    {(() => {
                      const eventImages = (event.images && event.images.length > 0)
                        ? event.images
                        : ['/placeholder.svg'];
                      const imgSrc = eventImages[currentImageIndex % eventImages.length];
                      return (
                        <AnimatePresence mode="wait">
                          <motion.img
                            key={`${event.id}-${currentImageIndex % eventImages.length}`}
                            src={imgSrc}
                            alt={`${event.title} - Image ${(currentImageIndex % eventImages.length) + 1}`}
                            className="w-full h-full object-cover"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                          />
                        </AnimatePresence>
                      );
                    })()}
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                    
                    {/* Type Badge */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`absolute top-4 left-4 p-3 rounded-xl bg-gradient-to-r ${getTypeColor(event.type)} text-white shadow-medium`}
                    >
                      {getIcon(event.type)}
                    </motion.div>
                    
                    {/* Floating Elements */}
                    <motion.div
                      animate={{ y: [-5, 5, -5], rotate: [0, 5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute top-4 right-4 w-6 h-6 bg-white/20 rounded-full"
                    />
                    <motion.div
                      animate={{ y: [5, -5, 5], rotate: [0, -5, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute bottom-4 right-4 w-4 h-4 bg-white/20 rounded-full"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                        {event.title}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Calendar size={16} className="mr-2" />
                        <span>{event.date}</span>
                        {event.location && (
                          <>
                            <span className="mx-2">•</span>
                            <MapPin size={16} className="mr-1" />
                            <span>{event.location}</span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {event.description}
                    </p>

                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Journey;