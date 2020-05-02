import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Enigme from '../Enigme/Enigme';
import './Plateau.css'
import Player1 from '../SelectedPlayers/Player1';
import Player2 from '../SelectedPlayers/Player2';
import Player3 from '../SelectedPlayers/Player3';
import Player4 from '../SelectedPlayers/Player4';





class PlateauA extends React.Component {
  

    render() {

   

      return (


          <div className="containerPlateau">
           

            <div className="">
              <Enigme />
            </div>
          </div>
      )
    }
  }

  export default PlateauA