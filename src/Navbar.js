import React, { useState, useRef } from 'react';
import './Navbar.css';
import About from './About.js';

// Rename 'bar' to 'Bar' to follow React naming conventions
const Bar = ({aboutSectionRef, projectSectionRef }) => {
    

    // Function to scroll to the About section when the button is clicked
    const handleAbout = () => {
        if (aboutSectionRef.current) {
            aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleProjects = () => {
        if (projectSectionRef.current) {
            projectSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const handleHome = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <button className='button' onClick={handleHome}>Home</button>
                    </li>
                    <li>
                        <button className='button' onClick={handleProjects}>Projects</button>
                    </li>
                    <li>
                        <button className='button' onClick={handleAbout}>About</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Bar;