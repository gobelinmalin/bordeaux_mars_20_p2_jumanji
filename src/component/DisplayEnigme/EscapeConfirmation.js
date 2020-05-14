import React from "react";
import { render } from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import './EscapeConfirmation.css'
import { NavLink } from 'react-router-dom';



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
      <div className="containerfullPopUp">

        <button className="toEscape2" onClick={this.onOpenModal}>Quitter</button>
        <Modal className="popUpfull" open={open} onClose={this.onCloseModal}>
          <div className="containerPopUp">
            <h2 className="titlePopUp">ATTENTION</h2>
            <p className="textPopUp2">
             Votre partie sera perdue si vous quitter maintenant.
             
            </p>
            <div className="actionCTAcontainer">
            <NavLink className="confirmerCTA" to="/select-player"  >Quitter le jeu !</NavLink>

            </div>
          </div>

        </Modal>
      </div>
    );
  }
}

export default EscapeConfirmation
