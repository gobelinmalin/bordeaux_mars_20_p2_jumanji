import React from "react";
import axios from "axios";
import ShowSolutions from "./ShowSolutions";
import DisplayEnigme from './DisplayEnigme';
import './DisplayEnigmeJ1.css'

class DisplayEnigmeJ1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enigmes: [],
      enigmeIndex: 0,
      solutions: [],
      isEnigmeVisible: true
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
  };

  onCorrectResponse = () => {
    // Quand la réponse est correct on passe à la suivante
    this.setState(state => ({ enigmeIndex: state.enigmeIndex + 1 }));
    console.log("bonne réponse");
  };

  onIncorrectResponse = () => {
    // Quand la réponse est incorrect on passe à la suivante
    this.setState(state => ({
      enigmeIndex: state.enigmeIndex + 1
      //  isEnigmeVisible: false
    }));
    console.log("mauvaise réponse");
  };

  render() {
    const shouldShowEnigmeSection =
      this.state.enigme && this.state.isEnigmeVisible;

    return (
      <div className='solutions-enigme'>
        <button className='btn-enigme' onClick={this.getNewEnigmeAndSolutions}>afficher enigme</button>
        {shouldShowEnigmeSection && (
         
         <div className="enigmeContent2">
            
            
            <div className="questionContent"> 
                <DisplayEnigme className="enigme" enigme={this.state.enigme} />
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
    );
  }
}

export default DisplayEnigmeJ1;
