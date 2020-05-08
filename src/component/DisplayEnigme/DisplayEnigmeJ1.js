import React from "react";
import axios from "axios";
import ShowSolutions from "./ShowSolutions";
import DisplayEnigme from './DisplayEnigme';
import './DisplayEnigmeJ1.css'
import Dice1 from '../Plateau/RightSide/Dice1'
import Dice2 from '../Plateau/RightSide/Dice2'




class DisplayEnigmeJ1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enigmes: [],
      enigmeIndex: 0,
      solutions: [],
      isEnigmeVisible: true,
      dice: "",
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
      this.setState({ enigme, solutions });
    }
     this.setState ({
       dice:Math.ceil(Math.random() * 2),isEnigmeVisible: true,
      intro:""
    })
  };

  onCorrectResponse = () => {
    // Quand la réponse est correct on passe à la suivante
    this.setState(state => ({ 
          ...state,
          enigmeIndex: state.enigmeIndex + 1,
           isEnigmeVisible: false
          }));
  };

  onIncorrectResponse = () => {
    // Quand la réponse est incorrect on passe à la suivante
    this.setState(state => ({
      ...state,
      enigmeIndex: state.enigmeIndex + 1,
       isEnigmeVisible: false
    }));
    console.log("mauvaise réponse");
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

    return (
      <div>
        
          
      
          
      <div className='solutions-enigme'>
          <div className="introJoueur" >
      {this.state.intro}
      </div>
        <button className='btn-enigme' onClick={this.getNewEnigmeAndSolutions}>Afficher enigme</button>
        {shouldShowEnigmeSection && (
           
         <div className="enigmeContent2">


            <div className="questionContent">
                
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
      </div>
    );
  }
}

export default DisplayEnigmeJ1;
