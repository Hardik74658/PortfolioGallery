
import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="font-heading text-xl font-bold text-primary">
              Portfolio
            </a>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <a href="#home" className="text-gray-600 hover:text-primary transition-colors">
              Home
            </a>
            <a href="#projects" className="text-gray-600 hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#about" className="text-gray-600 hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          
          <div className="mt-6 md:mt-0 text-gray-500 text-sm flex items-center">
            <p>© {currentYear} • Made with </p>
            <Heart size={14} className="mx-1 text-red-500" fill="currentColor" />
            <p> by John Doe</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
