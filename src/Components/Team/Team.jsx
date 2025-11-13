import './Team.css';
import { motion } from 'framer-motion';
import {FaLinkedin, FaInstagram, FaUsers } from 'react-icons/fa';
import p1 from '../../assets/varun_sir.png';
import p2 from '../../assets/Ishaan.jpg'
import p3 from '../../assets/Gotham.jpg'
import p4 from '../../assets/mannya.jpg'
import p5 from '../../assets/shauviq.jpg'
import p6 from '../../assets/samar.jpeg'
import p7 from '../../assets/rishi.jpg'
import p8 from '../../assets/ashmit.jpg'
import p9 from '../../assets/khushi.jpg'
import p10 from '../../assets/vedika.jpg'
import p11 from '../../assets/kaushik.jpg'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' }
  })
};

const faculty = [
  {
    id: 1,
    name: 'Dr. Varun Tiwari',
    designation: 'Faculty Convenor',
    image: p1,
    linkedin: 'https://www.linkedin.com/in/dr-varun-tiwari-91837a52/'
  }
];

const executives = [
  {
    id: 1,
    name: 'Ishaan Verma',
    designation: 'Chair Person',
    image: p2,
    linkedin: 'https://www.linkedin.com/in/ishaan-v/',
    instagram: 'https://www.instagram.com/ishaanv_06?igsh=cXJmemVhMjZmMmxi'
  },
  {
    id: 2,
    name: 'Gotham Kothari',
    designation: 'Vice-Chair Person',
    image: p3,
    linkedin: 'https://www.linkedin.com',
    instagram: 'https://www.instagram.com/gotham.kothari'
  },
  {
    id: 3,
    name: 'Mannya Agarwal',
    designation: 'General Secretary',
    image: p4,
    linkedin: 'https://www.linkedin.com/in/mannya-agarwal-0b8399297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagram: 'https://www.instagram.com/luv.mannya/profilecard/?igsh=MXhtOXppbnYzaDY5bQ=='
  },
  {
    id: 4,
    name: 'Shauiq Mishra',
    designation: 'Technical Director',
    image: p5,
    linkedin: 'https://www.linkedin.com/in/shauviqmishra/',
    instagram: 'https://www.instagram.com/shauviqmishra/'
  },
  {
    id: 5,
    name: 'Samar Verma',
    designation: 'Treasurer',
    image: p6,
    linkedin: 'https://www.linkedin.com/in/samar-verma-f16sam',
    instagram: 'https://www.instagram.com/samuel_f16sam/'
  },
  {
    id: 6,
    name: 'Rishi Sharma',
    designation: 'Event Manager',
    image: p7,
    linkedin: 'https://www.linkedin.com/',
    instagram: 'https://www.instagram.com/rishi_sharma_11/'
  },
  {
    id: 7,
    name: 'Ashmit Agrawal',
    designation: 'Event Manager',
    image: p8,
    linkedin: 'https://www.linkedin.com/in/ashmit-agrawal-b26449319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagram: 'https://www.instagram.com/ash_agrawal001/'
  },
  {
    id: 8,
    name: 'Khushi Arya',
    designation: 'Manager Director',
    image: p9,
    linkedin: 'https://www.linkedin.com/in/khushi-arya-4782682b1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagram: 'https://www.instagram.com/khushiarya_25?igsh=MWJ2dTN2NWxxdDVibA=='
  },
  {
    id: 9,
    name: 'Vedika Amol',
    designation: 'HR Director',
    image: p10,
    linkedin: 'http://www.linkedin.com/in/vedika-amol-deshpande-02ab2435b',
    instagram: 'https://www.instagram.com/vedikais2cool'
  },
  {
    id: 10,
    name: 'S Kaushik Rao',
    designation: 'P&R Head',
    image: p11,
    linkedin: 'LinkedIn - https://www.linkedin.com/in/s-kaushik-rao-33336a289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    instagram: 'https://www.instagram.com/cow_chick'
  },
];

const Team = () => {
  return (
    <div className="team-container">
      <motion.div
        className="team-wrapper"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="team-header">
          <h1 className="team-heading">Meet the Team</h1>
          <p className="team-subheading">
            Get to know the faculty mentors and student leaders behind the AIML Club.
          </p>
        </div>

        {/* Faculty Section */}
        <div className="team-section">
          <h2 className="team-section-title">Faculty Advisor</h2>
          <div className="team-grid">
            {faculty.map((member, index) => (
              <motion.div
                className="team-card faculty-card"
                key={member.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                custom={index}
              >
                <img src={member.image} alt={member.name} className="team-image" />
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.designation}</p>
                {member.linkedin && (
                  <div className="team-links">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={20} />
                    </a>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Executive Section */}
        <div className="team-section">
          <h2 className="team-section-title">Executive Members</h2>
          <div className="team-grid">
            {executives.map((member, index) => (
              <motion.div
                className="team-card"
                key={member.id}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                custom={index}
              >
                <img src={member.image} alt={member.name} className="team-image" />
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.designation}</p>
                <div className="team-links">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={18} />
                    </a>
                  )}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ marginLeft: '10px' }}
                    >
                      <FaInstagram size={18} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Team;
