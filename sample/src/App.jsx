import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'

const App = () => {
    return (
        <>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="about" element={<About />} />
                    <Route path="project" element={<Project />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </>
    )
}

export default App