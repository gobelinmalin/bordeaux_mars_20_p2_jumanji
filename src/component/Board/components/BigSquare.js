import React from 'react'
import SmallSquare from './SmallSquare'

import '../css/board-square.css'

function BigSquare (){
    
    const totalSmallSquare = new Array()
    let location = new Array()
    let cols = new Array()
    let rows = new Array()
    const numberCols = 3
    const numberRows = 3
    const coordinate = [
        {
            x: 0,
            y: 1
        }
    ]

/* 
> let result = []
> let x = [ 1 ,2 ,3]
> let y = [ 'A', 'B' ,'C']
> result[0] = [x[],y[0]]
[ 1, 'a' ]
 */
    
    for( let y = 0; y < numberCols; y++){
        cols=y
        for( let x = 0; x < numberRows; x++){
            
            rows=x
            location[x]=[rows,cols]
            location.map( i => coordinate.y = cols)
            location.map( i => coordinate.x = rows)

            totalSmallSquare.push(<SmallSquare key={Math.ceil(Math.random()*1000)} idy={coordinate.y} idx={coordinate.x}/>)
        }
        
    }

   
    console.log(location);
    return(
    <div className="bigSquare" >{totalSmallSquare}</div>
    )

}

export default BigSquare