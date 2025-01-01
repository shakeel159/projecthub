import React, { useEffect, useState }from "react";
import profile from './Images/shaq.jpg';
import './img.css';
const img = () =>{
    return(
        <div className="Profile-Component">
            <div className="IMG" >
                <img src={profile} alt="Placeholder Image" />
            </div>
        </div>
    )
}

export default img;