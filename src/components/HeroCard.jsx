import React from 'react';
import './HeroCard.css';

const BARS = [8, 16, 22, 28, 22, 16, 8, 14, 20, 14, 8];

function HeroCard() {
  return (
    <div className="glass-card hero-card fade-in">
      <h1 className="hero-title">BalanceWave</h1>
      <p className="hero-sub">Smart SIM balance calculation for Pakistan</p>
      <div className="wave-line" aria-hidden="true">
        {BARS.map((h, i) => (
          <span
            key={i}
            className="wave-bar"
            style={{
              height: `${h}px`,
              animationDelay: `${i * 0.1}s`,
              background: i >= 7 ? 'var(--danger)' : i === 3 ? 'var(--wave)' : 'var(--accent)',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroCard;
