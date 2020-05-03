import React from 'react';
import './style/EndMessage.css'

function EndMessage (props) {

    return (
    <div className = "GameEndMessageBox">
        <div className = {props.gameVictory ? "Win" : "Lost"}>
            {props.gameVictory
                ? <p>Vous avez réussi à échapper à Jumanji.<br/>Bien joué, Aventuriers !</p>
                : <p>Aventuriers, Jumanji vous a avalé<br/>Préparez vous à rejoindre la jungle</p>}
        </div>
    </div>
    )

}

export default EndMessage;