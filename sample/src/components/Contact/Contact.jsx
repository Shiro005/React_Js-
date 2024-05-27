import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    return (
        <motion.section
            className="contact-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2>Contact</h2>
            <p>If you want to get in touch, feel free to contact me via email at example@example.com.</p>
        </motion.section>
    );
}

export default Contact;
