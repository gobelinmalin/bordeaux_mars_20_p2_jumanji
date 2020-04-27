import React from 'react';
import './dice.css'

class Dice extends React.Component {
    constructor() {
        super()
        this.state = {
            result : 0,
            dice1: 0,
            dice2: 0,
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick() {
        this.setState(prevState => {
            return {
                result: this.state.dice1 + this.state.dice2,
                dice1: Math.ceil(Math.random()*6),
                dice2: Math.ceil(Math.random()*6),
            }
        })
    }

    /* result= () => {
        const dice1 = this.state.dice1
        const dice2 = this.state.dice2
        const result = dice1 + dice2
        return this.setState({result: dice1 + dice2})

    } */
  
    
    render() {
        
        return (
            <div className="handle-dice">
                <h1 className="dice"  >{this.state.dice1}</h1>
                <h1 className="dice" >{this.state.dice2}</h1>
                <button onClick={this.handleClick}>Roll the dice!</button>
                <h3 className="result">{this.state.result}</h3>
            </div>
        )
    }
}

export default Dice;