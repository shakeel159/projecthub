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
import addvonImg from './Images/AddvonImg.PNG'
import crocBashPic from './Images/CB_Icon.png'
import lemonPic from './Images/lemonpic.PNG'
import TCWPP from './Images/TCWPP.png'
import CarWebImg from './Images/CarCapture.PNG'
import CoffeeWeb from './Images/CoffeeWeb.PNG'
import './App.css';

const Home = () => <div><h1>Home Page</h1></div>;
const Projects = () => <div><h1>Projects Page</h1></div>;
const About = () => <div><h1>About Page</h1></div>;

const linkedIn ='https://www.linkedin.com/in/jazib-shakeel/details/projects/';

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
          <div className="Projects-Text" ref={projectSectionRef}>
            <div className='projecy-title'>
              <h1>Projects</h1>
            </div>
            <div className='projecy-info'>
            <p>
            Additional information about projects, such as other collaborators, can be found on my{" "}
              <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>.
              To view the source code, the GitHub links are also public and accessible through LinkedIn or at the bottom of the page.
            </p>
            </div>
          </div>
          <ProjectCard
            class="ProjectCard"
            img={CarWebImg}
            title="Car Detailing Site"
            decribtion="small business website created with WordPress"
             link="https://ihr.wri.temporary.site/website_c980d024/"
          />
          <ProjectCard
            class="ProjectCard"
            img={CoffeeWeb}
            title="small Coffee business"
            decribtion="small business website created with WordPress"
             link="https://ihr.wri.temporary.site/website_738eaddf/"
          />
          <ProjectCard
            class="ProjectCard"
            img={lemonPic}
            title="Little Lemon Resturant"
            decribtion="Meta Course React Capstone Project App"
             link="https://shakeel159.github.io/lemon-app/"
          />
          <ProjectCard
            class="ProjectCard"
            img={recipeimg}
            title="Recipe-App"
            decribtion="Vite+React app to Find your favorite foods and the recipes and make them."
             link="https://shakeel159.github.io/Recipe-App/"
          />
          <ProjectCard
            class="ProjectCard"
            img={crocBashPic}
            title="Croc Bash"
            decribtion="Collaboration with other Columbia College Chicago Students to create VR interactive Game"
            link="https://www.youtube.com/watch?v=ImPOPqhTMcY"
          />
          <ProjectCard
            class="ProjectCard"
            img={addvonImg}
            title="Addvon Game"
            decribtion="2D action sidescroller made in Unity with C#."
            link="https://itch.io/profile/shakeel159"
          />
          <ProjectCard
            class="ProjectCard"
            img={TCWPP}
            title="CWPP Concept"
            decribtion="collaborative project creating a 2D game focusing on exploration and trading."
            link="https://baerutt.itch.io/the-child-who-picked-pebble?download"
          />
        </div>
        <div className="About-Box">
          <Abt ref={aboutSectionRef}/>
        </div>
        <ProfilePic/>
      </div>

    <footer>
      <div className='FooterHead'>
            <p>© 2025 Jazib Shakeel prtfolio page</p>
            <div className="Footer_Body">
                <div className="Contact">
                <h3 className="head">Contact</h3>
                <div>
                  <p>JazibShaq@gmail.com</p>
                </div>
                <div>
                  <p>832-855-2019</p>
                </div>
                </div>
                <div className="Socials">
                <h3 className="head">Socials</h3>
                <div>
                  <a href="https://www.linkedin.com/in/jazib-shakeel/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div>
                  <a href="https://github.com/shakeel159" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
                <div>
                  <a href="https://www.hackerrank.com/profile/jazibshaq" target="_blank" rel="noopener noreferrer">hackerRank</a>
                </div>
                </div>
            </div>
        </div>
    </footer>
  </div>
  );
}

export default App;