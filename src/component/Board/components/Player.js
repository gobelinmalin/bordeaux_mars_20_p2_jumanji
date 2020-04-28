import React from 'react'
import '../css/board-square.css'
// test //
import Path from './Path'
// test //

function Player(props){
    return(
        <>
            <div className="player">{props.player}</div>
        </>
    )
}

export default Player;