import React from 'react';
import { motion } from 'framer-motion';
import './ContactSection.css';

const ContactSection: React.FC = () => {
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
      className="contact-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2 className="contact-title" variants={itemVariants}>
        Ready to <span className="highlight-text">start your next project</span>? Let's build something amazing together!
      </motion.h2>
      <motion.p className="contact-subtext" variants={itemVariants}>
        Message me directly, send an email, or find me on Facebook.
      </motion.p>
      
      <motion.div className="contact-buttons" variants={containerVariants}>
        <motion.a 
          href="https://wa.me/393288461211" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-button whatsapp-button"
          variants={itemVariants}
        >
          💬 WHATSAPP
        </motion.a>
        
        <motion.a 
          href="mailto:sebydm31@gmail.com" 
          className="contact-button email-button"
          variants={itemVariants}
        >
          📧 EMAIL
        </motion.a>
        
        <motion.a 
          href="https://facebook.com/seby.dimartino.3" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contact-button facebook-button"
          variants={itemVariants}
        >
          📘 FACEBOOK
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default ContactSection; 