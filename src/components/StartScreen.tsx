import React from 'react';
import './StartScreen.css';

interface StartScreenProps {
  onPlay: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onPlay }) => {
  return (
    <div className="start-screen fade-in">
      <div className="start-content">
        <h1 className="name-title">SEB'S</h1>
        <h2 className="portfolio-subtitle">PORTFOLIO</h2>
        <button className="pixel-button play-button" onClick={onPlay}>
          PLAY
        </button>
      </div>
    </div>
  );
};

export default StartScreen; 