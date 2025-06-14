import './Gallery.css';
import { motion } from 'framer-motion';
import { Image } from 'lucide-react';
import p1 from '../../assets/1.jpg';
import p3 from '../../assets/3.jpg';
import p4 from '../../assets/4.jpg';
import p5 from '../../assets/5.jpg';
import p6 from '../../assets/6.jpg';
import p8 from '../../assets/8.jpeg';
import p9 from '../../assets/9.jpeg';
import p10 from '../../assets/10.jpeg';
import p11 from '../../assets/11.jpeg';
import p12 from '../../assets/12.jpeg';
import p13 from '../../assets/13.jpeg';
import p14 from '../../assets/14.jpeg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' }
  })
};

const images = [
  { id: 1, src: p8 },
  { id: 2, src: p3 },
  { id: 3, src: p11 },
  { id: 4, src: p6 },
  { id: 5, src: p5 },
  { id: 6, src: p13 },
  { id: 7, src: p14 },
  { id: 8, src: p12 },
  { id: 9, src: p9 },
  { id: 10, src: p10 },
  { id: 11, src: p4 },
  { id: 12, src: p1 },
];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <motion.div
        className="gallery-wrapper"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={0}
      >
        <div className="gallery-header">
          <div className="gallery-badge">
            <Image className="icon" />
            Community Gallery
          </div>
          <h1 className="gallery-heading">Gallery</h1>
          <p className="gallery-subheading">
            Explore moments from our workshops, events, research activities, and team collaborations.
          </p>
        </div>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              className="gallery-card"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <img src={img.src} loading="lazy" className="gallery-image" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;
