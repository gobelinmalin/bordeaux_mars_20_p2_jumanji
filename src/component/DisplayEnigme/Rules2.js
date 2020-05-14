import React from "react";
import { render } from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import './EscapeConfirmation.css'
import { NavLink } from 'react-router-dom';
import './Rules2.css'



class Rules2 extends React.Component {
  state = {
    open: true
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

        <button className="toEscape2" onClick={this.onOpenModal}>Règles</button>
        <Modal className="popUpfull2" open={open} onClose={this.onCloseModal}>
          <div className="containerPopUp2">
            <h2 className="titlePopUp2">JUMANJI</h2>
            <p className="textPopUp2">
             Un jeu pour tous ceux qui espèrent laisser derrière eux leur univers...
            </p>
            <p className="textPopUp2">
             1. Ne lancer les dès que si vous avez l'intention de terminer
            </p>
            <p className="textPopUp2">
        
             2. Les effest saisissants de ce jeux ne cesseront que lorsqu'un des joueurs aura atteint Jumanji
    
            </p>
            <p className="textPopUp2">

             3. Aventurier méfiez-vous de votre niveau de panic. Votre équipe entière risquerait de ne pas s'en sortir!
            </p>
          </div>

        </Modal>
      </div>
    );
  }
}

export default Rules2