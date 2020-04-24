import React from 'react'
import '../css/board-square.css'

function Player(props){
    console.log(props)
    return(
        
        <div className="player">{props.player}</div>
    )
}

export default Player;