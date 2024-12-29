import React from 'react';
import './ProjectCard.css'
const Card = (screenshot) => {
    return(
        <div className="Card-Box">
            <div className='Link-Box'>
                <h2>{screenshot.title}</h2>
                <p>{screenshot.describtion}</p>
                <button className='button'>View Project</button>
            </div>
            <div className='img-Box'>
                <img className='linkImg' src={screenshot.img} alt="RecipeAppImg"></img>
            </div>
        </div>
    );
};


export default Card;