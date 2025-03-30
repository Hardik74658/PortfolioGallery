
import React from 'react';
import { ArrowRight, Zap, Code, Palette, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Enhanced Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 dots-pattern opacity-30" />
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute left-0 bottom-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        <div className="absolute left-1/4 top-1/3 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute right-1/4 bottom-1/3 w-72 h-72 bg-green-200/20 rounded-full blur-3xl" />
        
        <div className="absolute inset-0 wavy-pattern opacity-60" />
        
        <svg className="absolute top-20 left-10 w-16 h-16 text-purple-300/30" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M47.3 100.7c-12.8-12.8-12.8-33.5 0-46.3s33.5-12.8 46.3 0 12.8 33.5 0 46.3-33.5 12.8-46.3 0zM107.4 160.8c-12.8-12.8-12.8-33.5 0-46.3s33.5-12.8 46.3 0 12.8 33.5 0 46.3-33.5 12.8-46.3 0z"/>
        </svg>
        
        <svg className="absolute bottom-20 right-10 w-20 h-20 text-blue-300/30" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M50 100c0-27.6 22.4-50 50-50s50 22.4 50 50-22.4 50-50 50-50-22.4-50-50z"/>
        </svg>
        
        <div className="grid grid-cols-3 grid-rows-3 h-full opacity-10">
          {[...Array(9)].map((_, i) => (
            <div 
              key={i} 
              className="border border-blue-100"
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Turning Ideas into
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-pink-500 to-accent"> Digital Reality</div>
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            A creative portfolio showcasing work in web development, mobile apps, 
            and digital experiences that connect technology with human needs.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.a 
              href="#projects" 
              className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white px-8 py-3.5 rounded-md inline-flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20 btn-hover"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects <ArrowRight size={18} />
            </motion.a>
            <motion.a 
              href="#about" 
              className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 px-8 py-3.5 rounded-md inline-flex items-center justify-center transition-all btn-hover"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              About Me
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      {/* Floating SVG elements */}
      <motion.div 
        className="absolute top-40 right-20 text-primary/80"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <Zap size={30} />
      </motion.div>
      
      <motion.div 
        className="absolute top-1/3 left-20 text-purple-500/80"
        animate={{ 
          y: [0, 10, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      >
        <Code size={30} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/3 right-24 text-pink-500/80"
        animate={{ 
          y: [0, 8, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
      >
        <Palette size={30} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-40 left-24 text-yellow-500/80"
        animate={{ 
          y: [0, -12, 0],
          rotate: [0, -8, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.5
        }}
      >
        <Star size={30} />
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ 
          opacity: [0.4, 1, 0.4],
          y: [0, 10, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          repeatType: "loop"
        }}
      >
        <a href="#projects" className="text-primary/80 hover:text-primary transition-colors">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
