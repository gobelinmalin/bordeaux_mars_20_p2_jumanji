import React from 'react';
import { NavLink } from 'react-router-dom';
import Player1 from './Player1';
import Player2 from './Player2'
import Player3 from './Player3';
import Player4 from './Player4'

class LeftSide extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    selectedPlayers : localStorage.getItem('players')
  }
}



  render() {

    let playerNumber
  
    if (this.state.selectedPlayers == "1") {
    playerNumber = [ <Player1 /> ]
    } else if (this.state.selectedPlayers == "2") {
      playerNumber = [ <Player2 /> ]
    } else if (this.state.selectedPlayers == "3") {
      playerNumber = [ <Player3 /> ]
    } else if (this.state.selectedPlayers == "4") {
      playerNumber = [ <Player4 /> ]
    } else if (this.state.selectedPlayers == "1,2") {
      playerNumber = [ <Player1 />, <Player2 /> ]
    } else if (this.state.selectedPlayers == "1,2,3") {
      playerNumber = [ <Player1 />, <Player2 />, <Player3 /> ]
    } else if (this.state.selectedPlayers == "1,2,3,4") {
      playerNumber = [ <Player1 />, <Player2 />, <Player3 />, <Player4 /> ]
    } else if (this.state.selectedPlayers == "2,3") {
      playerNumber = [ <Player2 />, <Player3 />]
    } else if (this.state.selectedPlayers == "2,3,4") {
      playerNumber = [ <Player2 />, <Player3 />, <Player4 /> ]
    } else if (this.state.selectedPlayers == "2,4") {
      playerNumber = [ <Player2 />, <Player4 /> ]
    } else if (this.state.selectedPlayers == "3,4") {
      playerNumber = [ <Player3 />, <Player4 /> ]
    }
  
    return (
    <div> {playerNumber}</div>
    )
  }
}

export default LeftSide