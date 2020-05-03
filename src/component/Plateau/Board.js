import React from "react"
//import datas from './data.js'
import './css/board-square.css'

import BuildBoard from './board-childs/BuildBoard'
import LeftSideContent from './board-childs/LeftSideContent'
import RightSideContent from './board-childs/RightSideContent'

function Board(){

    return (
        <div className="handler">
            <LeftSideContent />
            <div className="handler-board"><BuildBoard test="test from Board" /></div>
            <RightSideContent />
        </div>

    )
}

export default Board;