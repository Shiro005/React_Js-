import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <>
            <div className='header-container'>
                <div className="logo">
                    <NavLink to="/" exact>Shriyash R.</NavLink>
                </div>
                <nav className="navbar">
                    <ul className="nav-links">
                        <li><NavLink to="/" activeClassName="active-link">Home</NavLink></li>
                        <li><NavLink to="/about" activeClassName="active-link">About</NavLink></li>
                        <li><NavLink to="/project" activeClassName="active-link">Projects</NavLink></li>
                        <li><NavLink to="/contact" activeClassName="active-link">Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Header;
