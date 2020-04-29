import React from 'react'
import './player.css'

function Player(props){
    return(
        <>
            <div className="player">{props.player}</div>
        </>
    )
}

export default Player;