import React, { useState, useEffect } from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 4000; // 4 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 500); // Small delay before transition
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="loading-screen fade-in">
      <div className="loading-content">
        <img src="/character.png" alt="Character" className="loading-character" />
        <div className="loading-text">
          Loading... {Math.round(progress)}%
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen; 