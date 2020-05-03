
import React from 'react';


class AnswerButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.clickHandler}>
                Mauvaise réponse
            </button>
        );
    }
}

export default AnswerButton;