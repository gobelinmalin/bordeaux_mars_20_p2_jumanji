import React from 'react'

import CentralButton from './CentralButton'
import BigSquare from './BigSquare'

import '../css/board-square.css'

function BuildBoard(){

    const totalSquare = []
    const numSquare = 3

    for( let y = 1; y < numSquare; y++){
        if( y> 1  ){
            totalSquare.push(<CentralButton/>)
        }
        for( let x = 0; x < numSquare; x++){
            totalSquare.push(<BigSquare key={x.toString()}/>)
        }
    
        totalSquare.push(<BigSquare key={y.toString()} />) 
    }
    
    return (
        <div className="board">
            {totalSquare}
        </div>
    )
}

export default BuildBoard