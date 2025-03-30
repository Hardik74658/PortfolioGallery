import React, { useState, useEffect } from 'react';
import { Project, projects , categories } from '../lib/projects';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Updated dummy project with all extra properties that ProjectModal may use.


// Use only your 4 original projects plus our one dummy project (total = 5)
// Returns a variant based on index so each card gets a unique animation with a slight delay.
const getVariant = (index: number) => {
  const delay = index * 0.15;
  switch (index % 5) {
    case 0:
      return {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } },
      };
    case 1:
      return {
        hidden: { opacity: 0, x: -30 },
        visible: { opacity: 1, x: 0, transition: { delay, duration: 0.6, ease: "easeOut" } },
      };
    case 2:
      return {
        hidden: { opacity: 0, x: 30 },
        visible: { opacity: 1, x: 0, transition: { delay, duration: 0.6, ease: "easeOut" } },
      };
    case 3:
      return {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { delay, duration: 0.6, ease: "easeOut" } },
      };
    case 4:
      return {
        hidden: { opacity: 0, rotate: -5 },
        visible: { opacity: 1, rotate: 0, transition: { delay, duration: 0.6, ease: "easeOut" } },
      };
    default:
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay, duration: 0.6, ease: "easeOut" } },
      };
  }
};

interface ProjectGalleryProps {
  onProjectClick: (project: Project) => void;
}

// A decorative divider SVG to insert between project rows.
const DecorativeDivider = () => (
  <motion.div 
    className="my-12"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }} // Ensure animation triggers only once
    transition={{ duration: 0.8 }}
  >
    <svg viewBox="0 0 1440 100" className="w-full h-16">
      <defs>
        <linearGradient id="dividerGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#60a5fa" />
        </linearGradient>
      </defs>
      <path fill="url(#dividerGradient)" d="M0,50 C300,0 600,100 1440,50 L1440,100 L0,100 Z"></path>
    </svg>
  </motion.div>
);

// Reusable Card component with animated SVG decorations.
const Card = ({ project, customVariant, onProjectClick }: { project: Project; customVariant: any; onProjectClick: (project: Project) => void; }) => (
  <motion.div 
    variants={customVariant}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }} // Trigger animation only once when 50% of the card is visible
    className="group relative w-full overflow-hidden rounded-xl shadow-2xl cursor-pointer border border-gray-200 bg-white transition-transform transform hover:scale-105"
    onClick={() => onProjectClick(project)}
    whileHover={{ y: -5, transition: { duration: 0.3 } }}
  >
    <div className="relative h-[500px]">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      {/* Animated decorative SVG: Circle at top right */}
      <motion.div 
        className="absolute top-4 right-4 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <svg width="40" height="40" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="40" stroke="url(#grad)" strokeWidth="10" fill="none" />
        </svg>
      </motion.div>
      {/* Animated decorative SVG: Triangle at bottom left */}
      <motion.div 
        className="absolute bottom-4 left-4 opacity-20"
        animate={{ rotate: -360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <svg width="40" height="40" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="grad2" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#facc15" />
              <stop offset="100%" stopColor="#f472b6" />
            </linearGradient>
          </defs>
          <polygon points="50,15 90,85 10,85" fill="url(#grad2)" />
        </svg>
      </motion.div>
    </div>
    <div className="absolute bottom-0 p-8 w-full">
      <span className="text-xs font-semibold text-white/90 bg-primary/40 backdrop-blur-sm px-4 py-2 rounded-full">
        {project.category}
      </span>
      <h3 className="text-3xl font-bold text-white mt-4">{project.title}</h3>
      <p className="text-white mt-2">{project.description}</p>
      <div className="flex items-center gap-4 mt-6">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.a
                href={project.githubUrl || "https://github.com"}
                className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
                <span className="sr-only">View GitHub Repository</span>
              </motion.a>
            </TooltipTrigger>
            <TooltipContent className="bg-gray-800 text-white border-gray-700">
              <p>View Source Code</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.a
                href={project.liveUrl || "#"}
                className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={20} />
                <span className="sr-only">View Live Site</span>
              </motion.a>
            </TooltipTrigger>
            <TooltipContent className="bg-gray-800 text-white border-gray-700">
              <p>View Live Demo</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <motion.button
          className="ml-auto text-white flex items-center gap-2 transition-transform"
          whileHover={{ x: 5 }}
          onClick={(e) => {
            e.stopPropagation();
            onProjectClick(project);
          }}
        >
          View Details <ArrowRight size={20} />
        </motion.button>
      </div>
    </div>
  </motion.div>
);

const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onProjectClick }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [visibleProjects, setVisibleProjects] = useState<Project[]>([]);

  useEffect(() => {
    const filtered = activeCategory === 'All'
      ? projects
      : projects.filter(project => project.category === activeCategory);
    setVisibleProjects(filtered);
  }, [activeCategory]);

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      {/* Adjusted global subtle wavy SVG background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg viewBox="0 0 1440 320" className="w-full h-full">
          <defs>
            <linearGradient id="waveGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#a78bfa" />
              <stop offset="100%" stopColor="#60a5fa" />
            </linearGradient>
          </defs>
          <path fill="url(#waveGradient)" d="M0,192L80,186.7C160,181,320,171,480,160C640,149,800,139,960,138.7C1120,139,1280,149,1360,154.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
      
      {/* Enhanced decorative SVGs for better visibility */}
      <div className="absolute inset-0 z-10 opacity-15 pointer-events-none">
        <svg className="absolute top-0 left-0 w-48 h-48 text-pink-300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M50 100c0-27.6 22.4-50 50-50s50 22.4 50 50-22.4 50-50 50-50-22.4-50-50z" />
        </svg>
        <svg className="absolute bottom-0 right-0 w-56 h-56 text-green-300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M47.3 100.7c-12.8-12.8-12.8-33.5 0-46.3s33.5-12.8 46.3 0 12.8 33.5 0 46.3-33.5 12.8-46.3 0z" />
        </svg>
        <svg className="absolute top-1/4 right-1/4 w-64 h-64 text-blue-300 opacity-50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M100 50c27.6 0 50 22.4 50 50s-22.4 50-50 50-50-22.4-50-50 22.4-50 50-50z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // Trigger animation only once
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-heading text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Featured <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Projects</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A premium showcase presented one by one with smooth, elegant animations.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // Trigger animation only once
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.button
            onClick={() => setActiveCategory('All')}
            className={`px-6 py-2 rounded-full text-sm transition-all ${
              activeCategory === 'All'
                ? 'bg-gradient-to-r from-primary to-blue-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            All
          </motion.button>
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-primary to-blue-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* List of projects with alternating title placement and decorative dividers */}
        <div className="space-y-12">
          {visibleProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            const cardVariant = getVariant(index);
            return (
              <div key={project.id}>
                <div className="flex flex-col md:flex-row items-center">
                  {isEven ? (
                    <>
                      {/* Title section on left (20% width) */}
                      <motion.div
                        className="w-full md:w-1/5 p-4"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }} // Trigger animation only once
                        variants={{
                          hidden: { opacity: 0, x: -50 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
                        }}
                      >
                        <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                        <p className="text-gray-600 mt-2">{project.category}</p>
                        <motion.div
                          animate={{ x: [0, 10, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          className="mt-4"
                        >
                          <ArrowRight size={24} className="text-primary" />
                        </motion.div>
                      </motion.div>
                      {/* Card section on right (80% width) */}
                      <div className="w-full md:w-4/5 p-4">
                        <Card project={project} customVariant={cardVariant} onProjectClick={onProjectClick} />
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Card section on left (80% width) */}
                      <div className="w-full md:w-4/5 p-4">
                        <Card project={project} customVariant={cardVariant} onProjectClick={onProjectClick} />
                      </div>
                      {/* Title section on right (20% width) */}
                      <motion.div
                        className="w-full md:w-1/5 p-4 text-right"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }} // Trigger animation only once
                        variants={{
                          hidden: { opacity: 0, x: 50 },
                          visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
                        }}
                      >
                        <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                        <p className="text-gray-600 mt-2">{project.category}</p>
                        <motion.div
                          animate={{ x: [0, -10, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                          className="mt-4 flex justify-end"
                        >
                          <ArrowRight size={24} className="text-primary" />
                        </motion.div>
                      </motion.div>
                    </>
                  )}
                </div>
                {/* Insert a decorative divider between projects */}
                {index !== visibleProjects.length - 1 && <DecorativeDivider />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
