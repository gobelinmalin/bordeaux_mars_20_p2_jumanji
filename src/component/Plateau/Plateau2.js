import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import DisplayEnigme from './Enigme/DisplayEnigme'
import axios from 'axios';
import '../Plateau/Style/Plateau2.css'
import Dice1 from '../Plateau/RightSide/Dice1'
import Dice2 from '../Plateau/RightSide/Dice2'
import Dice3 from '../Plateau/RightSide/Dice3'
import Dice4 from '../Plateau/RightSide/Dice4'
import Dice5 from '../Plateau/RightSide/Dice5'
import Dice6 from '../Plateau/RightSide/Dice6'
import LeftSide from './LeftSide/LeftSide'
import Boule from '../Plateau/Boule/Boule'
import NewBoard from './NewBoard/NewBoard'

const sampleEnigme = {
  question: 'JoueurA lance les dès'
};

const sampleFuir = {
  question: 'Fuir est pour les lâches, +10 points de panic !'
}


class Plateau2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enigme: sampleEnigme,
      actions: "",
      dice1: "",
      dice2: "",
      result: "Lancez les dès",
      dicePicture: "",
    };
    this.getEnigme = this.getEnigme.bind(this);
    this.getEscape = this.getEscape.bind(this);
  }




  componentDidUpdate(prevProps, prevState) {
    if (prevState.dice1 !== this.state.dice1 || prevState.dice2 !== this.state.dice2) {
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
        const index = Math.floor((Math.random() * (data.length - 1)))
        this.setState({
          enigme: data[0],
          actionCombattre: <button className="enigmeCTA">Combattre </button>,
          actionFuir: <button className="enigmeCTA">S'enfuir</button>,
          dice1: Math.ceil(Math.random() * 6),
          dice2: Math.ceil(Math.random() * 6),


        });
      });

  }

  getEscape() {
    this.setState({
      actionCombattre: <button className="enigmeCTA" >LOL </button>,
      actionFuir: <button className="enigmeCTA">MDR</button>,
      enigme: sampleFuir,
    })
  }



  render() {

    let pictureDice1;
    if (this.state.dice1 === 1) {
      pictureDice1 = [<Dice1 />]
    } else if (this.state.dice1 === 2) {
      pictureDice1 = [<Dice2 />]
    } else if (this.state.dice1 === 3) {
      pictureDice1 = [<Dice3 />]
    } else if (this.state.dice1 === 4) {
      pictureDice1 = [<Dice4 />]
    } else if (this.state.dice1 === 5) {
      pictureDice1 = [<Dice5 />]
    } else if (this.state.dice1 === 6) {
      pictureDice1 = [<Dice6 />]
    }

    let pictureDice2
    if (this.state.dice2 === 1) {
      pictureDice2 = [<Dice1 />]
    } else if (this.state.dice2 === 2) {
      pictureDice2 = [<Dice2 />]
    } else if (this.state.dice2 === 3) {
      pictureDice2 = [<Dice3 />]
    } else if (this.state.dice2 === 4) {
      pictureDice2 = [<Dice4 />]
    } else if (this.state.dice2 === 5) {
      pictureDice2 = [<Dice5 />]
    } else if (this.state.dice2 === 6) {
      pictureDice2 = [<Dice6 />]
    }


    return (
        <div className="containerPlateau2">
            <div className="containerLeftSide2">
                <LeftSide />
            </div>
            <div className="containerBoardDice">
                <div className="board">
                    <div className="row1">
                        <div className="square1" style={{backgroundColor: "blue"}}></div>
                        <div className="square2"></div>
                        <div className="square3"></div>
                        <div className="square4"></div>
                        <div className="square5"></div>
                        <div className="square6"></div>
                        <div className="square7"></div>
                        <div className="square8"></div>
                        <div className="square9"></div>
                        <div className="square10"style={{backgroundColor: "pink"}}></div>
                      
                    </div>
                    <div className="row1">
                        <div className="square11"></div>
                        <div className="square12"></div>
                        <div className="square13"></div>
                        <div className="square14"></div>
                        <div className="square15"></div>
                        <div className="square16"></div>
                        <div className="square17"></div>
                        <div className="square18"></div>
                        <div className="square19"></div>
                        <div className="square20"></div>
                        
                    </div>
                    <div className="row1">
                        <div className="square21"></div>
                        <div className="square22"></div>
                        <div className="square23"></div>
                        <div className="square24"></div>
                        <div className="square25"></div>
                        <div className="square26"></div>
                        <div className="square27"></div>
                        <div className="square28"></div>
                        <div className="square29"></div>
                        <div className="square30"></div>
                 
                    </div>
                    <div className="row1">
                        <div className="square31"></div>
                        <div className="square32"></div>
                        <div className="square33"></div>
                        <div className="square34"></div>
                        <div className="square35"></div>
                        <div className="square36"></div>
                        <div className="square37"></div>
                        <div className="square38"></div>
                        <div className="square39"></div>
                        <div className="square40"></div>
                      
                    </div>
                    <div className="row1">
                        <div className="square41"></div>
                        <div className="square42"></div>
                        <div className="square43"></div>
                        <div className="square44"></div>
                        <div className="square45"></div>
                        <div className="square46"></div>
                        <div className="square47"></div>
                        <div className="square48"></div>
                        <div className="square49"></div>
                        <div className="square50"></div>
                        
                    </div>
                    <div className="row1">
                        <div className="square51"></div>
                        <div className="square52"></div>
                        <div className="square53"></div>
                        <div className="square54"></div>
                        <div className="square55"></div>
                        <div className="square56"></div>
                        <div className="square57"></div>
                        <div className="square58"></div>
                        <div className="square59"></div>
                        <div className="square60"></div>
                      
                    </div>
                    <div className="row1">
                        <div className="square61"></div>
                        <div className="square62"></div>
                        <div className="square63"></div>
                        <div className="square64"></div>
                        <div className="square65"></div>
                        <div className="square66"></div>
                        <div className="square67"></div>
                        <div className="square68"></div>
                        <div className="square69"></div>
                        <div className="square70"></div>
                        
                    </div>
                    <div className="row1">
                        <div className="square71"></div>
                        <div className="square72"></div>
                        <div className="square73"></div>
                        <div className="square74"></div>
                        <div className="square75"></div>
                        <div className="square76"></div>
                        <div className="square77"></div>
                        <div className="square78"></div>
                        <div className="square79"></div>
                        <div className="square80"></div>
                       
                    </div>
                    <div className="row1">
                        <div className="square81"></div>
                        <div className="square82"></div>
                        <div className="square83"></div>
                        <div className="square84"></div>
                        <div className="square85"></div>
                        <div className="square86"></div>
                        <div className="square87"></div>
                        <div className="square88"></div>
                        <div className="square89"></div>
                        <div className="square90"></div>
                       
                    </div>
                    <div className="row1">
                        <div className="square91"></div>
                        <div className="square92"></div>
                        <div className="square93"></div>
                        <div className="square94"></div>
                        <div className="square95"></div>
                        <div className="square96"></div>
                        <div className="square97"></div>
                        <div className="square98"></div>
                        <div className="square99"></div>
                        <div className="square100"></div>
                       
                    </div>
                    <div className="row1">
                        <div className="square100" style={{backgroundColor: "green"}}></div>
                        <div className="square101"></div>
                        <div className="square102"></div>
                        <div className="square103"></div>
                        <div className="square104"></div>
                        <div className="square105"></div>
                        <div className="square106"></div>
                        <div className="square107"></div>
                        <div className="square108"></div>
                        <div className="square109"style={{backgroundColor: "red"}}></div>
                       
                    </div>
                    
                </div>
            
                <div className="dice">
           
                </div>
                <div className="dice2">
                  
                </div>
                


            </div>

        </div>
    )
}
}

export default Plateau2;