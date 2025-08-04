import React from 'react';
import { motion } from 'framer-motion';
import './AboutMe.css';

const AboutMe: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
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
      className="about-me"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2 className="about-heading" variants={itemVariants}>
        ABOUT ME
      </motion.h2>
      <motion.p className="about-tagline" variants={itemVariants}>
        Web Dev IRL
      </motion.p>
      
      <motion.div className="about-content" variants={itemVariants}>
        <div className="photo-window">
          <img 
            src="/aboutme.png" 
            alt="Seb" 
            className="photo-image"
          />
        </div>
        
        <div className="text-content">
          <p className="about-description">
            I'm a full-stack developer based in Sicily who loves turning ideas into custom websites that <em>actually work</em>. From booking systems to AI tools — <strong>if you can dream it, I can build it</strong> (and probably make it look cool too).
          </p>
          
          <p className="about-cta">
            let's build something!
          </p>
        </div>
      </motion.div>

      <motion.div 
        className="stats-grid"
        variants={itemVariants}
      >
        <motion.div className="stat-item" variants={itemVariants}>
          <span className="stat-emoji">🧠</span>
          <span className="stat-text">Full-Stack & Self-Taught</span>
        </motion.div>
        
        <motion.div className="stat-item" variants={itemVariants}>
          <span className="stat-emoji">🌍</span>
          <span className="stat-text">Based in Sicily</span>
        </motion.div>
        
        <motion.div className="stat-item" variants={itemVariants}>
          <span className="stat-emoji">🕹</span>
          <span className="stat-text">Loves clean UI</span>
        </motion.div>
        
        <motion.div className="stat-item" variants={itemVariants}>
          <span className="stat-emoji">💸</span>
          <span className="stat-text">Stripe, auth, database? No problem.</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutMe; 