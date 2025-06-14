import React from 'react';
import { motion } from 'framer-motion';
import './Features.css';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const FeaturesSection = () => {
  return (
    <motion.section
      className="feature-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{  amount: 0.3 }}
    >
      <div className="feature-container">
        <div className="feature-header">
          <h2 className="feature-title">What We Offer</h2>
          <p className="feature-subtitle">
            Discover the opportunities and resources available to our community members
          </p>
        </div>

        <div className="feature-grid">
          {[{
            title: 'Learning Resources',
            description: 'Access to cutting-edge AI/ML tutorials, workshops, and educational content curated by experts.',
            svg: (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13
                  C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5
                  16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746
                  0-3.332.477-4.5 1.253" />
            )
          }, {
            title: 'Networking',
            description: 'Connect with like-minded individuals, industry professionals, and potential collaborators.',
            svg: (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7
                  20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0
                  0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0
                  11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            )
          }, {
            title: 'Innovation Projects',
            description: 'Participate in hands-on projects and hackathons to apply your AI/ML knowledge in real-world scenarios.',
            svg: (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828
                9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0
                11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            )
          }].map((feature, i) => (
            <motion.div
              className="feature-card"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              key={i}
            >
              <div className="feature-icon-box">
                <svg className="feature-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {feature.svg}
                </svg>
              </div>
              <h3 className="feature-card-title">{feature.title}</h3>
              <p className="feature-card-text">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
