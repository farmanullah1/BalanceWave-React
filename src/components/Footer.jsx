import React from 'react';
import { Briefcase, ArrowUp, Code, Mail } from 'lucide-react';
import './Footer.css';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-top">
        <div className="footer-info">
          <h3>BalanceWave 〰️</h3>
          <p>Your smart & reliable mobile balance tax calculator for Pakistan. Get instant net balance calculations.</p>
        </div>

        <div className="footer-links-group">
          <h4>Connect</h4>
          <a href="https://farmanullah1.github.io/My-Portfolio/" target="_blank" rel="noopener noreferrer">
            <Briefcase size={16} /> Portfolio
          </a>
          <a href="https://github.com/farmanullah1" target="_blank" rel="noopener noreferrer">
            <GithubIcon size={16} /> GitHub
          </a>
          <a href="https://linkedin.com/in/farmanullah1" target="_blank" rel="noopener noreferrer">
            <LinkedinIcon size={16} /> LinkedIn
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-text">
          &copy; {currentYear} BalanceWave. Built with <span className="heart">❤️</span> by Farmanullah Ansari.
        </p>

        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
          <ArrowUp size={18} />
          <span>Top</span>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
