import React from 'react'
import './board-childs.css'

import Player from './leftsidecontent-childs/Player'

function LeftSideContent(){

    const players = ['Chloe','Elodie','Michael','Grégory'] // bouchon API
    .map( (player, id )=> <Player key={id.toString()} player={player}/>)

        return(
            <div className="side-content">
                {players}
                <h1>left side</h1>
            </div>
        )
}

export default LeftSideContent;