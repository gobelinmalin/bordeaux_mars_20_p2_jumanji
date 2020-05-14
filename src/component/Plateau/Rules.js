import React from 'react';
import ReactPlayer from "react-player";
import { NavLink } from 'react-router-dom';
import './Style/Rules.css'


function Rules() {
  return (
      <div className="wrapper">
          
    <div className="rules">
        <div className="rules-p1">
            <h1 style={{
                color: "red"
            }}>JumanJi</h1>
            <p>Un jeu pour tous ceux qui espèrent</p>
            <h2 style={{
                color: "red"
            }}>Laisser derrière eux leur Univers</h2>
            <p>Lancez les Dés pour déplacer votre pion</p>
        </div>
       <div className="rules-p2">
       <h1 style={{
                color: "red"
            }}>Aventuriers Mefiez-Vous</h1>
            <p>Ne commencez que si vous avec l'intention de FINIR</p>
            <h2 style={{
                color: "red"
            }}>Les effets saissisant de ce jeu ne cesseront que quand l'un
                des joueurs aura atteint Jumanji
            </h2>
            
       </div>
       
    </div>
    <NavLink to="/plateau3" 
          style={{
                    color: "#4fb415",
                    border: "none",
                    textDecoration: 'none',

                 }}>
                     <button className="btn-rules"> Jouer </button>
         </NavLink>
    </div>
  );
}

export default Rules;