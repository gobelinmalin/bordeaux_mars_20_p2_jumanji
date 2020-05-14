import React from "react";
import { render } from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import './EscapeConfirmation.css'
import { NavLink } from 'react-router-dom';



class Rules2 extends React.Component {
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
      <div className="containerfullPopUpRules">

        <button className="toRules2" onClick={this.onOpenModal}>Règles</button>
        <Modal className="popUpfull" open={open} onClose={this.onCloseModal}>
            <div className="containerRules2">
                <div className="logoRules">
                    <img src="https://zupimages.net/up/20/16/fc7x.png" alt="" />

                </div>
                <div className="containerPages">
                    <div className="page1">


                    </div>
                    <div className="page2">


                    </div>
                </div>
            </div>
        </Modal>
      </div>
    );
  }
}

export default Rules2