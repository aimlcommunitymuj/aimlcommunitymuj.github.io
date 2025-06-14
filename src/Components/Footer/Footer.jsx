import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Footer.css';
import logo from '../../assets/logo.png'; // Adjust the path as needed

const footerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      initial="hidden"
      whileInView="visible"
      variants={footerVariants}
    >
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Section */}
          <motion.div className="footer-brand" variants={footerVariants}>
            <div className="footer-logo-box">
              <motion.img
                src={logo}
                alt="AIML Community Logo"
                className="footer-logo"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              />
              <motion.h3 className="footer-title">AIML Community</motion.h3>
            </div>
            <p className="footer-description">
              Unleashing Intelligence, Fostering Innovation through collaboration and cutting-edge AI/ML research.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="footer-links" variants={footerVariants}>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-list">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/events" className="footer-link">Events</Link></li>
              <li><Link to="/team" className="footer-link">Team</Link></li>
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div className="footer-social" variants={footerVariants}>
            <h4 className="footer-heading">Connect With Us</h4>
            <div className="footer-icons">
              {[
                { icon: <FaInstagram />, href: 'https://www.instagram.com/_aiml_community_/' },
                { icon: <FaLinkedin />, href: 'https://www.linkedin.com/company/aiml-community-muj/' },
                { icon: <FaDiscord />, href: 'https://discord.gg/VQC9tC8H' },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-icon-link"
                  whileHover={{ scale: 1.3, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <p className="footer-copy">© 2025 AIML Community. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
