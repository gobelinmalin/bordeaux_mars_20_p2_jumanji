import React from "react";
import { render } from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import './EscapeConfirmation.css'

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class EscapeConfirmation extends React.Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
      <div style={styles}>
       
        <button className="toEscape2" onClick={this.onOpenModal}>Quitter</button>
        <Modal open={open} onClose={this.onCloseModal}>
          <h2>Confirmation</h2>
          <p>
            Attention ! Votre partie sera terminée si vous quitter maintenant.
          </p>
          <button className="annulerCTA"> Annuler </button>
          <button className="confirmerCTA"> Quitter </button>
        </Modal>
      </div>
    );
  }
}

export default EscapeConfirmation
