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
            </span>using Unity and C#. Completed Meta Front End Development Course to invest in <span>
            </span>my software development career.</p>
        </div>
    );
});


export default about;