import React, { useEffect, useState }from "react";
import './Clock.css';

const Clock = () =>{

    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        },1000);
        return () => clearInterval(interval);
    },[]);
    return(
        <div className="Time"> 
            <h1>{time}</h1>
        </div>
    )
}

export default Clock;