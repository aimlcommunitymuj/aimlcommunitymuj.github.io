import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Header.css';
import LOGO from '../../assets/LOGO.png';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Team', path: '/team' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Join Us', path: 'https://forms.gle/jnAXwcwnoQacHC128', external: true },
  ];

  return (
    <motion.header
      className="header-container"
      initial={{ y: -60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <div className="header-content">
        <Link to="/" className="header-logo">
          <img
            src={LOGO}
            alt="AIML Community Logo"
            className="header-logo-img"
          />
          <div>
            <h1 className="header-title">AIML Community</h1>
            <p className="header-subtitle">Unleashing Intelligence, Fostering Innovation</p>
          </div>
        </Link>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <nav className={`header-nav ${menuOpen ? 'show' : ''}`}>
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.name}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="header-button"
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.path}
                className={`header-link ${
                  location.pathname === item.path ? 'header-link-active' : ''
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            )
          )}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
