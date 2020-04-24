import React from 'react'
import '../css/board-square.css'

function SmallSquare (props){
        
return <div className="smallSquare">x:{props.idx} y:{props.idy}</div>
    
}


export default SmallSquare;