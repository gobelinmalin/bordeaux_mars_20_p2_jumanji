import React from 'react';
import './style/FinalScreen.css';
import { NavLink } from 'react-router-dom';
import EndMessage from './EndMessage'
import EndCircle from './EndCircle'
import EndPlayerCard from './EndPlayerCard'
import PlayerEnd1 from './Player1Win'
import PlayerEnd2 from './Player2Win'
import PlayerEnd3 from './Player3Win'
import PlayerEnd4 from './Player4Win'

//FRAMER LIBRARY
import { motion, AnimatePresence } from 'framer-motion'
//FRAMER LIBRARY

class GameWin extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            gameVictory : true,
            players : localStorage.getItem('players')
        };
    }

    render() {

        let endPlayer
        if (this.state.players == "1") {
            endPlayer = [ <PlayerEnd1 /> ]
            } else if (this.state.players== "2") {
            endPlayer = [ <PlayerEnd2 /> ]
            } else if (this.state.players == "3") {
            endPlayer = [ <PlayerEnd3 /> ]
            } else if (this.state.players == "4") {
            endPlayer = [ <PlayerEnd4 /> ]
            } else if (this.state.players == "1,2") {
            endPlayer = [ <PlayerEnd1 />, <PlayerEnd2/> ]
            } else if (this.state.players == "1,3") {
            endPlayer = [ <PlayerEnd1/>, <PlayerEnd3  /> ]
            } else if (this.state.players == "1,4") {
            endPlayer = [ <PlayerEnd1 />, <PlayerEnd4 /> ]
            } else if (this.state.players == "1,2,3") {
            endPlayer= [ <PlayerEnd1/>, <PlayerEnd2 />, <PlayerEnd3  /> ]
            } else if (this.state.players == "1,2,3,4") {
            endPlayer = [ <PlayerEnd1 />, <PlayerEnd2 />, <PlayerEnd3 />, <PlayerEnd4 /> ]
            } else if (this.state.players == "2,3") {
            endPlayer = [ <PlayerEnd2 />, <PlayerEnd3  />]
            } else if (this.state.players == "2,3,4") {
            endPlayer = [ <PlayerEnd2 />, <PlayerEnd3  />, <PlayerEnd4 /> ]
            } else if (this.state.players == "2,4") {
            endPlayer = [ <PlayerEnd2 />, <PlayerEnd4 /> ]
            } else if (this.state.players == "3,4") {
            endPlayer = [ <PlayerEnd3  />, <PlayerEnd4 /> ]
            }



        return (
        <motion.div
        animate={{scale: [0.9, 1, 1,0.9]}}
                    transition={{
                        type:"tween",
                        stiffness: 10,
                        yoyo: Infinity,
                        duration: 1
                         }}
        className ="Wrapper">
        <div className = "Voile">

            <div

            className = "GameEndResult">
                <EndMessage gameVictory={this.state.gameVictory} />
            </div>

            <EndCircle gameVictory={this.state.gameVictory}/>



            <div

            animate={{scale: [0.9, 1, 1,0.9]}}
                    transition={{
                        type:"tween",
                        stiffness: 10,
                        yoyo: Infinity,
                        duration: 1
                         }}
             className = "GamePlayersList">

                    {endPlayer}

            </div>

        </div>
        </motion.div>

        )

    }

}

export default GameWin;