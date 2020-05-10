import React from "react";
import axios from "axios";
import ShowSolutions from "./ShowSolutions";
import DisplayEnigme from './DisplayEnigme';
import './DisplayEnigmeJ1.css'
import Dice1 from '../Plateau/RightSide/Dice1'
import Dice2 from '../Plateau/RightSide/Dice2'
import LeftSide from '../Plateau/LeftSide/LeftSide'
import DisplayPion from '../Plateau/Pions/DisplayPion'

class DisplayEnigmeJ1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enigmes: [],
      enigmeIndex: 0,
      solutions: [],
      isEnigmeVisible: true,
      dice: 0,
      panicAllan: 0,
      intro:
        (localStorage.getItem('players') === "1") || (localStorage.getItem('players') == "1,2") || (localStorage.getItem('players') == "1,2,3") || (localStorage.getItem('players') == "1,2,3,4") || (localStorage.getItem('players') == "1,3") || (localStorage.getItem('players') == "1,4") ? "Allan Lance les dès" : ""
          || (localStorage.getItem('players') === "2") || (localStorage.getItem('players') === "2,3") || (localStorage.getItem('players') === "2,4") || (localStorage.getItem('players') === "2,3,4") ? "Judith Lance les dès" : ""
            || (localStorage.getItem('players') === "3") || (localStorage.getItem('players') === "3,4") ? "Peter Lance les dès" : ""
              || (localStorage.getItem('players') === "4") ? "Sarah Lance les dès" : "",
      top1: 45,
      left1: 0,
      pathLeft: 4,
      top2: 45,
      right2: 0
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

  getNewEnigmeAndSolutions = async (p1Top, p1Left, p2Top, p2Right) => {
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
    this.setState({
      dice: Math.ceil(Math.random() * 2), isEnigmeVisible: true,
      intro: "",

    })

    let dice = this.state.dice
    let pathY = 240
    let pathX = 40
    this.setState(prvestate => ({ pathLeft: Math.ceil(p1Top / 60) + 1 })) // calcul le nombre de case restante sur top1
    console.log(p1Top, this.state.pathLeft, "TEST")

    // si dice > 4 , dice = 4
    if (p1Top > pathY) {
      this.setState({ left1: p1Left + 40 })
    } else {
      this.setState({ top1: p1Top + dice * 60 })
    }

    if (p2Top > pathY) {
      this.setState({ right2: p2Right - 40 })
    } else {
      this.setState({ top2: p2Top + dice * 60 })
    }


  };

  onCorrectResponse = () => {
    // Quand la réponse est correct on passe à la suivante
    this.setState(state => ({
      ...state,
      enigmeIndex: state.enigmeIndex + 1,
      isEnigmeVisible: false,
      intro: (localStorage.getItem('players') === "1") ? "Bravo, relance les dès" : "" || (localStorage.getItem('players') === "1,2") ? "Bravo, Judith lance les dès" : "",

    }));
  };

  onIncorrectResponse = () => {
    // Quand la réponse est incorrect on passe à la suivante
    this.setState(state => ({
      ...state,
      enigmeIndex: state.enigmeIndex + 1,
      isEnigmeVisible: false,
      intro: (localStorage.getItem('players') === "1") ? "t'est trop null, relance les dès" : "",
      panicAllan: this.state.panicAllan + 10,


    }));

  };

  render() {

    const { top1, left1 } = this.state
    const { top2, right2 } = this.state

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
      panicBarAllan = "panicJaugeA"
    } else if (this.state.panicAllan === 10) {
      panicBarAllan = "panicJaugeB"
    } else if (this.state.panicAllan === 20) {
      panicBarAllan = "panicJaugeC"
    } else if (this.state.panicAllan === 30) {
      panicBarAllan = "panicJaugeD"
    } else if (this.state.panicAllan === 40) {
      panicBarAllan = "panicJaugeE"

    }

    return (
      <div className="bigContainer">
        <div className="containerGlobal">

          <div className="leftSideContainer">
            <LeftSide panic={panicBarAllan} />
          </div>


          <div className='solutions-enigme'>
            <div className="introJoueur" >
              {this.state.intro}
            </div>
            <button className='btn-enigme' onClick={() => this
              .getNewEnigmeAndSolutions(
                this.state.top1,
                this.state.left1


              )}>Afficher enigme</button>
            {
              shouldShowEnigmeSection && (

                <div className="enigmeContent2">


                  <div className="questionContent">
                    <DisplayEnigme
                      className="enigme"
                      enigme={this.state.enigme}
                    />
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
          </div>
        </div>
          <div>
            <DisplayPion
            p1TOP={this.state.top1}
            p1LEFT={this.state.left1} />
          </div>

      </div>
    );
  }
}

export default DisplayEnigmeJ1;
