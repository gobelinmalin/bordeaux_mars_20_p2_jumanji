import React from "react";
import axios from "axios";
import ShowSolutions from "./ShowSolutions";
import DisplayEnigme from "./DisplayEnigme";
import EndPlayerCard from "../GameEnd/EndPlayerCard";
import "./DisplayEnigmeJ1.css";
import Dice1 from "../Plateau/RightSide/Dice1";
import Dice2 from "../Plateau/RightSide/Dice2";
import LeftSide from "../Plateau/LeftSide/LeftSide";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Route, Redirect } from "react-router-dom";
import DisplayPion from "../Plateau/Pions/DisplayPion";

//FRAMER LIBRARY
import { motion, AnimatePresence } from 'framer-motion'
//FRAMER LIBRARY


class DisplayEnigmeJ1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      enigmes: [],
      enigmeIndex: 0,
      solutions: [],
      isEnigmeVisible: true,
      dice: 2,
      buttonEnabled2: true,
      panicAllan: 0,
      panicJudith: 0,
      redirect: null,
      count2J: 0,
      count3J: 0,
      diceTest: 2,
      intro:
        localStorage.getItem("players") === "1" ||
          localStorage.getItem("players") == "1,2" ||
          localStorage.getItem("players") == "1,2,3" ||
          localStorage.getItem("players") == "1,2,3,4" ||
          localStorage.getItem("players") == "1,3" ||
          localStorage.getItem("players") == "1,4"
          ? <p className="allanIntro">"Allan Lance les dès" </p>
          : "" ||
            localStorage.getItem("players") === "2" ||
            localStorage.getItem("players") === "2,3" ||
            localStorage.getItem("players") === "2,4" ||
            localStorage.getItem("players") === "2,3,4"
            ? "Judith Lance les dès"
            : "" ||
              localStorage.getItem("players") === "3" ||
              localStorage.getItem("players") === "3,4"
              ? "Peter Lance les dès"
              : "" || localStorage.getItem("players") === "4"
                ? "Sarah Lance les dès"
                : "",
      //player1
      top1: 45,
      left1: 0,
      countPath1: 4,
      endGame1: false,
      //player2
      top2: 45,
      right2: 0,
      countPath2: 4,
      endGame2: false,
      //player3
      bottom3: -235,
      right3: 0,
      countPath3: 4,
      endGame3: 0,
      //player4
      bottom4: -235,
      left4: 0,
      countPath4: 4,
      endGame4: false,
    };

    this.getEnigmes().then((enigmes) => {
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
        .then((response) => response.data)
    );
  };

  getSolutions = async (enigme) => {
    return (
      axios
        .get(
          `https://api-jumanji.herokuapp.com/api/cards/${enigme.idcard}/solutions?idcard=${enigme.idCard}`
        )
        // Extract the DATA from the received response
        .then((response) => response.data)
    );
  };

  getNewEnigmeAndSolutions = async (
    p1Top,
    p1Left,
    p2Top,
    p2Right,
    p3Bottom,
    p3Right,
    p4Bottom,
    p4Left
  ) => {
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
      dice:
        this.state.countPath1 === 1 || this.state.countPath2 === 1
          ? 1
          : Math.ceil(Math.random() * 2),
      isEnigmeVisible: true,
      intro: "",
      timeUp: "",
      count2J: this.state.count2J + 1,
      // Quand je clique sur le bouton "Lancer les dés" changements du bouton disabled
      buttonEnabled2: !this.state.buttonEnabled2,
    });
    let dice = this.state.dice;
    let pathY = 240;
    let pathX = 40;

    //PLAYER 1
    if (
      localStorage.getItem("players") === "1,2" &&
      this.state.count2J % 2 !== 0
    ) {
      //this.setState((prvestate) => ({ pathLeft: Math.ceil(p1Top / 60) + 1 })); // calcul le nombre de case restante sur top1

      const { dice, countPath1 } = this.state;

      this.setState({ countPath1: countPath1 - dice });
      if (countPath1 <= 1) {

        this.setState({ top1: p1Top + dice });
      }

      if (p1Top > pathY) {
        this.setState({ left1: p1Left + 40 });
      } else {
        this.setState({ top1: p1Top + dice * 65 });
      }
      //endGame1

      if (p1Left > 40) {
        //this.setState({endGame1 : true})
        console.log(p1Left, "LEFTTTT")
        return <Redirect to="/GameWin" />
      }
    }
    //PLAYER 1

    //PLAYER 2

    else if (
      localStorage.getItem("players") === "1,2" &&
      this.state.count2J % 2 === 0
    ) {
      const { dice, countPath2 } = this.state;

      this.setState({ countPath2: countPath2 - dice });
      if (countPath2 <= 1) {
        this.setState({ top2: p2Top + dice });
      }

      if (p2Right < pathY) {

        this.setState({ right2: p2Right + 65 });
      } else {
        this.setState({ top2: p2Top + dice * 40 });
      }
    }
    //PLAYER 2

    //PLAYER 3
    if (p3Bottom > pathY) {
      this.setState({ right3: p3Right - 40 });
    } else {
      this.setState({ bottom3: p3Bottom - dice * 65 });
    }
    //PLAYER 3

    //PLAYER 4
    if (p4Bottom > pathY) {
      this.setState({ left4: p4Left + 40 });
    } else {
      this.setState({ bottom4: p4Bottom - dice * 65 });
    }
    //PLAYER 4
  };

  onCorrectResponse = () => {
    // Quand la réponse est correct on passe à la suivante
    this.setState((state) => ({
      ...state,
      enigmeIndex: state.enigmeIndex + 1,
      isEnigmeVisible: false,
      buttonEnabled2: true,
      intro:
        localStorage.getItem("players") === "1"
          ? "Bravo, relance les dés"
          : "" ||
            (localStorage.getItem("players") === "1,2" &&
              this.state.count2J % 2 === 0)
            ? <div><p className="judithIntro">BRAVO!</p> <p className="allanIntro"> Allan lance les dés </p></div>
            : <p className="judithIntro"> BRAVO! Judith lance les dés </p>
    }));
  };

  onIncorrectResponse = () => {
    // Quand la réponse est incorrect on passe à la suivante
    this.setState((state) => ({
      ...state,
      enigmeIndex: state.enigmeIndex + 1,
      isEnigmeVisible: false,
      buttonEnabled2: true,
      intro:
        localStorage.getItem("players") === "1"
          ? "Mauvaise réponse, relance les dès"
          : "" ||
            (localStorage.getItem("players") === "1,2" &&
              this.state.count2J % 2 === 0)
            ? <p className="wrongAnswer"> MAUVAISE RÉPONSE! Allan lance les dés </p>
            : <p className="wrongAnswer"> MAUVAISE RÉPONSE! Allan lance les dés </p>,
      panicAllan:
        localStorage.getItem("players") === "1"
          ? this.state.panicAllan + 10
          : "" ||
            (localStorage.getItem("players") === "1,2" &&
              this.state.count2J % 2 !== 0)
            ? this.state.panicAllan + 10
            : this.state.panicAllan,
      panicJudith:
        localStorage.getItem("players") === "2"
          ? this.state.panicJudith + 10
          : "" ||
            (localStorage.getItem("players") === "1,2" &&
              this.state.count2J % 2 === 0)
            ? this.state.panicJudith + 10
            : this.state.panicJudith,
    }));
  };

  renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return (
        <div className="timesUp">
          <div className="text1TimesUp">Trop tard!</div>
          <div className="text2TimesUp"> Relance les dès</div>
        </div>
      );
    }

    return (
      <div className="timer">
        <div className="text"></div>
      </div>
    );
  };



  render() {
    const { top1, left1 } = this.state; // player 1
    const { top2, right2 } = this.state; // player 2
    const { bottom3, right3 } = this.state; // player 3
    const { bottom4, left4 } = this.state; // player 4

    if (left1 > 80) { // quand le joeur 1 arrive sur la boule => redirigé vers la page de win
      return <Redirect to="/GameWin" />
    }
    if (top2 > 80) { // quand le joeur 2 arrive sur la boule => redirigé vers la page de win
      return <Redirect to="/GameWin" />
    }



    const shouldShowEnigmeSection =
      this.state.enigme && this.state.isEnigmeVisible;

    let pictureDice1;
    if (this.state.dice === 1) {
      pictureDice1 = [<Dice1 />];
    } else if (this.state.dice === 2) {
      pictureDice1 = [<Dice2 />];
    }

    let panicBarAllan;
    if (this.state.panicAllan === 0) {
      panicBarAllan = "panicJaugeA";
    } else if (this.state.panicAllan === 10) {
      panicBarAllan = "panicJaugeB";
    } else if (this.state.panicAllan === 20) {
      panicBarAllan = "panicJaugeC";
    } else if (this.state.panicAllan === 30) {
      panicBarAllan = "panicJaugeD";
    } else if (this.state.panicAllan === 40) {
      return <Redirect to="/finalScreen" />;
    }

    let panicBarJudith;
    if (this.state.panicJudith === 0) {
      panicBarJudith = "panicJaugeA2";
    } else if (this.state.panicJudith === 10) {
      panicBarJudith = "panicJaugeB2";
    } else if (this.state.panicJudith === 20) {
      panicBarJudith = "panicJaugeC2";
    } else if (this.state.panicJudith === 30) {
      panicBarJudith = "panicJaugeD2";
    } else if (this.state.panicJudith === 40) {
      return <Redirect to="/finalScreen" />;
    }

    console.log("click button", this.state.buttonEnabled2)

    return (
      <div className="containerGlobal" >
        <div className="leftSideContainer">
          <LeftSide panic={panicBarAllan} panic2={panicBarJudith} />
          {this.state.count}
        </div>

        <div className="solutions-enigme">
          <div className="introJoueur">{this.state.intro}</div>
          <button
            className="btn-enigme"
            onClick={() =>
              this.getNewEnigmeAndSolutions(
                top1,
                left1,
                top2,
                right2,
                bottom3,
                right3,
                bottom4,
                left4
              )
            }
            disabled={!this.state.buttonEnabled2}
          >
            Lance les dés
          </button>
          {shouldShowEnigmeSection && (
            <div className="enigmeContent2">
              <div className="questionContent">
                <div className="timerContainer">
                  <CountdownCircleTimer
                    className="timer"
                    isPlaying
                    duration={15}
                    colors={[["#01D758", 0.33], ["#01D758", 0.33], ["#A30000"]]}
                    onComplete={() =>
                      this.setState({
                        buttonEnabled2: !this.state.buttonEnabled2,
                        panicAllan:
                          localStorage.getItem("players") === "1"
                            ? this.state.panicAllan + 10
                            : "" ||
                              (localStorage.getItem("players") === "1,2" &&
                                this.state.count2J % 2 !== 0)
                              ? this.state.panicAllan + 10
                              : this.state.panicAllan,
                        panicJudith:
                          localStorage.getItem("players") === "2"
                            ? this.state.panicJudith + 10
                            : "" ||
                              (localStorage.getItem("players") === "1,2" &&
                                this.state.count2J % 2 === 0)
                              ? this.state.panicJudith + 10
                              : this.state.panicJudith,
                        isEnigmeVisible: false,
                        intro:
                          localStorage.getItem("players") === "1"
                            ? "Trop tard! relance les dès"
                            : "" ||
                              (localStorage.getItem("players") === "1,2" &&
                                this.state.count2J % 2 === 0)
                              ? "Trop tard! Allan lance les dès"
                              : "Trop tard ! Judith lance les dès",
                        test: this.state.test + 10,
                      })
                    }
                    size={362}
                    trailColor={"#FFFFF"}
                  >
                    {this.renderTime}
                  </CountdownCircleTimer>
                </div>

                <DisplayEnigme className="enigme" enigme={this.state.enigme} />
                <div className="diceContainer">
                  {pictureDice1}
                  {this.state.count}
                </div>
              </div>
              <div className="showSolution">
                <ShowSolutions
                  enigme={this.state.enigme}
                  solutions={this.state.solutions}
                  onCorrectResponse={this.onCorrectResponse}
                  onIncorrectResponse={this.onIncorrectResponse}
                  buttonEnabled2={this.state.buttonEnabled2}
                />
              </div>
            </div>
          )}
          <di />
        </div>
        <div className="displayPionsContainer2">
          <DisplayPion
            p1TOP={top1}
            p1LEFT={left1}
            p2TOP={top2}
            p2RIGHT={right2}
            p3BOTTOM={bottom3}
            p3RIGHT={right3}
            p4BOTTOM={bottom4}
            p4LEFT={left4}
          />
        </div>
      </div>
    );
  }
}


export default DisplayEnigmeJ1;
