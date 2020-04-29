import React from "react"
//import datas from './data.js'
import './css/board-square.css'

import BuildBoard from './board-childs/BuildBoard'
import LeftSideContent from './board-childs/LeftSideContent'
import RightSideContent from './board-childs/RightSideContent'

class Board extends React.Component{
    constructor(){
        super()
        this.state = null
    }
    
    squareLocation = () => {
        //const xLoc = this.state.x
        //const yLoc = this.state.y
        
        
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