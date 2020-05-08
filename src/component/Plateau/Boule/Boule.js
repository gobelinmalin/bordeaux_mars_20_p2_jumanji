import React from 'react'
import "./Boule.css"
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import DisplayEnigme2 from './DisplayEnigme2'
import axios from 'axios'

class Boule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          enigme2: "salutkrtr",
        }
        this.getEnigme=this.getEnigme.bind(this)
    }

    getEnigme() {
        // Send the request
        axios.get('https://api-jumanji.herokuapp.com/api/cards')
          // Extract the DATA from the received response
          .then(response => response.data)
          // Use this data to update the state
          .then(data => {
            console.log(data)
            const index = Math.floor((Math.random() * (data.length - 1)))
            this.setState({
              enigme2: data[0],
              actionCombattre: <button className="enigmeCTA">Combattre </button>,
              actionFuir: <button className="enigmeCTA">S'enfuir</button>,
    
    
            });
          });
    
      }

    
    render(){
        return (
            <div>
                <div className="displayboule">
                    <div className="enigmeContainer2">
                        <div className="displayEnigmeContainer">
                            <DisplayEnigme2 className="enigmeAffichage" enigme2={this.state.enigme2} />
                        </div>
                        <div className="diceButtonContainer">
                            <button className="diceCTA" onClick={this.getEnigme}>JOUER</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Boule;