import React from 'react'
import Player1 from './Players/PlayersComponents/Player1'
import Player2 from './Players/PlayersComponents/Player2'
import Player3 from './Players/PlayersComponents/Player3'
import Player4 from './Players/PlayersComponents/Player4'

class LeftSide extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedPlayers : localStorage.getItem('players'),
    }
  
  }

    render() {

      let playerNumber
  
    if (this.state.selectedPlayers == "1") {
    playerNumber = [ <Player1 message="hello"/> ]
    } else if (this.state.selectedPlayers == "2") {
      playerNumber = [ <Player2 /> ]
    } else if (this.state.selectedPlayers == "3") {
      playerNumber = [ <Player3 /> ]
    } else if (this.state.selectedPlayers == "4") {
      playerNumber = [ <Player4 /> ]
    } else if (this.state.selectedPlayers == "1,2") {
      playerNumber = [ <Player1 />, <Player2 /> ]
    } else if (this.state.selectedPlayers == "1,3") {
      playerNumber = [ <Player1 />, <Player3 /> ]
    } else if (this.state.selectedPlayers == "1,4") {
      playerNumber = [ <Player1 />, <Player4 /> ]
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



        <div className="containerLeftSidePlateau">
            {playerNumber}
        </div>

        
 
  )
}
}



  export default LeftSide