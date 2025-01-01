import React from 'react';
import './ProjectCard.css';

const Card = ({ title, decribtion, img, link }) => {
    return (
        <div className="Card-Box">
            <div className='Link-Box'>
                <div>
                    <h2 className='text-box'>{title}</h2>
                    <p className='decribtion'>{decribtion}</p>
                </div>
                <button className='button'>
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        View Project
                    </a>
                </button>
            </div>
            <div className='img-Box'>
                <img className='linkImg' src={img} alt="Project Image"></img>
            </div>
        </div>
    );
};

export default Card;