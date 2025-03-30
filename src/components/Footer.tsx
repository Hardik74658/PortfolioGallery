import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 py-10 pb-32 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="font-heading text-xl font-bold text-primary">
              Portfolio
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
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
          
          <div className="text-center md:text-right text-gray-500 text-sm flex items-center justify-center md:justify-end">
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
