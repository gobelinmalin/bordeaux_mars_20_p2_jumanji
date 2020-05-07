import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import DisplayEnigme from './Enigme/DisplayEnigme'
import axios from 'axios';
import '../Plateau/Style/Plateau.css'
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


class Plateau extends React.Component {
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
      <div className="container">
        <div className="selectedPlayers">
          <LeftSide />
        </div>
        <div className="containerBoule">
          {/* {/* <div className="containerEnigme"> */}
            <div className="enigmeContent"> */}
            <DisplayEnigme className="enigme" enigme={this.state.enigme} />
            </div>
            <div className="containerActionCTA">
              {/* <div className="CombattreCTA" onClick={this.getEscape}> */}
                {/* {this.state.actionCombattre} */}
              </div>
              {/* <div className="handler-board"><NewBoard /></div> */}
              <div className="handler-board">
                        <div class="div1"> </div>
                        <div class="div2"> </div>
                        <div class="div3"> </div>
                        <div class="div4"> </div>
                        <div class="div5"> </div>
                        <div class="div6"> </div>
                        <div class="div7"> </div>
                        <div class="div8"> </div>
                        <div class="div9"> </div>
                        {/* <div class="div10"> </div> */}
                        <div class="div11"> </div>
                        <div class="div12"> </div>
                        <div class="div13"> </div>
                        <div class="div14"> </div>
                        <div class="div15"> </div>
                        <div class="div16"> </div>
                        <div class="div17"> </div>
                        <div class="div18"> </div>
                        <div class="div19"> </div>
                        {/* <div class="div20"> </div> */}
                        <div class="div21"> </div>
                        <div class="div22"> </div>
                        <div class="div23"> </div>
                        <div class="div24"> </div>
                        <div class="div25"> </div>
                        <div class="div26"> </div>
                        <div class="div27"> </div>
                        <div class="div28"> </div>
                        <div class="div29"> </div>
                        {/* <div class="div30"> </div> */}
                        <div class="div31"> </div>
                        <div class="div32"> </div>
                        <div class="div33"> </div>
                        <div class="div34"> </div>
                        <div class="div35"> </div>
                        <div class="div36"> </div>
                        <div class="div37"> </div>
                        <div class="div38"> </div>
                        <div class="div39"> </div>
                        {/* <div class="div40"> </div> */}
                        <div class="div41"> </div>
                        <div class="div42"> </div>
                        <div class="div43"> </div>
                        <div class="div44"> </div>
                        <div class="div45"> </div>
                        <div class="div46"> </div>
                        <div class="div47"> </div>
                        <div class="div48"> </div>
                        <div class="div49"> </div>
                        {/* <div class="div50"> </div> */}
                        <div class="div51"> </div>
                        <div class="div52"> </div>
                        <div class="div53"> </div>
                        <div class="div54"> </div>
                        <div class="div55"> </div>
                        <div class="div56"> </div>
                        <div class="div57"> </div>
                        <div class="div58"> </div>
                        <div class="div59"> </div>
                        {/* <div class="div60"> </div> */}
                        <div class="div61"> </div>
                        <div class="div62"> </div>
                        <div class="div63"> </div>
                        <div class="div64"> </div>
                        <div class="div65"> </div>
                        <div class="div66"> </div>
                        <div class="div67"> </div>
                        <div class="div68"> </div>
                        <div class="div69"> </div>
                        {/* <div class="div70"> </div> */}
                        <div class="div71"> </div>
                        <div class="div72"> </div>
                        <div class="div73"> </div>
                        <div class="div74"> </div>
                        <div class="div75"> </div>
                        <div class="div76"> </div>
                        <div class="div77"> </div>
                        <div class="div78"> </div>
                        <div class="div79"> </div>
                        {/* <div class="div80"> </div> */}
                        <div class="div81"> </div>
                        <div class="div82"> </div>
                        <div class="div83"> </div>
                        <div class="div84"> </div>
                        <div class="div85"> </div>
                        <div class="div86"> </div>
                        <div class="div87"> </div>
                        <div class="div88"> </div>
                        <div class="div89"> </div>
                        {/* <div class="div90"> </div> */}
                        <div class="div91"> </div>
                        <div class="div92"> </div>
                        <div class="div93"> </div>
                        <div class="div94"> </div>
                        <div class="div95"> </div>
                        <div class="div96"> </div>
                        <div class="div97"> </div>
                        <div class="div98"> </div>
                        <div class="div99"> </div>
                        {/* <div class="div100"> </div> */}
                </div>
              {/* <div className="FuirCTA" onClick={this.getEscape}>
                {this.state.actionFuir} */}
              </div>
{/*              
            </div>
          </div> */}
        {/* </div> */}
        <div className="containerRollDice">
          <div className="CTA">
            <button className="rollDiceCTA" type="button" onClick={this.getEnigme}> {this.state.result}</button>
          </div>
          <div className="dice1">
            {pictureDice1}
          </div>
          <div className="dice2">
            {pictureDice2}
          </div>
         
          <NavLink className="playCTA" to="/finalScreen"   >  END GAME!</NavLink> 
          <NavLink className="playCTA" to="/plateau2"   >  Plateau 2</NavLink> 
          <NavLink className="playCTA" to="/plateau3"   >  Plateau 3</NavLink> 
        </div>
      </div>
    )
  }


}

export default Plateau;