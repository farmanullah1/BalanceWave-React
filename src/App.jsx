import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroCard from './components/HeroCard';
import CalculatorForm from './components/CalculatorForm';
import ResultCard from './components/ResultCard';
import './App.css';

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('bw-theme') || 'light');
  const [result, setResult] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('bw-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    if (navigator.vibrate) navigator.vibrate(20);
  };

  const handleCalculate = ({ mobile, carrier, amount }) => {
    const tax = amount * 0.135;
    const net = amount - tax;
    setResult({ amount, tax, net, carrier, mobile });
  };

  return (
    <div className="app">
      <div className="blob blob-a" />
      <div className="blob blob-b" />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="page">
        <HeroCard />
        <div className="grid">
          <CalculatorForm onCalculate={handleCalculate} />
          <ResultCard result={result} />
        </div>
      </main>
    </div>
  );
}

export default App;
