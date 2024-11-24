import logo from './logo.svg';
import React, { useState } from 'react';
import Hawkimg from "./Images/hawk_sky.jpg"
import './App.css';

function App() {
  const [imageSrc, setImageSrc] = useState(Hawkimg);

  const updateImage = () => {
    setImageSrc(Hawkimg);
  };
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
      <body>
          <div className="Background-Image-Box">
            <div className="Background-Image-Content"> 
              <img src={imageSrc} alt="Dynamic"></img>
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
