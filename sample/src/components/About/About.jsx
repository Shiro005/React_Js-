import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <motion.section
            className="about-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            <div className="about-container">
                <h2>About Me</h2>
                <p>
                    I am a passionate Full Stack Developer with extensive experience in building dynamic web applications using React.js, Node.js, and other modern technologies. My expertise includes front-end and back-end development, database management, and responsive design. I love solving complex problems and am constantly seeking to learn and grow as a developer.
                </p>
                <p>
                    I hold a degree in Computer Science and have worked on various projects ranging from small business websites to large-scale applications. In my free time, I enjoy contributing to open-source projects and staying up-to-date with the latest industry trends.
                </p>
            </div>
        </motion.section>
    );
}

export default About;
