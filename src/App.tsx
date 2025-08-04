import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import LoadingScreen from './components/LoadingScreen';
import StartScreen from './components/StartScreen';
import Portfolio from './components/Portfolio';
import './App.css';

type Stage = 'loading' | 'start' | 'portfolio';

function App() {
  const [stage, setStage] = useState<Stage>('loading');

  const handleLoadingComplete = () => {
    setStage('start');
  };

  const handlePlayClick = () => {
    setStage('portfolio');
  };

  return (
    <div className="App">
      {stage === 'loading' && (
        <LoadingScreen onComplete={handleLoadingComplete} />
      )}
      
      {stage === 'start' && (
        <StartScreen onPlay={handlePlayClick} />
      )}
      
      {stage === 'portfolio' && (
        <Portfolio />
      )}
      
      <Analytics />
    </div>
  );
}

export default App;
