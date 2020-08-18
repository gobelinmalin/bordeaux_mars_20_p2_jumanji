import React from 'react';
import './style/EndMessage.css'

function EndMessage (props) {

    return (
    <div className = "GameEndMessageBox">
        <div className = {props.gameVictory ? "Win" : "Lost"}>
            {props.gameVictory
                ? <p>Victoire !<br/>Bien joué, Aventuriers !</p>
                : <p>Game Over<br/>Jumanji a gagné !</p>}
        </div>
    </div>
    )

}

export default EndMessage;