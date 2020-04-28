import React from 'react'
import SmallSquare from './SmallSquare'

import '../css/board-square.css'

function BigSquare (){
    
    const totalSmallSquare = []
    let location = []
    let cols = []
    let rows = []
    const numberCols = 3
    const numberRows = 3
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
   
    return(
       
        <div className="bigSquare" >{totalSmallSquare}</div>
    )
}

export default BigSquare