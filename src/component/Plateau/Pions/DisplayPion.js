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
      style1: {
        marginTop: 150, //max 270px <== à mettre en state pour que la condition soit prise en compte
        marginLeft: 0, // puis faire un setState dans un componentDidUpdate()
        position: 'absolute',
        width: '64px'
      },
      style2: {
        marginTop: 0, //max 270px <== à mettre en state pour que la condition soit prise en compte
        marginLeft: 0, // puis faire un setState dans un componentDidUpdate()
        position: 'absolute',
        width: '64px'
      },
      style3: {
        marginTop: 0, //max 270px <== à mettre en state pour que la condition soit prise en compte
        marginLeft: 0, // puis faire un setState dans un componentDidUpdate()
        position: 'absolute',
        width: '64px'
      },
      style4: {
        marginTop: 0, //max 270px <== à mettre en state pour que la condition soit prise en compte
        marginLeft: 0, // puis faire un setState dans un componentDidUpdate()
        position: 'absolute',
        width: '64px'
      },

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

  componentDidMount() { }


  avancerPion1 = () => {
    const { diceOne, diceTwo } = this.props
    let style = {
      marginTop: 271, //max 270px <== à mettre en state pour que la condition soit prise en compte
      marginLeft: 0, // puis faire un setState dans un componentDidUpdate()
      position: 'absolute',
      width: '64px'
    }
    const diceTest = 3
      if (style.marginTop > 270) {

        style.marginLeft = diceTest * 50
      }else{
        style.marginTop = diceTest * 50
      }

    console.log(style.marginTop,style.marginLeft)


    return <div style={style} className="containerPion1">
      {this.displayPion1()}
    </div>

  };



  render() {
    const { diceOne, diceTwo } = this.props

    // console.log(diceOne, "D1")

    return (
      <div className="containerPion">
        <div className="containerTopPion">
          <div className="zonePion1">

           {this.avancerPion1()}
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
