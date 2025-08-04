import React from 'react';
import './NavigationBar.css';

interface NavigationBarProps {
  activeSection?: string;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ activeSection }) => {
  return (
    <div className="navigation-bar">
      <div className="nav-content">
        <div className="nav-links">
          <a 
            href="#about" 
            className={`nav-link ${activeSection === 'about' ? 'nav-link-active' : ''}`}
          >
            ABOUT
          </a>
          <div className="nav-separator"></div>
          <a 
            href="#skills" 
            className={`nav-link ${activeSection === 'skills' ? 'nav-link-active' : ''}`}
          >
            SKILLS
          </a>
          <div className="nav-separator"></div>
          <a 
            href="#projects" 
            className={`nav-link ${activeSection === 'projects' ? 'nav-link-active' : ''}`}
          >
            PROJECTS
          </a>
          <div className="nav-separator"></div>
          <a 
            href="#contact" 
            className={`nav-link ${activeSection === 'contact' ? 'nav-link-active' : ''}`}
          >
            CONTACT
          </a>
          <div className="nav-dot"></div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar; 