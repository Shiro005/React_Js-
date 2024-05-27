import React from 'react';
import { motion } from 'framer-motion';
import './Project.css';

const Projects = () => {
    return (
        <motion.section
            className="projects-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <h2>Projects</h2>
            <div className="project-cards">
                <div className="card">
                    <h3>Project One</h3>
                    <p>Description of project one.</p>
                </div>
                <div className="card">
                    <h3>Project Two</h3>
                    <p>Description of project two.</p>
                </div>
                <div className="card">
                    <h3>Project Three</h3>
                    <p>Description of project three.</p>
                </div>
            </div>
        </motion.section>
    );
}

export default Projects;
