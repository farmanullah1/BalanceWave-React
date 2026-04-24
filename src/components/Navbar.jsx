import React, { useState } from 'react';
import { Palette, Moon, Sun, Briefcase } from 'lucide-react';
import './Navbar.css';

const SKINS = [
  { id: 'default', label: 'Ocean',  color: '#00B4D8' },
  { id: 'sunset',  label: 'Sunset', color: '#F4845F' },
  { id: 'forest',  label: 'Forest', color: '#06D6A0' },
  { id: 'violet',  label: 'Violet', color: '#7b2ff7' },
];

function Navbar({ theme, onToggleTheme, skin, onChangeSkin }) {
  const [skinOpen, setSkinOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Brand */}
        <a href="/" className="brand" aria-label="BalanceWave home">
          <svg className="brand-logo" viewBox="0 0 100 100" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="navGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--grad-from)" />
                <stop offset="100%" stopColor="var(--grad-to)" />
              </linearGradient>
            </defs>
            <rect width="100" height="100" rx="20" fill="url(#navGrad)" />
            <path d="M10 55 Q 30 25, 50 55 T 90 55" fill="none" stroke="white" strokeWidth="8" strokeLinecap="round" />
            <path d="M10 70 Q 30 40, 50 70 T 90 70" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="8" strokeLinecap="round" />
            <circle cx="50" cy="25" r="8" fill="white" />
          </svg>
          <span className="brand-text">BalanceWave</span>
        </a>

        {/* Right-side controls */}
        <div className="nav-right">
          {/* Portfolio link */}
          <a
            href="https://farmanullah1.github.io/My-Portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-link"
            title="Farmanullah's Portfolio"
          >
            <span className="port-icon"><Briefcase size={16} /></span>
            <span className="port-text">Portfolio</span>
          </a>

          {/* Skin picker */}
          <div className="skin-wrap">
            <button
              className="skin-toggle"
              onClick={() => setSkinOpen(o => !o)}
              title="Change color theme"
              aria-expanded={skinOpen}
            >
              <Palette size={18} />
            </button>
            {skinOpen && (
              <div className="skin-panel" role="menu">
                {SKINS.map(s => (
                  <button
                    key={s.id}
                    className={`skin-dot ${skin === s.id ? 'active' : ''}`}
                    style={{ background: s.color }}
                    onClick={() => { onChangeSkin(s.id); setSkinOpen(false); }}
                    title={s.label}
                    aria-label={`${s.label} skin`}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Dark mode toggle */}
          <button
            className="theme-btn"
            onClick={onToggleTheme}
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
