import React from 'react'
import '../css/board-square.css'

class SmallSquare extends React.Component{
    buildSmallSquare = () => {
        
        return <div className="smallSquare"> small square (component)</div>
    }
    
    render(){

        

        return(
            this.buildSmallSquare()
        )
    }
}

export default SmallSquare;