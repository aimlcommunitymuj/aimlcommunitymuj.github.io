import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Herosection.css';

const HeroSection = () => {
  return (
    <section className="herosection-container">

      <div className="floating-dots">
        <div className="floating-dot dot1"></div>
        <div className="floating-dot dot2"></div>
        <div className="floating-dot dot3"></div>
        <div className="floating-dot dot4"></div>
        <div className="floating-dot dot5"></div>
      </div>
      
      {/* Background pattern & floating blobs */}
      <motion.div
        className="herosection-pattern"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className="herosection-blob herosection-blob-2"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      />
      <motion.div
        className="herosection-blob herosection-blob-3"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      />

      <div className="herosection-content-wrapper">
        <div className="herosection-grid">
          {/* Left */}
          <motion.div
            className="herosection-left"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="herosection-highlight"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <span className="herosection-dot"></span>
              From Campus to Cutting-Edge
            </motion.div>

            <motion.h1
              className="herosection-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Welcome to{' '}
              <span className="herosection-highlighted-text">
                <span className="herosection-text-glow">AIML</span>
                <div className="herosection-glow-background"></div>
              </span>{' '}
              Community
            </motion.h1>

            <motion.p
              className="herosection-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Empowering the next generation of{' '}
              <span className="herosection-bold">AI and Machine Learning</span>{' '}
              enthusiasts through collaboration, learning, and cutting-edge innovation.
            </motion.p>

            <motion.div
              className="herosection-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <Link to="/events" className="herosection-btn herosection-btn-primary">
                <span className="herosection-btn-icon">
                  Explore Events
                  <svg className="herosection-btn-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <a
                href="https://forms.gle/jnAXwcwnoQacHC128"
                target="_blank"
                rel="noopener noreferrer"
                className="herosection-btn herosection-btn-secondary"
              >
                <span className="herosection-btn-icon">
                  Join Community
                  <svg className="herosection-btn-icon-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </span>
              </a>
            </motion.div>

            <motion.div
              className="herosection-stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <div className="herosection-stat-item">
                <div className="herosection-stat-number">500+</div>
                <div className="herosection-stat-label">Members</div>
              </div>
              <div className="herosection-stat-item">
                <div className="herosection-stat-number">50+</div>
                <div className="herosection-stat-label">Events</div>
              </div>
              <div className="herosection-stat-item">
                <div className="herosection-stat-number">25+</div>
                <div className="herosection-stat-label">Projects</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            className="herosection-right"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="herosection-code-box"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="herosection-code-editor">
                <div className="herosection-code-controls">
                  <div className="herosection-dot red"></div>
                  <div className="herosection-dot yellow"></div>
                  <div className="herosection-dot green"></div>
                </div>
                <div className="herosection-code-lines">
                  <div>import tensorflow as tf</div>
                  <div className="herosection-comment"># Building the future</div>
                  <div>model = tf.keras.Sequential([</div>
                  <div className="herosection-indent">Dense(128, activation='relu'),</div>
                  <div className="herosection-indent">Dropout(0.2),</div>
                  <div className="herosection-indent">Dense(10, activation='softmax')</div>
                  <div>])</div>
                </div>
              </div>

              <div className="herosection-features">
                <div className="herosection-feature">
                  <div className="herosection-feature-dot"></div>
                  Machine Learning Workshops
                </div>
                <div className="herosection-feature">
                  <div className="herosection-feature-dot"></div>
                  AI Research Projects
                </div>
                <div className="herosection-feature">
                  <div className="herosection-feature-dot"></div>
                  Industry Networking
                </div>
              </div>
            </motion.div>

            {/* Decorative blobs */}
            <motion.div
              className="herosection-deco-blob herosection-deco-blob-top-right"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            />
            <motion.div
              className="herosection-deco-blob herosection-deco-blob-bottom-left"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
