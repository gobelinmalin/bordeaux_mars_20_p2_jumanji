import React from 'react'

import CentralButton from './CentralButton'
import SmallSquare from './SmallSquare'
import Path from "./SmallSquare"
import '../css/board-square.css'

function BuildBoard(){

    const paths = <Path/> 
    const squares = <SmallSquare/> 
    const pathPlayer1 = [0,1,2,3,4,5,6,7,8,19,30,41,52,63,62]
    //let ids = []
    let totalSmallSquare = []
    let count = 0
    let countPath = 0
    let countPath2 = 0
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
    let path = []
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
                />)
            path
            .push(
                <Path 
                    key={count.toString()} 
                    id={countPath ++} 
                />)  
                //console.log(count,"coucou")
            }
            
    }
    
    
    totalSmallSquare.push(<CentralButton className="" key={"CentralButton"}/>)


    //console.log(path[0],"hello",totalSmallSquare[0])

    

    return (

        <div className="board" >
            {totalSmallSquare}
        </div>
    )
}

export default BuildBoard