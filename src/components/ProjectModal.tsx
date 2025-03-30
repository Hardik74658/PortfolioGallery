import React, { useEffect } from 'react';
import { Project } from '../lib/projects';
import { X, ExternalLink, Github, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div 
        key={project?.id}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Black backdrop */}
        <motion.div 
          className="fixed inset-0 bg-black/80 backdrop-blur-xl" // Added stronger blur effect
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* SVG decorations placed between backdrop and modal content */}
        <div className="absolute opacity-50 inset-0 z-55 pointer-events-none">
          <motion.svg 
            className="absolute top-0 left-0 w-80 h-80 text-blue-500 opacity-95 brightness-125"
            style={{ filter: "blur(8px)" }} // Added blur effect
            viewBox="0 0 200 200" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor"
            animate={{ x: [0, 20, 0], y: [0, -20, 0] }} // Increased movement range
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M50 100c0-27.6 22.4-50 50-50s50 22.4 50 50-22.4 50-50 50-50-22.4-50-50z" />
          </motion.svg>
          <motion.svg 
            className="absolute bottom-0 right-0 w-96 h-96 text-purple-500 opacity-95 brightness-125"
            style={{ filter: "blur(10px)" }} // Added blur effect
            viewBox="0 0 200 200" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor"
            animate={{ rotate: [0, 20, -20, 0] }} // Increased rotational range
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M47.3 100.7c-12.8-12.8-12.8-33.5 0-46.3s33.5-12.8 46.3 0 12.8 33.5 0 46.3-33.5 12.8-46.3 0z" />
          </motion.svg>
          <motion.svg 
            className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 text-green-400 opacity-90 brightness-125"
            style={{ filter: "blur(6px)" }} // Added blur effect
            viewBox="0 0 200 200" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor"
            animate={{ scale: [1, 1.2, 1] }} // Increased pulsating range
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M100 50c27.6 0 50 22.4 50 50s-22.4 50-50 50-50-22.4-50-50 22.4-50 50-50z" />
          </motion.svg>
          <motion.svg 
            className="absolute top-10 right-10 w-72 h-72 text-yellow-400 opacity-90 brightness-125"
            style={{ filter: "blur(8px)" }} // Added blur effect
            viewBox="0 0 200 200" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor"
            animate={{ x: [0, -20, 20, 0], y: [0, 20, -20, 0] }} // Increased movement range
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M60 100c0-22.1 17.9-40 40-40s40 17.9 40 40-17.9 40-40 40-40-17.9-40-40z" />
          </motion.svg>
          <motion.svg 
            className="absolute bottom-20 left-20 w-[500px] h-[500px] text-red-400 opacity-85 brightness-125"
            style={{ filter: "blur(12px)" }} // Added blur effect
            viewBox="0 0 200 200" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor"
            animate={{ rotate: [0, -20, 20, 0] }} // Increased rotational range
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d="M70 100c0-16.6 13.4-30 30-30s30 13.4 30 30-13.4 30-30 30-30-13.4-30-30z" />
          </motion.svg>
        </div>

        {/* Modal content – notice the semitransparent background so the SVGs show through */}
        <motion.div 
          className="relative z-60 bg-white/90 rounded-xl shadow-2xl max-w-5xl w-full h-[90vh] overflow-auto"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ type: "spring", damping: 20 }}
        >
          <motion.button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-800 z-10 bg-white/80 p-2 rounded-full backdrop-blur-sm shadow-md"
            whileHover={{ rotate: 90, backgroundColor: "#f3f4f6" }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            aria-label="Close modal"
          >
            <X size={24} />
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
            {/* Left Side: Image Carousel */}
            <div className="bg-gray-100 p-6 flex items-center justify-center">
              <Carousel key={`carousel-${project?.id}`} className="w-full max-w-md">
                <CarouselContent>
                  {project?.detailImages?.length ? (
                    project.detailImages.map((img, index) => (
                      <CarouselItem key={`${project.id}-detailImage-${index}`}>
                        <motion.div
                          className="overflow-hidden rounded-lg shadow-md bg-white p-2"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <img 
                            src={img} 
                            alt={`${project.title} - Detail Image ${index + 1}`}
                            className="w-full h-auto rounded-lg object-cover"
                          />
                        </motion.div>
                      </CarouselItem>
                    ))
                  ) : (
                    <p className="text-gray-500">No images available</p>
                  )}
                </CarouselContent>
                <CarouselPrevious className="left-2" />
                <CarouselNext className="right-2" />
              </Carousel>
            </div>

            {/* Right Side: Project Info */}
            <div className="p-8 overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center mb-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                  {project.title}
                </h2>
                
                <div className="flex items-center gap-4 mb-8">
                  <motion.a 
                    href={project.liveUrl || "https://example.com/live-demo"}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-blue-600 text-white rounded-md shadow-md shadow-primary/20"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} /> Live Demo
                  </motion.a>
                  <motion.a 
                    href={project.githubUrl || "https://github.com/example/repo"}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-md shadow-md"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={18} /> Source Code
                  </motion.a>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-3">About the Project</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.map((tech, index) => (
                      <motion.span 
                        key={index}
                        className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm border border-gray-200"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * index }}
                        whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-3">Features</h3>
                  <ul className="list-disc list-inside">
                    {project.features?.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-3">Gallery</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.detailImages?.length ? (
                      project.detailImages.map((image, index) => (
                        <img key={index} src={image} alt={`Gallery Image ${index + 1}`} className="w-24 h-24 object-cover rounded-lg" />
                      ))
                    ) : (
                      <p className="text-gray-500">No gallery images available</p>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <motion.button
                      onClick={onClose}
                      className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-2 rounded-md transition-colors"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Close
                    </motion.button>
                    
                    <motion.a
                      href="#projects"
                      className="text-primary hover:text-primary/80 font-medium flex items-center"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      onClick={onClose}
                    >
                      View All Projects <ArrowRight size={16} className="ml-1" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;
