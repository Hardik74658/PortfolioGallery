
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProjectGallery from '../components/ProjectGallery';
import ProjectModal from '../components/ProjectModal';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import WorkExperience from '../components/WorkExperience';
import { Project } from '../lib/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, Code, Blocks, Cpu, Zap, Star } from 'lucide-react';

const Index: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Add scroll to top button logic
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Floating decorative elements */}
      <div className="fixed top-40 right-10 w-4 h-4 bg-primary/40 rounded-full animate-pulse z-10 hidden md:block"></div>
      <div className="fixed top-60 left-10 w-2 h-2 bg-accent/40 rounded-full animate-pulse z-10 hidden md:block"></div>
      <div className="fixed bottom-60 right-20 w-3 h-3 bg-purple-400/40 rounded-full animate-pulse z-10 hidden md:block"></div>
      <div className="fixed bottom-40 left-30 w-2 h-6 bg-blue-400/40 rounded-sm animate-pulse z-10 hidden md:block"></div>
      
      {/* Floating tech icons with enhanced animations */}
      <motion.div 
        className="fixed right-14 top-1/4 text-gray-200 opacity-30 hidden lg:block z-0"
        animate={{ 
          y: [0, -15, 0],
          rotate: [0, 8, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Code size={90} strokeWidth={1} />
      </motion.div>
      
      <motion.div 
        className="fixed left-14 top-1/3 text-gray-200 opacity-20 hidden lg:block z-0"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -8, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      >
        <Blocks size={80} strokeWidth={1} />
      </motion.div>
      
      <motion.div 
        className="fixed right-20 bottom-1/4 text-gray-200 opacity-20 hidden lg:block z-0"
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, 12, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
      >
        <Cpu size={70} strokeWidth={1} />
      </motion.div>
      
      <motion.div 
        className="fixed left-1/4 bottom-1/3 text-pink-200 opacity-20 hidden lg:block z-0"
        animate={{ 
          y: [0, -18, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 3
        }}
      >
        <Zap size={65} strokeWidth={1} />
      </motion.div>
      
      <motion.div 
        className="fixed right-1/3 top-1/5 text-yellow-200 opacity-20 hidden lg:block z-0"
        animate={{ 
          y: [0, 12, 0],
          rotate: [0, 15, 0]
        }}
        transition={{ 
          duration: 9,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1.5
        }}
      >
        <Star size={60} strokeWidth={1} />
      </motion.div>
      
      <Header />
      <main>
        <Hero />
        <About />
        <ProjectGallery onProjectClick={setSelectedProject} />
        <WorkExperience />
        <Contact />
      </main>
      <Footer />
      
      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
      
      {/* Scroll to top button with improved animation */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed right-6 bottom-6 bg-gradient-to-r from-primary to-blue-500 text-white p-3 rounded-full shadow-lg hover:from-primary/90 hover:to-blue-500/90 transition-colors z-20"
            aria-label="Scroll to top"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
