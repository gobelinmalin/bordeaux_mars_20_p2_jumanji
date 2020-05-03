import React from 'react';
import './Intro.css'
import ReactPlayer from "react-player";
import { NavLink } from 'react-router-dom';


function Intro() {
  return (
    <div className="general">
        <div className="bg">
          <div className="intro-ring">
         
          <iframe src='https://www.youtube.com/embed/19qYDTNbGwA?autoplay=1'
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
            title='video'
            width={535}
            height={350}
            className="movie" 
          />
           </div>
 
        </div> 
       <div className="containerBouton">
        <button className="selectPlayerContainer2">
           <NavLink className="toSelectPlayer" to="/select-player">Tenter l'aventure !</NavLink>        
           </button>
           </div>

    </div>
  );
}

export default Intro;