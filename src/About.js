import React, { forwardRef } from 'react';
import './ProjectCard.css'
import './About.css';
const about = forwardRef((props, ref)  => {
    return(
        <div ref={ref} className="CardBox">
            <img src="" alt=""></img>
            <h2>About Me</h2>
            <p className='about'>Recent Graduate from Columbia College Chicago with a major in Programming. <span>
            </span>Possess a strong foundation in game development, with hands-on experience <span>
            </span>using Unity and C#. After graduating some time was invested towards devoloping Front End skills completing projects and 
            Completed Meta Front End Development Course during that time 
            <span>Above in Projects section, you will see a mix of projects that were completed and during my time at Columbia College Chicago</span>
            <span>and projects that were done to learn React.js</span>
            <span>if you have any questions or would like to see more you can reach out to me here <span><a>JazibShaq@gmail.com</a></span></span>
            <span>or go to my socials which can be accessed on the banner of this page.</span>
            </p>
        </div>
    );
});


export default about;