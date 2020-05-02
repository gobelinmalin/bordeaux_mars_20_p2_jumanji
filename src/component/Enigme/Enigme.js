import React from 'react';
import DisplayEnigme from './DisplayEnigme'
import axios from 'axios';
import './Enigme.css'
import Dice1 from './Dice1'
import Dice2 from './Dice2'
import Dice3 from './Dice3'
import Dice4 from './Dice4'
import Dice5 from './Dice5'
import Dice6 from './Dice6'

const sampleEnigme = {
  question: 'JoueurA lance les dès'
};

const sampleFuir = {
  question: 'Fuir est pour les lâches, +10 points de panic !'
}


class Enigme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enigme: sampleEnigme,
      actions: "",
      dice1:"",
      dice2:"",
      result:"Lancez les dès",
      dicePicture:"",
    };
 this.getEnigme = this.getEnigme.bind(this);
 this.getEscape = this.getEscape.bind(this);
  }




  componentDidUpdate(prevProps, prevState){
    if(prevState.dice1 !== this.state.dice1 || prevState.dice2 !== this.state.dice2) {
        this.setState({
                result: this.state.dice1 + this.state.dice2,
        })
    }
}
     
  getEnigme() {
    // Send the request
    axios.get('https://api-jumanji.herokuapp.com/api/cards')
    // Extract the DATA from the received response
    .then(response => response.data)
    // Use this data to update the state
    .then(data => {
    console.log(data)
    const index = Math.floor((Math.random()*(data.length -1)))
    this.setState({
    enigme: data[0],
    actionCombattre : <button>Combattre </button>,
    actionFuir : <button>S'enfuir</button>,
    dice1: Math.ceil(Math.random()*6),
    dice2: Math.ceil(Math.random()*6),
  
 
        });
    }); 

  }

  getEscape (){
    this.setState({
      actionCombattre : <button>LOL </button>,
      actionFuir : <button>MDR</button>,
      enigme: sampleFuir,
       })
  }



  render () {

   let pictureDice1
   if (this.state.dice1===1) {
     pictureDice1 = [<Dice1 />]
   } else if (this.state.dice1===2) {
     pictureDice1 = [<Dice2 />]
   } else if (this.state.dice1===3) {
    pictureDice1 = [<Dice3 />]
 } else if (this.state.dice1===4) {
  pictureDice1 = [<Dice4 />]
} else if (this.state.dice1===5) {
  pictureDice1 = [<Dice5 />]
} else if (this.state.dice1===6) {
  pictureDice1 = [<Dice6 />]
}

let pictureDice2
if (this.state.dice2===1) {
  pictureDice2 = [<Dice1 />]
} else if (this.state.dice2===2) {
  pictureDice2 = [<Dice2 />]
} else if (this.state.dice2===3) {
 pictureDice2 = [<Dice3 />]
} else if (this.state.dice2===4) {
pictureDice2 = [<Dice4 />]
} else if (this.state.dice2===5) {
pictureDice2 = [<Dice5 />]
} else if (this.state.dice2===6) {
pictureDice2 = [<Dice6 />]
}


    return (
      <div className="containerBoule">
         
        <div className="containerEnigme">
           <div className="enigmeContent">

                <DisplayEnigme className="enigme" enigme={this.state.enigme} />
                <div className="containerActionCTA">
                  <div className="CombattreCTA" onClick={this.getEscape}>
                    {this.state.actionCombattre} 
                  </div>
                  <div className="FuirCTA">
                    {this.state.actionFuir}
                  </div>
                </div>
           </div>
        </div>
        <div className="containerRollDice">
            <div className="CTA">
                <button  className="rollDiceCTA" type="button" onClick={this.getEnigme}> {this.state.result}</button>
            </div>
            <div className="dice1"> 
                {pictureDice1}
            </div>
            <div className="dice2">
                {pictureDice2}
            </div>
        </div>
       
         
      </div>
    )
  }


}

export default Enigme;