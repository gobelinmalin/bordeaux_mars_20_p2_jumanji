import React from 'react';
import './style/EndPlayerCard.css';

function EndPlayerCard (props) {

    /*
    getPlayerPic () {
        axios
        .get("https://api-jumanji.herokuapp.com/api/users")
        .then(response => response.data)
        .then(data =>
            this.setState({
                CharacterPic
                CharacterName                
            });
        )};
    */

    return (
        <div className="EndCard">
            <div className = {props.gameVictory ? "CharacterPicWin" : "CharacterPicLost"}></div>
            <div className = {props.gameVictory ? "CharacterNameWin" : "CharacterNameLost"}></div>
        </div>
    )
}

export default EndPlayerCard;