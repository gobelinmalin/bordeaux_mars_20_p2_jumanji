import React from "react";
import axios from "axios";

class ShowSolutions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null
    };
  }

  onInputChange = event => {
    this.setState({ response: event.target.value });
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
        <ul>
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
        <button onClick={this.onValidate}>Combattre</button>
      </div>
    );
  }
}

export default ShowSolutions;
