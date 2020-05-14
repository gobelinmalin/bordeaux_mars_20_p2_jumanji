import React from "react";
import { render } from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import './EscapeConfirmation.css'



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
      <div >

        <button className="toEscape2" onClick={this.onOpenModal}>Quitter</button>
        <Modal open={open} onClose={this.onCloseModal}>
          <div className="containerPopUp">
            <h2 className="titlePopUp">CONFIRMATION</h2>
            <p className="textPopUp">
              Attention ! </p>
            <p className="textPopUp">
             Votre partie sera terminée si vous quitter maintenant.
            </p>
            <div className="actionCTAcontainer">
              <button className="annulerCTA"> Annuler </button>
              <button className="confirmerCTA"> Quitter </button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default EscapeConfirmation
