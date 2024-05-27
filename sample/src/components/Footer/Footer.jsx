import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h2>Shriyash R.</h2>
                </div>
                <div className="footer-links">
                    <a href="/about">About</a>
                    <a href="/project">Projects</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className="footer-social">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 MyPortfolio. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
