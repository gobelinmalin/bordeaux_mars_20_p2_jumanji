import React from 'react'

import CentralButton from './CentralButton'
import SmallSquare from './SmallSquare'
import Path from './Path'

import '../css/board-square.css'

function BuildBoard(){
    let ids = []
    const totalSmallSquare = []
    let location = []
    let cols = []
    let rows = []
    const numberCols = 11
    const numberRows = 11
    const coordinate = [
        {
            x: 0,
            y: 1,
            id: ''
        }
    ]

    for( let y = 0; y < numberCols; y++){
        cols=y
       
        for( let x = 0; x < numberRows; x++){
            
            rows=x
            location[x]=[rows,cols]
            location.map( i => coordinate.x = rows)
            location.map( i => coordinate.y = cols)
            ids.push(rows+cols)
            //ids.map(i => i)
            //coordinate.id = ids.map( (i,j) => coordinate.id = j.toString())
            totalSmallSquare
            .push(<SmallSquare 
                key={"test"} 
                id={"test"} 
                idy={coordinate.y} 
                idx={coordinate.x}
                />)
            }

    }
    totalSmallSquare.push(<CentralButton className="" key={"CentralButton"}/>)

    console.log(ids)
    
    
    return (

        <div className="board" >
            {totalSmallSquare}
        </div>
    )
}

export default BuildBoard