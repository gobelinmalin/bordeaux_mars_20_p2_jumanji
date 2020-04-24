import React from 'react';
import './FinalScreen.css';

import PlayerEndCard from './PlayerEndCard'


class FinalScreen extends React.Component {



    render() {
        return (
        <div className ="Wrapper">
        <div className = "Voile">
        <div className = "JumanjiColumn">
                <div className = "CreditsCard">
                    <div className = "CreditsCardInside">
                        <p>Team Tam Tam</p>
                        <p>WebStudio & Vintages Games</p>
                        <p>Gregory, Chloé,<br/>
                        Elodie, Michael</p>
                        <p>Jumanji WCS@2020</p>
                    </div>
                </div>
                <div className = "Jumanji">
                    <div className = "JumanjiLoader">
                        <button className = "Ring"></button>
                        <div className = "JumanjiMessage">Refermer le jeu</div>
                    </div>
                </div>      
            </div>
            
            <div className = "GameEndScreen">
                <div className = "EndGameMessageBox">
                    <p>Vous avez réussi à échapper à Jumanji.<br/>
                    Bien joué, Aventuriers !</p>
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
        </div>
        )
            
    }

}

export default FinalScreen; 