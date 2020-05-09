import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import DisplayEnigme from './Enigme/DisplayEnigme'
import axios from 'axios';
import '../Plateau/Style/Plateau3.css'
import Dice1 from '../Plateau/RightSide/Dice1'
import Dice2 from '../Plateau/RightSide/Dice2'
import Dice3 from '../Plateau/RightSide/Dice3'
import Dice4 from '../Plateau/RightSide/Dice4'
import Dice5 from '../Plateau/RightSide/Dice5'
import Dice6 from '../Plateau/RightSide/Dice6'
import LeftSide from './LeftSide/LeftSide'
import Boule from '../Plateau/Boule/Boule'
import NewBoard from './NewBoard/NewBoard'
import DisplayEnigmeJ1 from '../DisplayEnigme/DisplayEnigmeJ1'
import DisplayPion from '../Plateau/Pions/DisplayPion'

const sampleEnigme = {
  question: 'JoueurA lance les dès'
};

const sampleFuir = {
  question: 'Fuir est pour les lâches, +10 points de panic !'
}


class Plateau3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enigme: sampleEnigme,
      actions: "",
      dice1: 1,
      dice2: 1,
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

  diceOne = () => {
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
    console.log(pictureDice1)
    return pictureDice1
  }
  diceTwo = () => {
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
    console.log(pictureDice2)
    return pictureDice2
  }

  render() {
    return (
    <section>
      <section>
      <div className="container">
        <div className="selectedPlayers">
    
        </div>

        <div className="containerBoard" >
                        <div className="element1">
                            <div className="row1">
                                <div className='squareT1'></div>
                                <div className='squareT2'></div>
                                <div className='squareT3'></div>
                                <div className='squareT4'></div>
                                <div className='squareT5'></div>
                                <div className='squareT6'></div>
                                <div className='squareT7'></div>
                                <div className='squareT8'></div>
                                <div className='squareT9'></div>
                                <div className='squareT10'></div>
                                <div className='squareT11'></div>
                            </div>
                            <div className="row2">
                            <div className='square'></div>
                                <div className='squareT12'></div>
                                <div className='squareT13'></div>
                                <div className='squareT14'></div>
                                <div className='squareT15'></div>
                                <div className='squareT16'></div>
                                <div className='squareT17'></div>
                                <div className='squareT18'></div>
                                <div className='squareT19'></div>
                                <div className='squareT20'></div>
                                <div className='squareT21'></div>
                                <div className='squareT22'></div>
                            </div>
                            <div className="row3">
                                <div className='squareT23'></div>
                                <div className='squareT24'></div>
                                <div className='squareT25'></div>
                                <div className='squareT26'></div>
                                <div className='squareT27'></div>
                                <div className='squareT28'></div>
                                <div className='squareT29'></div>
                                <div className='squareT30'></div>
                                <div className='squareT31'></div>
                                <div className='squareT32'></div>
                                <div className='squareT33'></div>

                            </div>

                        </div>
                        <div className="element2">
                            <div className="left">
                                <div className="rowA">
                                    <div className='squareL1'></div>
                                    <div className='squareL2'></div>
                                    <div className='squareL3'></div>
                                </div>
                                <div className="rowB">
                                    <div className='squareL4'></div>
                                    <div className='squareL5'></div>
                                    <div className='squareL6'></div>
                                </div>
                                <div className="rowC">
                                    <div className='squareL7'></div>
                                    <div className='squareL8'></div>
                                    <div className='squareL9'></div>
                                </div>
                                <div className="rowD">
                                    <div className='squareL10'></div>
                                    <div className='squareL11'></div>
                                    <div className='squareL12'></div>
                                </div>
                                <div className="rowE">
                                    <div className='squareL13'></div>
                                    <div className='squareL14'></div>
                                    <div className='squareL15'></div>
                                </div>




                            </div>
                            <div className="middle">
                                <div className="displayPionContainer">
                                  <DisplayPion diceOne={this.diceOne()} diceTwo={this.diceTwo()} />
                                </div>
                                <div className="displayEnigme2Container">
                                  <DisplayEnigmeJ1 />
                                </div>



                            </div>
                            <div className="right">
                                <div className="rowA">
                                    <div className='squareR1'></div>
                                    <div className='squareR2'></div>
                                    <div className='squareR3'></div>
                                </div>
                                <div className="rowB">
                                    <div className='squareR4'></div>
                                    <div className='squareR5'></div>
                                    <div className='squareR6'></div>
                                </div>
                                <div className="rowC">
                                    <div className='squareR7'></div>
                                    <div className='squareR8'></div>
                                    <div className='squareR9'></div>
                                </div>
                                <div className="rowD">
                                    <div className='squareR10'></div>
                                    <div className='squareR11'></div>
                                    <div className='squareR12'></div>
                                </div>
                                <div className="rowE">
                                    <div className='squareR13'></div>
                                    <div className='squareR14'></div>
                                    <div className='squareR15'></div>
                                </div>




                            </div>
                        </div>
                        <div className="element3">
                             <div className="row1">
                                <div className='squareD1'></div>
                                <div className='squareD2'></div>
                                <div className='squareD3'></div>
                                <div className='squareD4'></div>
                                <div className='squareD5'></div>
                                <div className='squareD6'></div>
                                <div className='squareD7'></div>
                                <div className='squareD8'></div>
                                <div className='squareD9'></div>
                                <div className='squareD10'></div>
                                <div className='squareD11'></div>


                             </div>
                             <div className="row2">
                                <div className='squareD12'></div>
                                <div className='squareD13'></div>
                                <div className='squareD14'></div>
                                <div className='squareD14'></div>
                                <div className='squareD15'></div>
                                <div className='squareD16'></div>
                                <div className='squareD17'></div>
                                <div className='squareD18'></div>
                                <div className='squareD19'></div>
                                <div className='squareD20'></div>
                                <div className='squareD21'></div>


                             </div>
                             <div className="row3">
                                <div className='squareD22'></div>
                                <div className='squareD23'></div>
                                <div className='squareD24'></div>
                                <div className='squareD25'></div>
                                <div className='squareD26'></div>
                                <div className='squareD27'></div>
                                <div className='squareD28'></div>
                                <div className='squareD29'></div>
                                <div className='squareD30'></div>
                                <div className='squareD31'></div>
                                <div className='squareD32'></div>


                             </div>

                        </div>
                    </div>


        <div className="containerRollDice">
            <div className="CTA">
                <button className="rollDiceCTA" type="button" onClick={this.getEnigme}> {this.state.result}</button>
            </div>
            <div className="dice1">
                {this.diceOne()}
            </div>
             <div className="dice2">
                 {this.diceTwo()}
            </div>

            <NavLink className="playCTA" to="/finalScreen"   >  END GAME!</NavLink>
            <NavLink className="playCTA" to="/plateau2"   >  Plateau 2</NavLink>
        </div>
      </div>
      </section>

    </section>

    )
  }


}

export default Plateau3;