import React from "react";
import axios from "axios";
import ShowSolutions from "./ShowSolutions";
import DisplayEnigme from './DisplayEnigme';
import './DisplayEnigmeJ1.css'
import Dice1 from '../Plateau/RightSide/Dice1'
import Dice2 from '../Plateau/RightSide/Dice2'
import LeftSide from '../Plateau/LeftSide/LeftSide'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'





class DisplayEnigmeJ1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enigmes: [],
      enigmeIndex: 0,
      solutions: [],
      isEnigmeVisible: true,
      dice: 0,
      panicAllan:0,
      test: 0,
      intro:
        (localStorage.getItem('players') === "1") || (localStorage.getItem('players') == "1,2") || (localStorage.getItem('players') == "1,2,3") || (localStorage.getItem('players') == "1,2,3,4") || (localStorage.getItem('players') == "1,3") || (localStorage.getItem('players') == "1,4")    ? "Allan Lance les dès" : ""
        || (localStorage.getItem('players') === "2") || (localStorage.getItem('players') === "2,3") || (localStorage.getItem('players') === "2,4") || (localStorage.getItem('players') === "2,3,4")? "Judith Lance les dès" : ""
        || (localStorage.getItem('players') === "3") || (localStorage.getItem('players') === "3,4")   ? "Peter Lance les dès" : ""
        || (localStorage.getItem('players') === "4")  ? "Sarah Lance les dès" : ""
    };



    this.getEnigmes().then(enigmes => {
      // On trie le tableau de manière aléatoire pour être certain de chaque partie aura un ordre de question différent
      this.state.enigmes = enigmes.sort(() => Math.random() - 0.5);
    });
  }

  getEnigmes = async () => {
    // Send the request
    return (
      axios
        .get("https://api-jumanji.herokuapp.com/api/cards")
        // Extract the DATA from the received response
        .then(response => response.data)
    );
  };

  getSolutions = async enigme => {
    return (
      axios
        .get(
          `https://api-jumanji.herokuapp.com/api/cards/${
            enigme.idcard
          }/solutions?idcard=${enigme.idCard}`
        )
        // Extract the DATA from the received response
        .then(response => response.data)
    );
  };

  getNewEnigmeAndSolutions = async () => {
    const index = this.state.enigmeIndex;
    // On vérifie que l'index dans le tableux existe
    if (index < this.state.enigmes.length) {
      // On récupère l'énigme présent a l'index
      const enigme = this.state.enigmes[index];
      // On récupère les solutions associé à l'énigme
      const solutions = await this.getSolutions(enigme);
      // On stock ça dans notre state pour remettre à jour la vue (render)
      this.setState({ enigme, solutions});
    }
     this.setState ({
       dice:Math.ceil(Math.random() * 2),isEnigmeVisible: true,
      intro:"",
   
    })
  };

  onCorrectResponse = () => {
    // Quand la réponse est correct on passe à la suivante
    this.setState(state => ({
          ...state,
          enigmeIndex: state.enigmeIndex + 1,
           isEnigmeVisible: false,
           intro:(localStorage.getItem('players') === "1") ? "Bravo, relance les dès" : "" || (localStorage.getItem('players') === "1,2") ? "Bravo, Judith lance les dès" : "",
           
          }));
  };

  onIncorrectResponse = () => {
    // Quand la réponse est incorrect on passe à la suivante
    this.setState(state => ({
      ...state,
      enigmeIndex: state.enigmeIndex + 1,
       isEnigmeVisible: false,
       intro: (localStorage.getItem('players') === "1") ? "t'est trop null, relance les dès" : "",
       panicAllan: this.state.panicAllan +10,


    }));

  };


  renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
   return <div className="timesUp"> 
            <div className="text1TimesUp">Trop tard!</div>  
            <div className="text2TimesUp"> Relance les dès</div>
          </div>
     
    }
  
    return (
      <div className="timer">
        <div className="text"></div>
        
      </div>
    );
  };
 

 

  render() {
    const shouldShowEnigmeSection =
      this.state.enigme && this.state.isEnigmeVisible;


      let pictureDice1;
    if (this.state.dice === 1) {
      pictureDice1 = [<Dice1 />]
    } else if (this.state.dice === 2) {
      pictureDice1 = [<Dice2 />]
    }

    let panicBarAllan 
      if (this.state.panicAllan === 0) {
     panicBarAllan  = "panicJaugeA"
     } else if (this.state.panicAllan === 10) {
          panicBarAllan   = "panicJaugeB"
     } else if (this.state.panicAllan === 20) {
          panicBarAllan  = "panicJaugeC"
     } else if (this.state.panicAllan === 30) {
      panicBarAllan  = "panicJaugeD"
 } else if (this.state.panicAllan === 40) {
  panicBarAllan  = "panicJaugeE"
  
}

    return (
      <div className="containerGlobal">

        <div className="leftSideContainer">
          <LeftSide panic={panicBarAllan}/>
          {this.state.test}
        </div>


      <div className='solutions-enigme'>
          <div className="introJoueur" >
      {this.state.intro}
      </div>
        <button className='btn-enigme' onClick={this.getNewEnigmeAndSolutions}>Lancer les dès</button>
        {shouldShowEnigmeSection && (

         <div className="enigmeContent2">


            <div className="questionContent">
            <div className="timerContainer">
                <CountdownCircleTimer className="timer"
                    isPlaying
                    duration={5}
                    colors={[["#01D758", 0.33], ["#01D758", 0.33], ["#A30000"]]}
                    onComplete={() => this.setState ({
                      panicAllan : this.state.panicAllan +10,
                      isEnigmeVisible: false,
                      intro: "Trop tard, relance les dès",
                      test : this.state.test +10,
                    })}
                    size= {362}
                    trailColor={"#AA892D"}
                  >
                {this.renderTime}
                  </CountdownCircleTimer>
             </div>
     
          
                <DisplayEnigme className="enigme" enigme={this.state.enigme} />
                <div className="diceContainer">
                {pictureDice1}
                </div>
               

            </div>
            <div className="showSolution">
                <ShowSolutions
                enigme={this.state.enigme}
                solutions={this.state.solutions}
                onCorrectResponse={this.onCorrectResponse}
                onIncorrectResponse={this.onIncorrectResponse}
            />
            </div>
          </div>
        )}
        <di />

      </div>
      <div className="timer-wrapper">
        
      </div>
      </div>
    );
  }
}

export default DisplayEnigmeJ1;
