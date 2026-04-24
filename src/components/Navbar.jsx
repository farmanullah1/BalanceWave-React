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
          BalanceWave
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
