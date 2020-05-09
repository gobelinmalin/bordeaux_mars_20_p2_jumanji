import React from "react";
import Pion1 from "./Pion1";
import Pion2 from "./Pion2";
import Pion3 from "./Pion3";
import Pion4 from "./Pion4";
import "./Pion.css";

class DisplayPion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedPion: localStorage.getItem('players'),
      top1: -25,
      left1: 0,
      pathLeft : 4
    }

  }

  displayPion1 = () => {
    let pionNumber1
    if (this.state.selectedPion == "1") {
      pionNumber1 = [<Pion1 />]
    } else if (this.state.selectedPion == "1,2") {
      pionNumber1 = [<Pion1 />]
    } else if (this.state.selectedPion == "1,3") {
      pionNumber1 = [<Pion1 />]
    } else if (this.state.selectedPion == "1,4") {
      pionNumber1 = [<Pion1 />]
    } else if (this.state.selectedPion == "1,2,3") {
      pionNumber1 = [<Pion1 />]
    } else if (this.state.selectedPion == "1,2,3,4") {
      pionNumber1 = [<Pion1 />]
    }

    return pionNumber1
  }
  displayPion2 = () => {
    let pionNumber2
    if (this.state.selectedPion == "2") {
      pionNumber2 = [<Pion2 />]
    } else if (this.state.selectedPion == "1,2") {
      pionNumber2 = [<Pion2 />]
    } else if (this.state.selectedPion == "2,3") {
      pionNumber2 = [<Pion2 />]
    } else if (this.state.selectedPion == "2,4") {
      pionNumber2 = [<Pion2 />]
    } else if (this.state.selectedPion == "1,2,3") {
      pionNumber2 = [<Pion2 />]
    } else if (this.state.selectedPion == "1,2,3,4") {
      pionNumber2 = [<Pion2 />]
    }

    return pionNumber2
  }
  displayPion3 = () => {
    let pionNumber3
    if (this.state.selectedPion == "3") {
      pionNumber3 = [<Pion3 />]
    } else if (this.state.selectedPion == "1,3") {
      pionNumber3 = [<Pion3 />]
    } else if (this.state.selectedPion == "2,3") {
      pionNumber3 = [<Pion3 />]
    } else if (this.state.selectedPion == "3,4") {
      pionNumber3 = [<Pion3 />]
    } else if (this.state.selectedPion == "1,2,3") {
      pionNumber3 = [<Pion3 />]
    } else if (this.state.selectedPion == "1,2,3,4") {
      pionNumber3 = [<Pion3 />]
    } else if (this.state.selectedPion == "2,3,4") {
      pionNumber3 = [<Pion3 />]
    }
    return pionNumber3
  }
  displayPion4 = () => {
    let pionNumber4
    if (this.state.selectedPion == "4") {
      pionNumber4 = [<Pion4 />]
    } else if (this.state.selectedPion == "1,4") {
      pionNumber4 = [<Pion4 />]
    } else if (this.state.selectedPion == "2,4") {
      pionNumber4 = [<Pion4 />]
    } else if (this.state.selectedPion == "3,4") {
      pionNumber4 = [<Pion4 />]
    } else if (this.state.selectedPion == "1,2,4") {
      pionNumber4 = [<Pion4 />]
    } else if (this.state.selectedPion == "1,2,3,4") {
      pionNumber4 = [<Pion4 />]
    } else if (this.state.selectedPion == "2,3,4") {
      pionNumber4 = [<Pion4 />]
    }
    return pionNumber4
  }

  avancerPion1 = (e1, e2) => {

    // let dice = this.props.diceOne["0"]._owner.stateNode.state.dice1
    const {diceValue,getNewEnigmeAndSolutions} = this.props
    let dice = diceValue
    let pathY = 155
    let pathX = 40
    this.setState(prvestate => ({pathLeft : Math.ceil(e1/60) +1 })) // calcul le nombre de case restante sur top1
    console.log(e1, this.state.pathLeft, "TEST")

    // si dice > 4 , dice = 4
    if (e1 > pathY) {
      this.setState({ left1: e2 + 40 })
    } else {
      this.setState({ top1: e1 + dice * 60 })

    }
  };

  render() {
    // const { diceOne, diceTwo } = this.props[""0""]._owner.stateNode.state.dice1

    /*const dice_1 = this.props.diceOne["0"]._owner.stateNode.state.dice1
    console.log(this.props.diceOne["0"]._owner.stateNode.state.dice1, "dice1")
    */
    const {getNewEnigmeAndSolutions} = this.props
    console.log({...this.props}, "PROPS")
    const { top1, left1 } = this.state
    return (
      <div className="containerPion">
        <div className="containerTopPion">
          <div className="zonePion1">
          {/* <button onClick={() => this.avancerPion1(top1, left1)}> ALLEZ UH!</button> */}
            {/* <div style={{ top: top1, left: left1, position: 'relative' }} className="containerPion1"> */}
            <div className="containerPion1">
              {this.displayPion1()}
            </div>
          </div>
          <div className="zonePion2">
            <div className="container2Pion2">
              {this.displayPion2()}
            </div>

          </div>
        </div>
        <div className="containerBottomPion">
          <div className="zonePion3">
            <div className="containerPion3">
              {this.displayPion3()}
            </div>
          </div>
          <div className="zonePion4">
            <div className="containerPion4">
              {this.displayPion4()}
            </div>
          </div>
        </div>
      </div>
    )

  }
}

export default DisplayPion;
