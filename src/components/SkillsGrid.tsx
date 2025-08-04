import React from 'react';
import { motion } from 'framer-motion';
import './SkillsGrid.css';

const SkillsGrid: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="skills-grid-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2 className="skills-title" variants={itemVariants}>
        SKILLS & TECHNOLOGIES
      </motion.h2>
      
      <motion.div className="skills-grid" variants={containerVariants}>
        <motion.div className="skill-card" variants={itemVariants}>
          <span className="skill-icon">⚛️</span>
          <h3 className="skill-title">React & Frontend</h3>
          <p className="skill-description">
            Building responsive, interactive UIs with React, TypeScript, and modern CSS. Creating pixel-perfect designs that work flawlessly across all devices.
          </p>
        </motion.div>
        
        <motion.div className="skill-card" variants={itemVariants}>
          <span className="skill-icon">🔥</span>
          <h3 className="skill-title">Firebase & Backend</h3>
          <p className="skill-description">
            Full-stack development with Firebase, Firestore, and authentication. Building scalable, real-time applications with secure data management.
          </p>
        </motion.div>
        
        <motion.div className="skill-card" variants={itemVariants}>
          <span className="skill-icon">🤖</span>
          <h3 className="skill-title">AI Integration</h3>
          <p className="skill-description">
            Integrating GPT-4, OpenAI APIs, and AI-powered features. Creating intelligent applications that enhance user experience and automate complex tasks.
          </p>
        </motion.div>
        
        <motion.div className="skill-card" variants={itemVariants}>
          <span className="skill-icon">💳</span>
          <h3 className="skill-title">Payments & E-commerce</h3>
          <p className="skill-description">
            Stripe integration, subscription management, and e-commerce solutions. Building secure payment systems and complete online business platforms.
          </p>
        </motion.div>
        
        <motion.div className="skill-card" variants={itemVariants}>
          <span className="skill-icon">📱</span>
          <h3 className="skill-title">Mobile-First Design</h3>
          <p className="skill-description">
            Responsive design principles and mobile optimization. Ensuring perfect functionality and user experience across all screen sizes and devices.
          </p>
        </motion.div>
        
        <motion.div className="skill-card" variants={itemVariants}>
          <span className="skill-icon">🚀</span>
          <h3 className="skill-title">Deployment & DevOps</h3>
          <p className="skill-description">
            Vercel, Netlify, and cloud deployment. Setting up CI/CD pipelines, domain management, and ensuring high-performance, scalable applications.
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SkillsGrid; 