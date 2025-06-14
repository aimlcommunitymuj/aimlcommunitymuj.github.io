import './Event.css';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const Events = () => {
  const upcomingEvents = [
        // example :
    // {
    //     id: 1,
    //     title: "Intro to Generative AI",
    //     date: "July 5, 2025",
    //     time: "11:00 AM - 1:00 PM",
    //     location: "Online (Google Meet)",
    //     description: "Get started with GenAI tools, LLMs, and prompt engineering in this hands-on workshop.",
    //     type: "Workshop",
    //     status: "upcoming",
    //     attendees: 100,
    //     maxAttendees: 150,
    //     registerLink: "https://forms.gle/sample-google-form-link1"
    // },
  ];

  const pastEvents = [
    {
      id: 4,
      title: "AIML Ideathon 2024",
      date: "April 8, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "TMA Pai Auditorium",
      description: "Interdisciplinary idea pitching competition with 40+ teams presenting solutions to real-world challenges across domains including AI/ML, sustainability, healthcare, and education.",
      type: "Hackathon",
      status: "completed",
      attendees: 170
    },
    {
      id: 5,
      title: "Tech Expo 2024 - AIML Showcase",
      date: "September 20, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "AB-1 Ground Floor",
      description: "Exhibition of innovative AIML projects including Smart Healthcare, AWSS, and AutoProctor by MUJ students.",
      type: "Symposium",
      status: "completed",
      attendees: 350
    },
  ];

  return (
    <div className="event-container">
      <motion.div
        className="event-wrapper"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="event-header">
          <div className="event-badge">
            <Calendar className="icon" />
            Events & Learning Opportunities
          </div>
          <h1 className="event-heading">Community Events</h1>
          <p className="event-subheading">
            Join us for workshops, hackathons, panel discussions, and networking events.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="event-section">
          <div className="event-section-header">
            <h2 className="event-title">Upcoming Events</h2>
          </div>
          <div className="event-grid">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="event-card"
                whileHover={{ scale: 1.03 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeInUp}
              >
                <div className="event-card-header">
                  <span className="event-type-badge">{event.type}</span>
                  <div className="event-status-upcoming">Upcoming</div>
                  <h3 className="event-title-text">{event.title}</h3>
                </div>
                <div className="event-card-content">
                  <div className="event-info">
                    <div className="event-info-item"><Calendar className="icon" />{event.date}</div>
                    <div className="event-info-item"><Clock className="icon" />{event.time}</div>
                    <div className="event-info-item"><MapPin className="icon" />{event.location}</div>
                    <div className="event-info-item"><Users className="icon" />{event.attendees}/{event.maxAttendees}</div>
                  </div>
                  <div className="event-description">{event.description}</div>
                  <button className="event-register">
                    <a href={event.registerLink} target="_blank" rel="noopener noreferrer">Register Now</a>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="event-section">
          <div className="event-section-header">
            <h2 className="event-title">Past Events</h2>
          </div>
          <div className="event-grid">
            {pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="event-card event-past-card"
                whileHover={{ scale: 1.02 }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                variants={fadeInUp}
              >
                <div className="event-card-header">
                  <span className="event-type-badge">{event.type}</span>
                  <div className="event-completed-badge">Completed</div>
                  <h3 className="event-title-text">{event.title}</h3>
                </div>
                <div className="event-card-content">
                  <div className="event-info">
                    <div className="event-info-item"><Calendar className="icon" />{event.date}</div>
                    <div className="event-info-item"><Users className="icon" />{event.attendees} attended</div>
                    <div className="event-info-item"><MapPin className="icon" />{event.location}</div>
                  </div>
                  <div className="event-description">{event.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="event-cta"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="event-cta-title">Don't Miss Our Next Event!</h3>
          <p className="event-cta-sub">Stay updated with our latest events by joining our community.</p>
          <a href="https://forms.gle/jnAXwcwnoQacHC128" className="event-cta-button">Join Our Community</a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Events;
