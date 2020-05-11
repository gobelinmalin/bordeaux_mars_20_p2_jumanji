import React from 'react';
import './style/FinalScreen.css';
import { NavLink } from 'react-router-dom';
import EndMessage from './EndMessage'
import EndCircle from './EndCircle'
import EndPlayerCard from './EndPlayerCard'
import Player1 from '../Plateau/LeftSide/Players/PlayersComponents/Player1'
import Player2 from '../Plateau/LeftSide/Players/PlayersComponents/Player2'
import Player3 from '../Plateau/LeftSide/Players/PlayersComponents/Player3'
import Player4 from '../Plateau/LeftSide/Players/PlayersComponents/Player4'
import PlayerEnd1 from './PlayerEnd1'


class FinalScreen extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            gameVictory : false,
            players : localStorage.getItem('players')
        };
    }

    render() {

        let endPlayer
        if (this.state.players == "1") {
            endPlayer = [ <PlayerEnd1 /> ]
            } else if (this.state.players== "2") {
            endPlayer = [ <Player2 /> ]
            } else if (this.state.players == "3") {
            endPlayer = [ <Player3 /> ]
            } else if (this.state.players == "4") {
            endPlayer = [ <Player4 /> ]
            } else if (this.state.players == "1,2") {
            endPlayer = [ <Player1 />, <Player2 /> ]
            } else if (this.state.players == "1,3") {
            endPlayer = [ <Player1 />, <Player3 /> ]
            } else if (this.state.players == "1,4") {
            endPlayer = [ <Player1 />, <Player4 /> ]
            } else if (this.state.players == "1,2,3") {
            endPlayer= [ <Player1 />, <Player2 />, <Player3 /> ]
            } else if (this.state.players == "1,2,3,4") {
            endPlayer = [ <Player1 />, <Player2 />, <Player3 />, <Player4 /> ]
            } else if (this.state.players == "2,3") {
            endPlayer = [ <Player2 />, <Player3 />]
            } else if (this.state.players == "2,3,4") {
            endPlayer = [ <Player2 />, <Player3 />, <Player4 /> ]
            } else if (this.state.players == "2,4") {
            endPlayer = [ <Player2 />, <Player4 /> ]
            } else if (this.state.players == "3,4") {
            endPlayer = [ <Player3 />, <Player4 /> ]
            }



        return (
        <div className ="Wrapper">
        <div className = "Voile">

            <div className = "GameEndResult">
                <EndMessage gameVictory={this.state.gameVictory} />
            </div>

            <EndCircle gameVictory={this.state.gameVictory}/>



            <div className = "GamePlayersList">
                    {/* <EndPlayerCard />
                    <EndPlayerCard gameVictory={this.state.gameVictory}/>
                    <EndPlayerCard gameVictory={this.state.gameVictory}/>
                    <EndPlayerCard gameVictory={this.state.gameVictory}/> */}
                    {endPlayer}
            </div>

        </div>
        </div>

        )

    }

}

export default FinalScreen;