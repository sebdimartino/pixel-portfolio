import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './ProjectsSection.css';

const ProjectsSection: React.FC = () => {
  const [aestheticFeaturesOpen, setAestheticFeaturesOpen] = useState(false);
  const [nailFeaturesOpen, setNailFeaturesOpen] = useState(false);

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

  // Project screenshots from public folder
  const aestheticImages = [
    '/aisthetic1.png',
    '/aisthetic2.png',
    '/aisthetic3.png'
  ];
  
  const nailImages = [
    '/nail1.png',
    '/nail2.png',
    '/nail3.png'
  ];

  return (
    <motion.div 
      className="projects-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2 className="section-title" variants={itemVariants}>
        FEATURED PROJECTS
      </motion.h2>
      
      <motion.div className="projects-grid" variants={containerVariants}>
        <motion.div className="project-card" variants={itemVariants}>
          <h3 className="project-title">AESTHETIC.FIT</h3>
          <div className="image-carousel-container">
            <img src={aestheticImages[0]} alt="AESTHETIC.FIT screenshot" className="carousel-image" />
          </div>
          <p className="project-description">
            AI-powered fitness app with physique scans, macro tracking, and smart workout suggestions
          </p>
          <p className="tech-stack">
            React • Firebase • Supabase • Vercel • GPT-4
          </p>
          
          <div className="key-features-section">
            <button 
              className="key-features-toggle"
              onClick={() => setAestheticFeaturesOpen(!aestheticFeaturesOpen)}
            >
              <span className="toggle-icon">{aestheticFeaturesOpen ? '–' : '+'}</span>
              KEY FEATURES
            </button>
            <div className={`key-features-content ${aestheticFeaturesOpen ? 'open' : ''}`}>
              <ul className="features-list">
                <li>🔍 AI physique scans with GPT-4 analysis</li>
                <li>📈 Smart workout + macro suggestions based on user data</li>
                <li>🧠 ChatGPT-powered summaries and personalized plans</li>
                <li>📂 Secure image upload and storage via Firebase</li>
                <li>⚙️ Full user auth with Google & Apple login</li>
                <li>📊 Visual progress tracking with charts and calendar views</li>
                <li>🚀 Built with React, deployed on Vercel</li>
              </ul>
            </div>
          </div>
          
          <a 
            href="https://aisthetic.fit" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-button"
          >
            VIEW PROJECT
          </a>
        </motion.div>
        
        <motion.div className="project-card" variants={itemVariants}>
          <h3 className="project-title">NAILDESIGNSXDES.COM</h3>
          <div className="image-carousel-container">
            <img src={nailImages[0]} alt="NAILDESIGNSXDES.COM screenshot" className="carousel-image" />
          </div>
          <p className="project-description">
            Booking platform for a nail artist with automated scheduling, photo galleries, and admin dashboard
          </p>
          <p className="tech-stack">
            React • Firebase • Firestore • Vercel
          </p>
          
          <div className="key-features-section">
            <button 
              className="key-features-toggle"
              onClick={() => setNailFeaturesOpen(!nailFeaturesOpen)}
            >
              <span className="toggle-icon">{nailFeaturesOpen ? '–' : '+'}</span>
              KEY FEATURES
            </button>
            <div className={`key-features-content ${nailFeaturesOpen ? 'open' : ''}`}>
              <ul className="features-list">
                <li>📅 Booking system with time slot management and automated availability</li>
                <li>🖼️ Image galleries for client inspiration and service previews</li>
                <li>👩‍💼 Admin dashboard for managing appointments, services, and availability</li>
                <li>💬 Inquiry form for custom sets or DMs via social</li>
                <li>🔐 Firebase authentication and Firestore backend</li>
                <li>📱 Fully responsive for mobile clients</li>
                <li>🚀 Deployed on Vercel</li>
              </ul>
            </div>
          </div>
          
          <a 
            href="https://naildesignsxdes.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-button"
          >
            VIEW PROJECT
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsSection; 