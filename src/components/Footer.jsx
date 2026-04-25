import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowUp, Github, Linkedin, Mail, Twitter, Globe } from 'lucide-react';
import './Footer.css';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="app-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <motion.div 
            className="footer-brand-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="f-logo">
              <span className="logo-icon">〰️</span>
              <span className="logo-text">BalanceWave</span>
            </div>
            <p className="f-desc">
              Your smart & reliable mobile balance tax calculator for Pakistan. 
              Built with precision for the 2026 tax regulations.
            </p>
            <div className="social-links">
              <motion.a whileHover={{ y: -3 }} href="https://github.com/farmanullah1" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20} /></motion.a>
              <motion.a whileHover={{ y: -3 }} href="https://linkedin.com/in/farmanullah1" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></motion.a>
              <motion.a whileHover={{ y: -3 }} href="https://twitter.com/farmanullah1" target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter size={20} /></motion.a>
              <motion.a whileHover={{ y: -3 }} href="mailto:contact@farmanullah.com" aria-label="Email"><Mail size={20} /></motion.a>
            </div>
          </motion.div>

          <motion.div 
            className="footer-links-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4>Resources</h4>
            <ul>
              <li><a href="https://farmanullah1.github.io/My-Portfolio/" target="_blank" rel="noreferrer"><Briefcase size={14} /> Portfolio</a></li>
              <li><a href="#"><Globe size={14} /> API Docs</a></li>
              <li><a href="#"><Code size={14} /> Open Source</a></li>
            </ul>
          </motion.div>

          <motion.div 
            className="footer-cta-col"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button className="back-to-top" onClick={scrollToTop}>
              <ArrowUp size={18} />
              <span>Back to Top</span>
            </button>
          </motion.div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} BalanceWave. Designed & Developed by <strong>Farmanullah Ansari</strong>.</p>
          <div className="f-badges">
            <span className="badge">v2.0.0</span>
            <span className="badge">Pakistan 2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
