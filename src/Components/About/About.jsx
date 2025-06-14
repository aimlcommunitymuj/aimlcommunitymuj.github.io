import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

const About = () => {
  const cardData = [
    {
      title: 'Workshops & Training',
      desc: 'Regular workshops on latest AI/ML technologies, tools, and frameworks.',
      svg: (
        <svg className="about-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      bg: 'primary',
    },
    {
      title: 'Research Projects',
      desc: 'Collaborative research initiatives addressing real-world problems using AI/ML.',
      svg: (
        <svg className="about-icon about-color-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      bg: 'secondary',
    },
    {
      title: 'Community Events',
      desc: 'Networking events, hackathons, and conferences to connect with peers.',
      svg: (
        <svg className="about-icon about-color-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      bg: 'accent',
    },
  ];

  const valueData = [
    {
      title: 'Innovation',
      text: "Embracing creativity and pushing the boundaries of what's possible.",
    },
    {
      title: 'Collaboration',
      text: 'Working together to achieve greater results than we could alone.',
    },
    {
      title: 'Learning',
      text: 'Continuous growth and knowledge sharing within our community.',
    },
    {
      title: 'Inclusivity',
      text: 'Welcoming all backgrounds and experience levels in our community.',
    },
  ];

  return (
    <div className="about-wrapper">
      <div className="about-container">
        {/* Header */}
        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="about-title">About AIML Community</h1>
          <p className="about-subtitle">
            We are a passionate community of students, researchers, and professionals dedicated to advancing artificial intelligence and machine learning knowledge.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="about-grid">
          <motion.div
            className="about-box about-box-secondary"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="about-section-title-1">Our Mission</h2>
            <p className="about-text-1">
              To create an inclusive environment where AI and ML enthusiasts can learn, collaborate, and innovate together. We strive to bridge the gap between theoretical knowledge and practical application through hands-on projects, workshops, and mentorship programs.
            </p>
          </motion.div>
          <motion.div
            className="about-box about-box-accent"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="about-section-title-2">Our Vision</h2>
            <p className="about-text-2">
              To be the leading AI/ML community that empowers individuals to shape the future of technology. We envision a world where our members become the innovators and leaders driving positive change through artificial intelligence and machine learning.
            </p>
          </motion.div>
        </div>

        {/* What We Do */}
        <div className="about-section">
          <h2 className="about-section-heading">What We Do</h2>
          <div className="about-grid-3">
            {cardData.map((card, index) => (
              <motion.div
                className="about-card"
                key={index}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{  duration: 0.5 }}
              >
                <div className={`about-icon-circle about-bg-${card.bg}`}>{card.svg}</div>
                <h3 className="about-card-title">{card.title}</h3>
                <p className="about-card-text">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="about-values-box">
          <h2 className="about-section-heading-core">Our Core Values</h2>
          <div className="about-grid-4">
            {valueData.map((value, index) => (
              <motion.div
                className="about-value-card"
                key={index}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="about-value-title">{value.title}</h3>
                <p className="about-value-text">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
