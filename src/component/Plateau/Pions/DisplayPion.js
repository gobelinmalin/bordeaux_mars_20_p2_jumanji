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
    }

  }

  displayPion1 = () => {
    let pionNumber1 =
        <div
          className="containerPion1"
          style={{
            top: this.props.p1TOP,
            left: this.props.p1LEFT,
            position: 'relative',
            border: 'solid orange'
          }}>
          <Pion1 />
        </div>

    /* if (this.state.selectedPion === '1') {
      return pionNumber1
    } else if (this.state.selectedPion === '1,2') {
      return pionNumber1
    } else if (this.state.selectedPion === '1,3') {
      return pionNumber1
    } else if (this.state.selectedPion === '1,4') {
      return pionNumber1
    } else if (this.state.selectedPion === '1,2,3') {
      return pionNumber1
    } else if (this.state.selectedPion === '1,2,3,4') {
      return pionNumber1
    } */

    return pionNumber1
  }
  displayPion2 = () => {
    let pionNumber2 =
        <div
          className="container2Pion2"
          style={{
            top: this.props.p2TOP,
            right: this.props.p2RIGHT,
            position: 'relative',
            border: 'solid cyan'
          }}>
          <Pion2 />
        </div>
    /* if (this.state.selectedPion === '2') {
      return pionNumber2
    } else if (this.state.selectedPion === '1,2') {
      return pionNumber2
    } else if (this.state.selectedPion === '2,3') {
      return pionNumber2
    } else if (this.state.selectedPion === '2,4') {
      return pionNumber2
    } else if (this.state.selectedPion === '1,2,3') {
      return pionNumber2
    } else if (this.state.selectedPion === '1,2,3,4') {
      return pionNumber2
    } */

    return pionNumber2
  }
  displayPion3 = () => {
    let pionNumber3 = <div className="containerBottomPion">

      <div className="zonePion3">
        <div
          className="containerPion3"
          style={{
            bottom: this.props.p3BOTTOM,
            right: this.props.p3RIGHT,
            position: 'relative',
            border: 'solid green'
          }}
        >
          <Pion3 />
        </div>
      </div>

    </div>
    return pionNumber3
    /* if (this.state.selectedPion == "3") {
      return pionNumber3
    } else if (this.state.selectedPion == "1,3") {
      return pionNumber3
    } else if (this.state.selectedPion == "2,3") {
      return pionNumber3
    } else if (this.state.selectedPion == "3,4") {
      return pionNumber3
    } else if (this.state.selectedPion == "1,2,3") {
      return pionNumber3
    } else if (this.state.selectedPion == "1,2,3,4") {
      return pionNumber3
    } else if (this.state.selectedPion == "2,3,4") {
      return pionNumber3
    }
    return pionNumber3 */
  }
  displayPion4 = () => {
    let pionNumber4 = <div className="containerBottomPion">

      <div className="zonePion4">
        <div
          className="containerPion4"
          style={{
            bottom: this.props.p4BOTTOM,
            left: this.props.p4LEFT,
            position: 'relative',
            border: 'solid pink'
          }}
        >
          <Pion4 />
        </div>
      </div>

    </div>
    return pionNumber4
    /* if (this.state.selectedPion === "4") {
      return pionNumber4
    } else if (this.state.selectedPion == "1,4") {
      return pionNumber4
    } else if (this.state.selectedPion == "2,4") {
      return pionNumber4
    } else if (this.state.selectedPion == "3,4") {
      return pionNumber4
    } else if (this.state.selectedPion == "1,2,4") {
      return pionNumber4
    } else if (this.state.selectedPion == "1,2,3,4") {
      return pionNumber4
    } else if (this.state.selectedPion == "2,3,4") {
      return pionNumber4
    }
    return pionNumber4 */
  }

  renderPions = () => {

    /*const { selectedPion } = this.state
     switch (selectedPion) {
      case "1" && "1,2" ||  "1,3" || "1,4" || "1,2,3" || "1,2,3,4": // good le mettre en if
         return this.displayPion1()

      case "2" && "1,2" || "2,3" || "2,4" || "1,2,3" || "1,2,3,4":

         return this.displayPion2()


      case selectedPion[4]:
        return this.displayPion3()


        break;
      case selectedPion[6]:
        return this.displayPion4()

        break


      default:
        break;
    } */
    /* if (selectedPion === "1" || "1,2" || "1,3" || "1,4" || "1,2,3" || "1,2,3,4") {
      return this.displayPion1()
    } else if (selectedPion === "2" || "1,2" || "2,3" || "2,4" || "1,2,3" || "1,2,3,4") {
      return this.displayPion2()
    } else if (selectedPion === "3" || "1,3" || "2,3" || "3,4" || "1,2,3" || "1,2,3,4" || "2,3,4") {
      return this.displayPion3()
    } else if (selectedPion === "4" || "1,4" || "2,4" || "3,4" || "1,2,4" || "1,2,3,4" || "2,3,4") {
      return this.displayPion4()
    } */



    /*
    if (this.state.selectedPion == "2") {
      return this.displayPion2()
    } else if (this.state.selectedPion == "1,2") {
      return this.displayPion2()
    } else if (this.state.selectedPion == "2,3") {
      return this.displayPion2()
    } else if (this.state.selectedPion == "2,4") {
      return this.displayPion2()
    } else if (this.state.selectedPion == "1,2,3") {
      return this.displayPion2()
    } else if (this.state.selectedPion == "1,2,3,4") {
      return this.displayPion2()
    }

    if (this.state.selectedPion == "3") {
      return this.displayPion3()
    } else if (this.state.selectedPion == "1,3") {
      return this.displayPion3()
    } else if (this.state.selectedPion == "2,3") {
      return this.displayPion3()
    } else if (this.state.selectedPion == "3,4") {
      return this.displayPion3()
    } else if (this.state.selectedPion == "1,2,3") {
      return this.displayPion3()
    } else if (this.state.selectedPion == "1,2,3,4") {
      return this.displayPion3()
    } else if (this.state.selectedPion == "2,3,4") {
      return this.displayPion3()
    }*/


  }

  render() {

    let displayPionTest
    if (this.state.selectedPion === "3") {
      displayPionTest = "joueur3 est selectionné"
    } else if (this.state.selectedPion === "1,2") {
      displayPionTest = "joueur1 et 2 est selectionné"
    } else if (this.state.selectedPion === "1,3") {
      displayPionTest = "joueur1 et 3"
    } else if (this.state.selectedPion === "1,4") {
      displayPionTest = "joueur3 et 4 est selectionné"
    } else if (this.state.selectedPion === "1,2,3") {
      return [this.displayPion3() ,this.displayPion2(), this.displayPion1()]
    } else if (this.state.selectedPion === "1,2,3,4") {
      displayPionTest ="joueur1, 2, 3, 4 est selectionné"
    }


    console.log(this.state.selectedPion)
    return (
      <div className="containerPion">
        {/* {displayPionTest} */}
      </div>
    )
  }
}

export default DisplayPion;
