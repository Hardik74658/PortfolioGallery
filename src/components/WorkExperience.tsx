import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ArrowUpRight, Code, Star, ChevronRight } from 'lucide-react';

interface WorkExperience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

const experiences: WorkExperience[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    period: "2021 - Present",
    description: "Led the frontend development of a multi-platform application, improving performance by 40% and implementing modern animation techniques.",
    skills: ["React", "TypeScript", "Animation", "Performance Optimization"]
  },
  {
    id: 2,
    title: "UI/UX Developer",
    company: "Creative Solutions",
    period: "2019 - 2021",
    description: "Designed and developed responsive interfaces for web and mobile applications with a focus on user experience and accessibility.",
    skills: ["UI Design", "UX Research", "Accessibility", "Responsive Design"]
  },
  {
    id: 3,
    title: "Web Developer",
    company: "Digital Agency",
    period: "2017 - 2019",
    description: "Created interactive websites and web applications for various clients across different industries.",
    skills: ["JavaScript", "CSS", "HTML", "Web Animation"]
  }
];

const WorkExperience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white relative overflow-hidden">
      {/* Fix subtle SVG background */}
      <div className="absolute inset-0 z-10 opacity-90 pointer-events-none">
        <svg
          className="absolute top-10 left-10 w-32 h-32 text-blue-200 animate-spin-slow"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="M50 100c0-27.6 22.4-50 50-50s50 22.4 50 50-22.4 50-50 50-50-22.4-50-50z" />
        </svg>
        <svg
          className="absolute bottom-10 right-10 w-40 h-40 text-purple-200 animate-bounce"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
        >
          <path d="M47.3 100.7c-12.8-12.8-12.8-33.5 0-46.3s33.5-12.8 46.3 0 12.8 33.5 0 46.3-33.5 12.8-46.3 0z" />
        </svg>
      </div>
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-50 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
      
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Work <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Experience</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            My professional journey in tech and development
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-purple-500 to-pink-500 rounded-full ml-1 md:left-1/2 md:-ml-0.5"></div>
          
          {/* Experience items */}
          {experiences.map((experience, index) => (
            <motion.div 
              key={experience.id}
              className="relative mb-12 md:mb-16 md:pl-8 md:ml-1/2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Timeline dot with icon */}
              <div className="absolute left-4 top-4 w-8 h-8 rounded-full bg-white border-4 border-primary shadow-md flex items-center justify-center z-10 md:left-1/2 md:-ml-4">
                <Code size={14} className="text-primary" />
              </div>
              
              {/* Content card */}
              <motion.div 
                className="ml-12 bg-white p-6 rounded-lg shadow-md border border-gray-100 md:ml-0 hover:shadow-lg transition-shadow duration-300"
                whileHover={{ y: -5 }}
              >
                {/* Top section with left alignment */}
                <div className="flex flex-col mb-3 md:items-start">
                  <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
                  <div className="flex items-center text-gray-600 mt-1">
                    <Briefcase size={16} className="mr-2" />
                    <span className="font-medium">{experience.company}</span>
                  </div>
                  <div className="flex items-center text-gray-500 mt-1">
                    <Calendar size={16} className="mr-2" />
                    <span>{experience.period}</span>
                  </div>
                </div>
                
                {/* Description with left alignment */}
                <p className="text-gray-600 mb-4 text-left">
                  {experience.description}
                </p>
                
                {/* Skills with left alignment */}
                <div className="flex flex-wrap gap-2 justify-start">
                  {experience.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* View more button with left alignment */}
                <div className="mt-4 text-left">
                  <motion.button 
                    className="inline-flex items-center text-primary font-medium text-sm hover:underline"
                    whileHover={{ x: 4 }}
                  >
                    <span>Read more</span>
                    <ChevronRight size={16} className="ml-1" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
          
          {/* Add a "present" indicator at the end of the timeline */}
          <motion.div 
            className="absolute left-4 bottom-0 w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-primary shadow-lg md:left-1/2 md:-ml-3"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.2 }}
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-20"></span>
            <Star size={12} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
          </motion.div>
        </div>
        
        {/* Replace the carousel with a skill badges section */}
        <motion.div 
          className="mt-24 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6">
            Core <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Technologies</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'GraphQL', 'Framer Motion', 'Redux', 'Firebase', 'MongoDB', 'AWS', 'Git'].map((tech, index) => (
              <motion.div
                key={tech}
                className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 text-gray-800"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: '#f8f9ff',
                  boxShadow: '0 4px 12px rgba(59, 130, 246, 0.15)'
                }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperience;
