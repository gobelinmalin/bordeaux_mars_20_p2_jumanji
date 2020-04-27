import React from 'react'

import CentralButton from './CentralButton'
import BigSquare from './BigSquare'

import '../css/board-square.css'

function BuildBoard(){

    const totalSquare = []
    const numSquare = 3

    for( let y = 1; y < numSquare; y++){
        if( y> 1  ){
            totalSquare.push(<CentralButton key={Math.ceil(Math.random()*1000)}/>)
        }
        for( let x = 0; x < numSquare; x++){
            totalSquare.push(<BigSquare key={Math.ceil(Math.random()*1000)}/>)
        }
    
        totalSquare.push(<BigSquare key={Math.ceil(Math.random()*1000)} />) 
    }
    
    return (
        <div className="board" >
            {totalSquare}
        </div>
    )
}

export default BuildBoard