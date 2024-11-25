import React, { useEffect, useState }from "react";
import './LogoPlate.css';
import Reactimg from './Logos/React.png';
import HTML from './Logos/React.png';
import VSC from './Logos/React.png';
import Unity from './Logos/React.png';
import Unreal from './Logos/React.png';

const LogoPlate = () =>{
    return(
        <div className="LogoPlate">
            <img src={Reactimg} alt="Html"></img>
            <img src={Reactimg} alt="CSS"></img>
            <img src={Reactimg} alt="React"></img>
            <img src={Reactimg} alt="VSC"></img>
            <img src={Reactimg} alt="Unity"></img>
            <img src={Reactimg} alt="Unreal"></img>
        </div>
    )
}

export default LogoPlate;