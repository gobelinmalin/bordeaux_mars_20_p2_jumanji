import React from "react"
import datas from './data.js'
import './css/board-square.css'

import BuildBoard from './components/BuildBoard'
import LeftSideContent from './components/LeftSideContent'
import RightSideContent from './components/RightSideContent'

class Board extends React.Component{
    constructor(){
        super()
        this.state = null
    }

    
    squareLocation = () => {
        const xLoc = this.state.x
        const yLoc = this.state.y
        const locate = [xLoc,yLoc]
        
        
        return (
            "test"
            )
        }
    
    
        
    render(){
        
        return(
            <div className="handler">
                <LeftSideContent/>
                <div className="handler-board"><BuildBoard/></div>
                <RightSideContent/>
            </div>
            
        )
    }
}
        
export default Board;