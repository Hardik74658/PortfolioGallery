import React from 'react';
import { Download, Github, Linkedin, Mail, Code, Database, Layout, Zap, Sparkles, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  // SVG Background patterns
  const svgPattern1 = (
    <svg className="absolute -bottom-10 -left-20 w-72 h-72 text-blue-50 opacity-70" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M45.3,-51.2C58.3,-42.5,68.5,-27,73.7,-9.2C78.9,8.7,79.1,28.8,69.9,42.8C60.6,56.8,41.9,64.6,23.4,69.7C4.9,74.7,-13.2,77,-28.9,71.1C-44.5,65.3,-57.5,51.3,-65.8,34.7C-74.1,18,-77.6,-1.2,-72.3,-18.4C-67,-35.5,-52.9,-50.4,-37.6,-58.3C-22.3,-66.2,-5.8,-67,8.9,-77.5C23.6,-87.9,47.1,-108,52.9,-101.6C58.6,-95.2,46.5,-62.3,45.3,-51.2Z" transform="translate(100 100)" />
    </svg>
  );
  
  const svgPattern2 = (
    <svg className="absolute -top-20 -right-20 w-80 h-80 text-purple-50 opacity-70" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path fill="currentColor" d="M48.8,-64.2C62.6,-53.2,72.8,-37.2,74.6,-21C76.3,-4.8,69.7,11.6,60.6,25.4C51.5,39.2,39.9,50.4,25.9,57.5C11.9,64.6,-4.5,67.7,-21.4,65.2C-38.4,62.7,-55.8,54.5,-67.1,40C-78.3,25.5,-83.3,4.7,-78.9,-13.5C-74.5,-31.6,-60.8,-47.1,-45.4,-58.1C-30,-69.1,-13,-75.5,2.5,-78.8C18,-82,35.1,-75.2,48.8,-64.2Z" transform="translate(100 100)" />
    </svg>
  );
  
  const codingBubble = (
    <svg className="absolute top-40 right-20 w-16 h-16 text-primary opacity-10 animate-pulse" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="2" fill="none" />
      <path d="M30,50 L45,35 M30,50 L45,65" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M70,50 L55,35 M70,50 L55,65" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );

  return (
    <section id="about" className="py-24 bg-gray-50 overflow-hidden relative">
      {/* Fix subtle SVG background */}
      <div className="absolute inset-0 z-10 opacity-80 pointer-events-none">
        <svg
          className="absolute -bottom-10 -left-20 w-72 h-72 text-blue-50 animate-pulse"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="M45.3,-51.2C58.3,-42.5,68.5,-27,73.7,-9.2C78.9,8.7,79.1,28.8,69.9,42.8C60.6,56.8,41.9,64.6,23.4,69.7C4.9,74.7,-13.2,77,-28.9,71.1C-44.5,65.3,-57.5,51.3,-65.8,34.7C-74.1,18,-77.6,-1.2,-72.3,-18.4C-67,-35.5,-52.9,-50.4,-37.6,-58.3C-22.3,-66.2,-5.8,-67,8.9,-77.5C23.6,-87.9,47.1,-108,52.9,-101.6C58.6,-95.2,46.5,-62.3,45.3,-51.2Z" />
        </svg>
        <svg
          className="absolute -top-20 -right-20 w-80 h-80 text-purple-50 animate-spin-slow"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="M48.8,-64.2C62.6,-53.2,72.8,-37.2,74.6,-21C76.3,-4.8,69.7,11.6,60.6,25.4C51.5,39.2,39.9,50.4,25.9,57.5C11.9,64.6,-4.5,67.7,-21.4,65.2C-38.4,62.7,-55.8,54.5,-67.1,40C-78.3,25.5,-83.3,4.7,-78.9,-13.5C-74.5,-31.6,-60.8,-47.1,-45.4,-58.1C-30,-69.1,-13,-75.5,2.5,-78.8C18,-82,35.1,-75.2,48.8,-64.2Z" />
        </svg>
      </div>
      {/* SVG Background Patterns */}
      {svgPattern1}
      {svgPattern2}
      {codingBubble}
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Me</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A passionate developer with a focus on creating meaningful digital experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            <motion.div 
              className="md:col-span-1"
              variants={itemVariants}
            >
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
                {/* Decorative code brackets */}
                <div className="absolute -top-4 -left-4 text-gray-50 opacity-30 transform -rotate-12">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 22L3 16L9 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="absolute -bottom-4 -right-4 text-gray-50 opacity-30 transform -rotate-12">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 2L21 8L15 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <motion.div 
                  className="relative aspect-square overflow-hidden rounded-full mb-6 max-w-[240px] mx-auto border-4 border-white shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=400&h=400&crop=faces"
                    alt="Developer Profile"
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                  />
                  
                  {/* Floating tech icons around the profile */}
                  <motion.div 
                    className="absolute -top-2 right-10 bg-blue-500 text-white p-1.5 rounded-full shadow-lg"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                  >
                    <Code size={16} />
                  </motion.div>
                  
                  <motion.div 
                    className="absolute top-1/4 -left-2 bg-purple-500 text-white p-1.5 rounded-full shadow-lg"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", delay: 1 }}
                  >
                    <Layout size={16} />
                  </motion.div>
                  
                  <motion.div 
                    className="absolute bottom-5 -right-2 bg-green-500 text-white p-1.5 rounded-full shadow-lg"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 2 }}
                  >
                    <Database size={16} />
                  </motion.div>
                </motion.div>

                <div className="text-center mb-6 relative z-10">
                  <h3 className="font-heading text-xl font-bold mb-1">John Doe</h3>
                  <p className="text-gray-600">Full Stack Developer</p>
                  
                  {/* Graphic badge indicating experience level */}
                  <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-600">
                    <Award size={14} className="mr-1" /> Senior Level
                  </div>
                </div>

                <div className="flex justify-center gap-4 mb-6">
                  <motion.a 
                    href="https://github.com" 
                    className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors relative group"
                    aria-label="GitHub"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      GitHub Profile
                    </span>
                  </motion.a>
                  <motion.a 
                    href="https://linkedin.com" 
                    className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors relative group"
                    aria-label="LinkedIn"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={20} />
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      LinkedIn Profile
                    </span>
                  </motion.a>
                  <motion.a 
                    href="#contact" 
                    className="bg-gray-100 hover:bg-gray-200 p-2 rounded-full transition-colors relative group"
                    aria-label="Email"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Mail size={20} />
                    <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      Contact Me
                    </span>
                  </motion.a>
                </div>

                <motion.a 
                  href="#" 
                  className="block bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white text-center py-2 px-4 rounded-md transition-colors inline-flex items-center justify-center gap-2 w-full"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  download
                >
                  <Download size={16} /> Download Resume
                </motion.a>
              </div>
            </motion.div>

            <motion.div 
              className="md:col-span-2"
              variants={itemVariants}
            >
              <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <motion.div variants={itemVariants}>
                  <h3 className="font-heading text-2xl font-bold mb-4 flex items-center">
                    <Sparkles className="text-primary mr-2" size={20} />
                    Background
                  </h3>
                  <p className="text-gray-600 mb-6">
                    I'm a full-stack developer with over 5 years of experience building web and mobile applications. 
                    I specialize in creating responsive, user-friendly interfaces that solve real-world problems.
                    With a background in both design and development, I bring a unique perspective to each project,
                    focusing on both aesthetics and functionality.
                  </p>
                </motion.div>

                <motion.div className="mb-8" variants={itemVariants}>
                  <h3 className="font-heading text-2xl font-bold mb-4 flex items-center">
                    <Zap className="text-primary mr-2" size={20} />
                    Skills
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <motion.div 
                      className="bg-gray-50 p-4 rounded-lg border border-gray-100"
                      whileHover={{ scale: 1.03, backgroundColor: "#f8faff" }}
                      transition={{ type: "spring" }}
                    >
                      <h4 className="font-bold mb-2 flex items-center">
                        <Code size={16} className="text-blue-500 mr-2" />
                        Frontend
                      </h4>
                      <ul className="text-gray-600 space-y-1">
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          React / Next.js
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          TypeScript
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          Tailwind CSS
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                          Responsive Design
                        </li>
                      </ul>
                    </motion.div>
                    <motion.div 
                      className="bg-gray-50 p-4 rounded-lg border border-gray-100"
                      whileHover={{ scale: 1.03, backgroundColor: "#f8faff" }}
                      transition={{ type: "spring" }}
                    >
                      <h4 className="font-bold mb-2 flex items-center">
                        <Database size={16} className="text-purple-500 mr-2" />
                        Backend
                      </h4>
                      <ul className="text-gray-600 space-y-1">
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                          Node.js
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                          Express
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                          MongoDB
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                          PostgreSQL
                        </li>
                      </ul>
                    </motion.div>
                    <motion.div 
                      className="bg-gray-50 p-4 rounded-lg border border-gray-100"
                      whileHover={{ scale: 1.03, backgroundColor: "#f8faff" }}
                      transition={{ type: "spring" }}
                    >
                      <h4 className="font-bold mb-2 flex items-center">
                        <Layout size={16} className="text-green-500 mr-2" />
                        Other
                      </h4>
                      <ul className="text-gray-600 space-y-1">
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                          UI/UX Design
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                          Git & GitHub
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                          AWS / Vercel
                        </li>
                        <li className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                          Testing (Jest, Cypress)
                        </li>
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>

                {/* <motion.div variants={itemVariants}>
                  <h3 className="font-heading text-2xl font-bold mb-4 flex items-center">
                    <Award className="text-primary mr-2" size={20} />
                    Experience
                  </h3>
                  <div className="space-y-6">
                    <motion.div 
                      className="border-l-4 border-primary pl-4 hover:bg-blue-50/30 rounded-r-md p-2 transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring" }}
                    >
                      <h4 className="font-bold">Senior Frontend Developer</h4>
                      <p className="text-gray-600 text-sm mb-1">Company XYZ • 2021 - Present</p>
                      <p className="text-gray-600">
                        Lead the development of a large-scale web application used by thousands of customers.
                      </p>
                    </motion.div>
                    <motion.div 
                      className="border-l-4 border-gray-200 hover:border-purple-400 pl-4 hover:bg-purple-50/30 rounded-r-md p-2 transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring" }}
                    >
                      <h4 className="font-bold">Full Stack Developer</h4>
                      <p className="text-gray-600 text-sm mb-1">Web Solutions Inc • 2018 - 2021</p>
                      <p className="text-gray-600">
                        Developed and maintained client projects, focusing on responsive design and performance.
                      </p>
                    </motion.div>
                  </div>
                </motion.div> */}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
