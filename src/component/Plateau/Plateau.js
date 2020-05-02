import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LeftSide from '../PlateauLeftSide/LeftSide';
import AnswerBouton from '../PlateauLeftSide/AnswerBouton'
import Enigme from '../Enigme/Enigme';
import './Plateau.css'


class PlateauA extends React.Component {
    render() {
      return (
          <div className="containerPlateau">
            <div className="containerLeftSidePlateau">
              <LeftSide />
            </div>

            <div className="bouleEnigme">
              <Enigme />
            </div>
          </div>
      )
    }
  }

  export default PlateauA