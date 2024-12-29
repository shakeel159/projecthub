import logo from './logo.svg';
import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hawkimg from "./Images/hawk_sky.jpg"
import DeerImg from "./Images/Deer_mountain.jpg"
import DesertArt from "./Images/Desert_art.png";
import ForesetArt from "./Images/Forest_art.jpg";
import cp01 from "./Images/cyberpunk001.png";
import cp02 from "./Images/Cyberpunk002.png";
import cp03 from "./Images/Cyberpunk003.png";
import cp04 from "./Images/Cyberpunk004.png";
import cp05 from "./Images/Cyberpunk005.png";
import cp06 from "./Images/Cyberpunk006.png";
import cp07 from "./Images/Cyberpunk007.png";
import ProfileInfo from "./ProfileCard";
import Abt from "./About.js";
import Certificate from "./Certificates.js";
import Time from './Clock.js';
import Bar from './Navbar.js';
import ProjectCard from './ProjectCard.js';
import ProfilePic from './img.js';
import recipeimg from './Images/web.JPG';
import addvonImg from './Images/AddvonImg.PNG';
import './App.css';

const Home = () => <div><h1>Home Page</h1></div>;
const Projects = () => <div><h1>Projects Page</h1></div>;
const About = () => <div><h1>About Page</h1></div>;

function App() {
  const images = [Hawkimg, DeerImg, DesertArt, ForesetArt, cp01, cp02,cp03,cp05,cp06]; // Array of image imports
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

  const aboutSectionRef = useRef(null);
  const projectSectionRef = useRef(null);
  return (
    <div className="AppContainer">
      <header className="App-header">
        <div className="nbar">
          <Bar aboutSectionRef={aboutSectionRef} projectSectionRef={projectSectionRef} />
        </div>
      </header>
      <div className="Background-Image-Box">
        <div className="ForGround-Image-Content">
          <img src={imageSrc} alt="Dynamic" />
          <ProfileInfo />
          <Time />
        </div>
      </div>
      <div className="ContentWrapper">
        <div className="Certificate-Box">
          <Certificate />
        </div>
        <div className="Project-Box">
          <div className="Projects-Title" ref={projectSectionRef}>
            <h1>Projects</h1>
          </div>
          <ProjectCard
            class="ProjectCard"
            img={recipeimg}
            title="Recipe-App"
            description="Find your favorite foods and the recipes to make them."
          />
          <ProjectCard
            class="ProjectCard"
            img={addvonImg}
            title="Addvon Game"
            description="2D action sidescroller made in Unity with C#."
          />
        </div>
        <div className="About-Box">
          <Abt ref={aboutSectionRef}/>
        </div>
        <ProfilePic />
      </div>

    <footer>
      <div className="Footer-Background">
        <div className="Footer-Conent">
          <h3>CopyRight @JazibPortfolio</h3>
          <h3>Linked</h3>
          <h3>Indeed</h3>
          <h3>GitHub</h3>
          <h3>Portfolio</h3>
        </div>
      </div>
    </footer>
  </div>
  );
}

export default App;