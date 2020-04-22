import React from 'react'
import '../css/board-square.css'

class SmallSquare extends React.Component{
    buildSmallSquare = () => {
        
        return <div className="smallSquare"> small square</div>
    }
    
    render(){

        

        return(
            this.buildSmallSquare()
        )
    }
}

export default SmallSquare;