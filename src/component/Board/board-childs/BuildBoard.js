import React from 'react'

import CentralButton from './buildboard-childs/CentralButton'
import SmallSquare from './buildboard-childs/SmallSquare'
import './board-childs.css'

function BuildBoard(props){

    let totalSmallSquare = []
    let count = 0
    let location = []
    let cols = []
    let rows = []
    const numberCols = 11
    const numberRows = 11
    const coordinate = [
        {
            x: 0,
            y: 1,
        }
    ]


    for( let y = 0; y < numberCols; y++){
        cols=y
       
        for( let x = 0; x < numberRows; x++){
            rows=x
            
            location[x]=[rows,cols]
            
            location.map( i => coordinate.x = rows)
            location.map( i => coordinate.y = cols)
            
            /* ids.push(rows + cols)
            ids = ids.map((i,j) => j) */
            
            totalSmallSquare
            .push(
                <SmallSquare 
                    key={count.toString()} 
                    id={count++} 
                    idy={coordinate.y} 
                    idx={coordinate.x}
                    name=""
                />)
            }
            
    }
    
    totalSmallSquare
    .push(<CentralButton 
        className="central-button" 
        key={"CentralButton"} 
        />)

    console.log(props)

    return (
        <>
            <div className="board" >
                {totalSmallSquare} 
            </div>
            test:{props.test}
        </>
    )
}

export default BuildBoard;