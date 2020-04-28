import React from 'react';

import './EndCircle.css';


function EndCircle (props) {

        return (
            <div>
            <div className = "JumanjiBox">
                    <div className = "JumanjiLoader">
                        <button className = "Ring"></button>
                        <div className = {props.gameVictory
                            ? "JumanjiMessageWin"
                            : "JumanjiMessageLost"}>
                                {props.gameVictory
                                ? <p>Refermer<br/> le jeu</p>
                                : <p>Entrer<br/> dans la jungle</p>}
                        </div>
                    </div>
            </div>
            </div>
        )
}

export default EndCircle;
    