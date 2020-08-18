import React from 'react'
import './style/EndPlayerCard.css';

class Player1Win extends React.Component {
    render(){
        return (
            <div className="EndCard">
                <div className="CharacterPicWin1">
                    <img className="endPlayer1pic" src="https://zupimages.net/up/20/16/2tpa.png" alt="Allan Parish" />

                </div>
                <div className="CharacterNameWin1">
                Allan Parish

                </div>

            </div>

        )
    }
}
export default Player1Win;