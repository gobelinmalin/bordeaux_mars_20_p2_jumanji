import React from 'react';
import './FinalScreen.css';

import EndMessage from './EndMessage'
import EndCircle from './EndCircle'
import EndPlayerCard from './EndPlayerCard'


class FinalScreen extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            gameVictory : true,
        };
    }

    render() {
        return (
        <div className ="Wrapper">
        <div className = "Voile">

            <div className = "GameEndResult">
                <EndMessage gameVictory={this.state.gameVictory} />
            </div>

            <EndCircle gameVictory={this.state.gameVictory}/>

            

            <div className = "GamePlayersList">
                    <EndPlayerCard gameVictory={this.state.gameVictory}/>
                    <EndPlayerCard gameVictory={this.state.gameVictory}/>
                    <EndPlayerCard gameVictory={this.state.gameVictory}/>
                    <EndPlayerCard gameVictory={this.state.gameVictory}/>
            </div>
        
        </div>
        </div>

        )
            
    }

}

export default FinalScreen;