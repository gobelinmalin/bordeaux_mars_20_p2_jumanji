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


  render() {
    let pionNumber1;
    if (this.state.selectedPion == "1") {
      pionNumber1 = [<Pion1 />];
    } else if (this.state.selectedPion == "1,2") {
      pionNumber1 = [<Pion1 />];
    } else if (this.state.selectedPion == "1,3") {
      pionNumber1 = [<Pion1 />];
    } else if (this.state.selectedPion == "1,4") {
      pionNumber1 = [<Pion1 />];
    } else if (this.state.selectedPion == "1,2,3") {
      pionNumber1 = [<Pion1 />];
    } else if (this.state.selectedPion == "1,2,3,4") {
      pionNumber1 = [<Pion1 />];
    }

    let pionNumber2;
    if (this.state.selectedPion == "2") {
      pionNumber2 = [<Pion2 />];
    } else if (this.state.selectedPion == "1,2") {
      pionNumber2 = [<Pion2 />];
    } else if (this.state.selectedPion == "2,3") {
      pionNumber2 = [<Pion2 />];
    } else if (this.state.selectedPion == "2,4") {
      pionNumber2 = [<Pion2 />];
    } else if (this.state.selectedPion == "1,2,3") {
      pionNumber2 = [<Pion2 />];
    } else if (this.state.selectedPion == "1,2,3,4") {
      pionNumber2 = [<Pion2 />];
    }

    let pionNumber3;
    if (this.state.selectedPion == "3") {
      pionNumber3 = [<Pion3 />];
    } else if (this.state.selectedPion == "1,3") {
      pionNumber3 = [<Pion3 />];
    } else if (this.state.selectedPion == "2,3") {
      pionNumber3 = [<Pion3 />];
    } else if (this.state.selectedPion == "3,4") {
      pionNumber3 = [<Pion3 />];
    } else if (this.state.selectedPion == "1,2,3") {
      pionNumber3 = [<Pion3 />];
    } else if (this.state.selectedPion == "1,2,3,4") {
      pionNumber3 = [<Pion3 />];
    } else if (this.state.selectedPion == "2,3,4") {
      pionNumber3 = [<Pion3 />];
    }

    let pionNumber4;
    if (this.state.selectedPion == "4") {
      pionNumber4 = [<Pion4 />];
    } else if (this.state.selectedPion == "1,4") {
      pionNumber4 = [<Pion4 />];
    } else if (this.state.selectedPion == "2,4") {
      pionNumber4 = [<Pion4 />];
    } else if (this.state.selectedPion == "3,4") {
      pionNumber4 = [<Pion4 />];
    } else if (this.state.selectedPion == "1,2,4") {
      pionNumber4 = [<Pion4 />];
    } else if (this.state.selectedPion == "1,2,3,4") {
      pionNumber4 = [<Pion4 />];
    } else if (this.state.selectedPion == "2,3,4") {
      pionNumber4 = [<Pion4 />];
    }

    return (
      <div className="containerPion">
        <div className="containerTopPion">
          <div className="zonePion1">
            <div className="containerPion1">{pionNumber1}</div>
          </div>
          <div className="zonePion2">
            <div className="container2Pion2">{pionNumber2}</div>
          </div>
        </div>
        <div className="containerBottomPion">
          <div className="zonePion3">
            <div className="containerPion3">{pionNumber3}</div>
          </div>
          <div className="zonePion4">
            <div className="containerPion4">{pionNumber4}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default DisplayPion;
