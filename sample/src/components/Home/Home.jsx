import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
    return (
        <motion.div
            className="home-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                className="header"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <h1>Welcome to My Portfolio</h1>
                <p>Your one-stop solution for web development</p>
                <Link to="/projects" className="cta-button">View My Work</Link>
            </motion.div>
            <motion.div
                className="footer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
            >
                <p>&copy; 2024 MyPortfolio. All rights reserved.</p>
            </motion.div>
        </motion.div>
    );
}

export default Home;
