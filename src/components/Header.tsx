import React, { useState, useEffect } from 'react';
import { Home, FolderOpen, User, Mail, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const themes = [
  { name: 'Default', color: '230, 80%, 55%' },
  { name: 'Red', color: '0, 84%, 60%' },
  { name: 'Blue', color: '210, 70%, 50%' },
  { name: 'Green', color: '120, 60%, 50%' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemeSelectorOpen, setIsThemeSelectorOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleThemeChange = (color: string) => {
    document.documentElement.style.setProperty('--primary', `hsl(${color})`);
    document.documentElement.style.setProperty('--accent', `hsl(${color})`);
    setIsThemeSelectorOpen(false);
  };

  return (
    <>
      {/* Bottom Dock Navigation - Fully centralized */}
      <motion.div 
        className="fixed bottom-5 left-0 right-0 mx-auto z-50 flex justify-center items-center w-[calc(100%-2rem)] max-w-lg bg-white/80 backdrop-blur-md rounded-full shadow-lg py-3 px-4 border border-gray-100 md:flex md:px-10 md:py-3"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <nav className="flex items-center justify-between gap-4 md:gap-10">
          <motion.a 
            href="#home" 
            className="flex flex-col items-center font-medium text-xs md:text-sm group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="p-2 rounded-full bg-gradient-to-br from-blue-100 to-blue-50 text-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-blue-500 group-hover:text-white transition-all duration-300">
              <Home size={20} />
            </div>
            <span className="mt-1 text-gray-600 group-hover:text-primary transition-colors">Home</span>
          </motion.a>
        
          <motion.a 
            href="#about" 
            className="flex flex-col items-center font-medium text-sm group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="p-2 rounded-full bg-gradient-to-br from-pink-100 to-pink-50 text-pink-600 group-hover:bg-gradient-to-br group-hover:from-pink-600 group-hover:to-pink-500 group-hover:text-white transition-all duration-300">
              <User size={20} />
            </div>
            <span className="mt-1 text-gray-600 group-hover:text-pink-600 transition-colors">About</span>
          </motion.a>
             
          <motion.a 
            href="#projects" 
            className="flex flex-col items-center font-medium text-sm group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="p-2 rounded-full bg-gradient-to-br from-purple-100 to-purple-50 text-purple-600 group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-purple-500 group-hover:text-white transition-all duration-300">
              <FolderOpen size={20} />
            </div>
            <span className="mt-1 text-gray-600 group-hover:text-purple-600 transition-colors">Projects</span>
          </motion.a>
          
          <motion.a 
            href="#experience" 
            className="flex flex-col items-center font-medium text-sm group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="p-2 rounded-full bg-gradient-to-br from-yellow-100 to-yellow-50 text-yellow-600 group-hover:bg-gradient-to-br group-hover:from-yellow-600 group-hover:to-yellow-500 group-hover:text-white transition-all duration-300">
              <FolderOpen size={20} />
            </div>
            <span className="mt-1 text-center text-gray-600 group-hover:text-yellow-600 transition-colors">Work Experience</span>
          </motion.a>
      
          <motion.a 
            href="#contact" 
            className="flex flex-col items-center font-medium text-sm group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="p-2 rounded-full bg-gradient-to-br from-green-100 to-green-50 text-green-600 group-hover:bg-gradient-to-br group-hover:from-green-600 group-hover:to-green-500 group-hover:text-white transition-all duration-300">
              <Mail size={20} />
            </div>
            <span className="mt-1 text-gray-600 group-hover:text-green-600 transition-colors">Contact</span>
          </motion.a>
       
        </nav>
      </motion.div>

      {/* Add subtle SVG background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="absolute top-10 left-10 w-32 h-32 text-blue-200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M50 100c0-27.6 22.4-50 50-50s50 22.4 50 50-22.4 50-50 50-50-22.4-50-50z" />
        </svg>
        <svg className="absolute bottom-10 right-10 w-40 h-40 text-purple-200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
          <path d="M47.3 100.7c-12.8-12.8-12.8-33.5 0-46.3s33.5-12.8 46.3 0 12.8 33.5 0 46.3-33.5 12.8-46.3 0z" />
        </svg>
      </div>

      {/* Theme Selector Button */}
      <button
        className="fixed top-5 right-5 md:top-auto md:right-auto md:bottom-10 md:left-10 bg-primary text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform z-50"
        onClick={() => setIsThemeSelectorOpen(!isThemeSelectorOpen)}
        aria-label="Toggle theme selector"
      >
        {isThemeSelectorOpen ? <X size={24} /> : '🎨'}
      </button>

      <AnimatePresence>
        {isThemeSelectorOpen && (
          <motion.div
            className="fixed  bottom-16 right-5 md:bottom-10 md:left-10 z-50 max-w-xs md:max-w-sm lg:max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative">
              {themes.map((theme, index) => (
                <motion.button
                  key={theme.name}
                  className="absolute w-12 h-12 rounded-full shadow-lg border-2 border-gray-200 hover:scale-110 transition-transform"
                  style={{ backgroundColor: `hsl(${theme.color})` }}
                  onClick={() => handleThemeChange(theme.color)}
                  initial={{
                    opacity: 0,
                    scale: 0,
                    x: 0,
                    y: 0,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    x: 30 + (index === 0 ? 100 : 50) * Math.sin((index * Math.PI) / (themes.length - 1)),
                    y: -50 - 50 * Math.cos((index * Math.PI) / (themes.length - 1)),
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0,
                    x: 0,
                    y: 0,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                    delay: index * 0.1,
                  }}
                ></motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
