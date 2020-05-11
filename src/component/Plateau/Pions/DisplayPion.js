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
      selectedPion: '1'//localStorage.getItem('players'),
    }

  }

  displayPion1 = () => {
    let pionNumber1
    if (this.state.selectedPion === '1') {
      pionNumber1 = [<Pion1 />]
    } /* else if (this.state.selectedPion === '1,2') {
      pionNumber1 = [<Pion1 />]
    } else if (this.state.selectedPion === '1,3') {
      pionNumber1 = [<Pion1 />]
    } else if (this.state.selectedPion === '1,4') {
      pionNumber1 = [<Pion1 />]
    } else if (this.state.selectedPion === '1,2,3') {
      pionNumber1 = [<Pion1 />]
    } else if (this.state.selectedPion === '1,2,3,4') {
      pionNumber1 = [<Pion1 />]
    } */

    return pionNumber1
  }
  displayPion2 = () => {
    let pionNumber2
    if (this.state.selectedPion === '2') {
      pionNumber2 = [<Pion2 />]
    } /* else if (this.state.selectedPion === '1,2') {
      pionNumber2 = [<Pion2 />]
    } else if (this.state.selectedPion === '2,3') {
      pionNumber2 = [<Pion2 />]
    } else if (this.state.selectedPion === '2,4') {
      pionNumber2 = [<Pion2 />]
    } else if (this.state.selectedPion === '1,2,3') {
      pionNumber2 = [<Pion2 />]
    } else if (this.state.selectedPion === '1,2,3,4') {
      pionNumber2 = [<Pion2 />]
    } */

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

  render() {
    return (
      <div className="containerPion">
        <div className="containerTopPion">
          <div className="zonePion1">
            <div
              className="containerPion1"
              style={{
                top: this.props.p1TOP,
                left: this.props.p1LEFT,
                position: 'relative',
                border: 'solid orange'
              }}>
              {this.displayPion1()}
            </div>
          </div>
          <div className="zonePion2">
            <div
            className="container2Pion2"
            style={{
                top: this.props.p2TOP,
                right: this.props.p2RIGHT,
                position: 'relative',
                border: 'solid cyan'
              }}>
              {this.displayPion2()}
            </div>

          </div>
        </div>
        <div className="containerBottomPion">
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
              {this.displayPion3()}
            </div>
          </div>
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
              {this.displayPion4()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DisplayPion;
