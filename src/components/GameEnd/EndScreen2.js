import React from 'react';
import './EndScreen2.css';

import PlayerEndCard from '../PlayerEndCard'


class EndScreen2 extends React.Component {



    render() {
        return (
        <div className ="Wrapper">
        <div className = "Voile">

            <div className = "GameEndResult">
                <div className = "GameEndMessageBox">
                    <p>Vous avez réussi à échapper à Jumanji.<br/>
                        Bien joué, Aventuriers !</p>
                </div>
            </div>

            <div className = "JumanjiBox">
                    <div className = "JumanjiLoader">
                        <button className = "Ring"></button>
                        <div className = "JumanjiMessage">Refermer le jeu</div>
                    </div>
            </div>
            

            <div className = "GamePlayersList">
                <div className="GamePlayersCardsBox">
                    <PlayerEndCard/>
                    <PlayerEndCard/>
                </div>
                <div className="GamePlayersCardsBox">
                    <PlayerEndCard/>
                    <PlayerEndCard/>
                </div>
            </div>
        
        </div>
        </div>

        )
            
    }

}

export default EndScreen2;