import React from 'react'

import CentralButton from './CentralButton'
import SmallSquare from './SmallSquare'

import '../css/board-square.css'

function BuildBoard(){
    

    const totalSmallSquare = []
    let location = []
    let cols = []
    let rows = []
    const numberCols = 11
    const numberRows = 11
    const coordinate = [
        {
            x: 0,
            y: 1
        }
    ]

    for( let y = 0; y < numberCols; y++){
        cols=y
       
        for( let x = 0; x < numberRows; x++){
            
            rows=x
            location[x]=[rows,cols]
            location.map( i => coordinate.x = rows)
            location.map( i => coordinate.y = cols)

            totalSmallSquare.push(<SmallSquare key={Math.ceil(Math.random()*1000)} idy={coordinate.y} idx={coordinate.x}/>)
        }

    }
    totalSmallSquare.push(<CentralButton className="" key={Math.ceil(Math.random()*1000)}/>)

    
    return (

        <div className="board" >
            {totalSmallSquare}
        </div>
    )
}

export default BuildBoard