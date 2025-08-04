import React, { useState, useEffect, useRef } from 'react';
import NavigationBar from './NavigationBar';
import AboutMe from './AboutMe';
import SkillsGrid from './SkillsGrid';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import './Portfolio.css';

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('about');
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Adjust these values to control when a section is considered "active"
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    }, observerOptions);

    // Observe all sections
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="portfolio fade-in">
      <NavigationBar activeSection={activeSection} />
      
      <div id="about" ref={aboutRef}>
        <AboutMe />
      </div>
      
      <div id="skills" ref={skillsRef}>
        <SkillsGrid />
      </div>
      
      <div id="projects" ref={projectsRef}>
        <ProjectsSection />
      </div>
      
      <div id="contact" ref={contactRef}>
        <ContactSection />
      </div>
    </div>
  );
};

export default Portfolio; 