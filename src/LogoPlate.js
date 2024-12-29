import React, { useEffect, useState }from "react";
import './LogoPlate.css';
import Reactimg from './Logos/React.png';
import HTML from './Logos/Html.png';
import VSC from './Logos/VSC.png';
import Unity from './Logos/Unity.png';
import Unreal from './Logos/Unreal.png';
import Css from './Logos/CSS.png';

const LogoPlate = () =>{
    return(
        <div className="LogoPlate">
            <img src={HTML} alt="Html"></img>
            <img src={Css} alt="CSS"></img>
            <img src={Reactimg} alt="React"></img>
            <img src={VSC} alt="VSC"></img>
            <img src={Unity} alt="Unity"></img>
            <img src={Unreal} alt="Unreal"></img>
        </div>
    )
}

export default LogoPlate;