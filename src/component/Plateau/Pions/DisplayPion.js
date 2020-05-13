import React from "react";
import Pion1 from "./Pion1";
import Pion2 from "./Pion2";
import Pion3 from "./Pion3";
import Pion4 from "./Pion4";
import "./Pion.css";

class DisplayPion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPion: localStorage.getItem("players"),
    };
  }

  displayPion1 = () => {
    let pionNumber1 = (
      <div className="containerBottomPion">
        <div className="zonePion3">

          <div
            className="containerPion1"
            style={{
              top: this.props.p1TOP,
              left: this.props.p1LEFT,
              position: "relative",
              border: "solid orange",
            }}
          >
            <Pion1 />
          </div>

        </div>
      </div>
    );
    return pionNumber1;
  };
  displayPion2 = () => {
    let pionNumber2 = (
      <div className="containerTopPion">
        <div className="zonePion2">

          <div
            className="container2Pion2"
            style={{
              top: this.props.p2TOP,
              right: this.props.p2RIGHT,
              position: "relative",
              //border: "solid cyan",
            }}
          >
            <Pion2 />
          </div>

        </div>
      </div>

    );
    return pionNumber2;
  };
  displayPion3 = () => {
    let pionNumber3 = (
      <div className="containerBottomPion">
        <div className="zonePion3">
          <div
            className="containerPion3"
            style={{
              bottom: this.props.p3BOTTOM,
              right: this.props.p3RIGHT,
              position: "relative",
              border: "solid green",
            }}
          >
            <Pion3 />
          </div>
        </div>
      </div>
    );
    return pionNumber3;
  };

  displayPion4 = () => {
    let pionNumber4 = (
      <div className="containerBottomPion">
        <div className="zonePion4">
          <div
            className="containerPion4"
            style={{
              bottom: this.props.p4BOTTOM,
              left: this.props.p4LEFT,
              position: "relative",
              border: "solid pink",
            }}
          >
            <Pion4 />
          </div>
        </div>
      </div>
    );
    return pionNumber4;
  };

  render() {
    let displayPionTest;
    if (this.state.selectedPion === "3") {
      displayPionTest = "joueur3 est selectionné";
    } else if (this.state.selectedPion === "1,2") {
      return [[this.displayPion1()], [this.displayPion2()]];
    } else if (this.state.selectedPion === "1,3") {
      displayPionTest = "joueur1 et 3";
    } else if (this.state.selectedPion === "1,4") {
      displayPionTest = "joueur3 et 4 est selectionné";
    } else if (this.state.selectedPion === "1,2,3") {
      return [this.displayPion3(), this.displayPion2(), this.displayPion1()];
    } else if (this.state.selectedPion === "1,2,3,4") {
      displayPionTest = "joueur1, 2, 3, 4 est selectionné";
    }
    return <div className="containerPion">{displayPionTest}</div>;
  }
}

export default DisplayPion;
