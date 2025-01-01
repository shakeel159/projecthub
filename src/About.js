import React, { forwardRef } from 'react';
import './ProjectCard.css'
import './About.css';
const about = forwardRef((props, ref)  => {
    return(
        <div ref={ref} className="CardBox">
            <h1>About Me</h1>
            <div className='CardBox-Box'>
                <div className='CardBox-heading'>
                    <h2>Education</h2>
                </div>
                <div className='CardBox-Text'>
                    <p className='about'>
                    Recent graduate from Columbia College Chicago with a major in Programming.
                    Possess a strong foundation in game development, with hands-on experience
                    using an IDE such as Visual Studio, understanding C# as an object-oriented programming language, 
                    and the ability to use C# to create games in MonoGame and Unity."
                    </p>
                </div>
                <div className='CardBox-heading'>
                    <h2>personal Learning</h2>
                </div>
                <div className='CardBox-Text'>
                    <p  className='about'>
                        After graduating some time was invested towards developing  Front End skills completing projects and 
                        completing Meta Front End Development Course which provided definitive  skills 
                        and knowledge  on Front End Development Process, Programming with JavaScript, advanced React Topics, internet security, client side validations,
                        and a project to put my skills to the test.
                    </p>
                </div>
                <div className='CardBox-Text'>
                    <p  className='about'>
                    Above in Projects section, you will see a mix of projects that were completed and during my time at Columbia College Chicago
                    and projects that were done outside.
                    if you have any questions or would like to see more you can reach out to me here <span className='bold'>JazibShaq@gmail.com </span>
                    or go to my socials which can be accessed on the banner of this page.
                    </p>
                </div>
            </div>
        </div>
    );
});


export default about;