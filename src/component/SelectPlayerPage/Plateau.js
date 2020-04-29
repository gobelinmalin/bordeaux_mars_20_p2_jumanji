import React from 'react';
import { NavLink } from 'react-router-dom';

class Plateau extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    selectedPlayers : localStorage.getItem('players')
  }
}
  render() {
    return <h1>Bonjour, {this.state.selectedPlayers}</h1>;
  }
}

export default Plateau