import React from 'react'
import '../css/board-square.css'

import Player from './Player'

function LeftSideContent(){

const players = ['Chloe','Elodie','Michael','Grégory']
.map( (player, id )=> <Player key={id.toString()} player={player}/>)

    return(
        <div className="side-content">
            {players}
            <h1>left side</h1>
        </div>
    )
}

export default LeftSideContent;