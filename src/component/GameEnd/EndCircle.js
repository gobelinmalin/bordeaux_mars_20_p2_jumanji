import React from 'react';
import { NavLink } from 'react-router-dom';

import './style/EndCircle.css';


function EndCircle (props) {

        return (
            <div>
            <div className = "JumanjiBox">
                    <div className = "JumanjiLoader">
                        <button className = "Ring"></button>
                        <div className = {props.gameVictory
                            ? "JumanjiMessageWin"
                            : "JumanjiMessageLost"}>
                                <NavLink classeName="JumanjiMessageWin" to="/select-player" 
                                style={{
                                    color: "#4fb415",
                                    border: "none",
                                    textDecoration: 'none',

                                    }}>
                                {props.gameVictory
                                ? <p>Rejouer<br/> </p>
                                : <p>Rejouer<br/> </p>}
                                </NavLink>
                        </div>
                    </div>
            </div>
            </div>
        )
}

export default EndCircle;
    