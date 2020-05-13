import React from "react";
import axios from "axios";
import './ShowSolution.css'

class ShowSolutions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
      buttonEnabled: false,
    };
  }

  onInputChange = event => {
    this.setState({ response: event.target.value, buttonEnabled: true });
  };

  onValidate = async () => {
    const isResponseCorrect =
      this.state.response === this.props.enigme.solution;
    if (isResponseCorrect) {
      this.props.onCorrectResponse(); 
    } else {
      this.props.onIncorrectResponse();
     
    }
    
  };

  render() {
    return (
      <div>
        <ul className="solutionEnigme2">
          {this.props.solutions.map(solution => (
            <li key={solution.text}>
              <input
                onChange={this.onInputChange}
                className="radioSolution"
                name="response"
                type="radio"
                value={solution.text}
              />
              {solution.text}
            </li>
          ))}
        </ul>
        <button className="combattreCTA2" onClick={this.onValidate} disabled={!this.state.buttonEnabled}>Combattre</button>
      </div>
    );
  }
}

export default ShowSolutions;
