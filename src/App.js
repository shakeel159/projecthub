import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import Hawkimg from "./Images/hawk_sky.jpg"
import DeerImg from "./Images/Deer_mountain.jpg"
import DesertArt from "./Images/Desert_art.png";
import ForesetArt from "./Images/Forest_art.jpg";
import ProfileInfo from "./ProfileCard";
import Time from './Clock.js';
import './App.css';

function App() {
  const images = [Hawkimg, DeerImg, DesertArt, ForesetArt]; // Array of image imports
  const [imageSrc, setImageSrc] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {

      setImageSrc((prevImage) => {
        const currentIndex = images.indexOf(prevImage);
        const nextIndex = (currentIndex + 1) % images.length; // Loop to first image
        return images[nextIndex];
      });
    }, 10000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images]);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
          <div className="Background-Image-Box">
            <div className="ForGround-Image-Content"> 
              <img src={imageSrc} alt="Dynamic"></img>
              <ProfileInfo />
              <Time/>
            </div>
          </div>
      </body>
      <footer>
        <div className="Footer-Background">
          <div className="Footer-Conent">
            <h1>Footer</h1>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
