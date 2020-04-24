import React from 'react';
import './dice.css'

class Dice extends React.Component {
    constructor() {
        super()
        this.state = {
            dice1: 0,
            dice2: 0,
            
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        this.setState(prevState => {
            return {
                dice1: Math.ceil(Math.random()*6),
                dice2: Math.ceil(Math.random()*6)
            }
        })
    }
  
    
    render() {
        
        return (
            <div className="handle-dice">
                <h1 className="dice"  >{this.state.dice1}</h1>
                <h1 className="dice" >{this.state.dice2}</h1>
                <button onClick={this.handleClick}>Roll the dice!</button>
            </div>
        )
    }
}

export default Dice;