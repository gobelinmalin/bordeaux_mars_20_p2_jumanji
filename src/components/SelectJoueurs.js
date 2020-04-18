import React from 'react';
import JoueurA from './JoueurA'
import JoueurB from './JoueurB'
import JoueurC from './JoueurC'
import JoueurD from './JoueurD'
import SelectJoueur from './SelectJoueur.css'


function SelectJoueurs() {
  return (


       <body>
         <div className="containerlogo">
            <a href="https://zupimages.net/viewer.php?id=20/16/fc7x.png"><img src="https://zupimages.net/up/20/16/fc7x.png" alt="" /></a>
         </div>
        <h1>Sélection Joueur (4 max.)</h1>
      
          <div className="joueurA">
            <JoueurA />
          </div>
          <div className="joueurB">
            <JoueurB />
          </div>
          <div className="joueurC">
            <JoueurC />
          </div>
          <div className="joueurD">
            <JoueurD />
          </div>
   
        <div className="playCTAContainer">
          <button className="playCTA"> Jouer </button>
        </div>

      </body>
    
 
  );
}

export default SelectJoueurs;