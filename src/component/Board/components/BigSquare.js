import React from 'react'
import SmallSquare from './SmallSquare'

import '../css/board-square.css'

function BigSquare (){
    
    const totalSmallSquare = []
    const numSquare = 3
    
    for( let y = 0; y < numSquare; y++){
            
        for( let x = 1; x < numSquare; x++){
                
            totalSmallSquare.push(<SmallSquare/>)
        }
            
        totalSmallSquare.push(<SmallSquare/>) 
            
    }
        
    return(
    <div className="bigSquare">{totalSmallSquare}</div>
    )

}

export default BigSquare