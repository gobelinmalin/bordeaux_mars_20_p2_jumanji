import React from 'react';
import './Intro.css';
import ReactPlayer from "react-player";


function Intro() {
  return (
    <div className="general">
        <div className="bg">
          <div className="intro-ring">
           <button className="intro" onClick={() => alert('Sélection Perso')}>
            <ReactPlayer className="movie" width={530} url="https://youtu.be/19qYDTNbGwA"
              controls={true} />          
           </button>
           </div>
        </div> 
    </div>
  );
}

export default Intro;