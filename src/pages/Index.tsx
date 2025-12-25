

import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Journey from '../components/Journey';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Toaster } from '../components/ui/toaster';
import FloatingDecor from '../components/FloatingDecor';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <FloatingDecor />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
