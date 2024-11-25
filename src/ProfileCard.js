import React from 'react';
import LogoPlate from './LogoPlate.js'
import './ProfileCard.css';

const ProfileCard = () => {
    return (
        <div className='Profile-Card'>
        <h1>Jazib Shakeel</h1>
        <p>Front End Developer</p>
        <p>Location: Chicago, IL</p>
        <p>Contact: JazibShaq@Gmail.com</p>
        <div className='LogoCard'>
            <LogoPlate/>
        </div>
    </div>
    )
};

export default ProfileCard;