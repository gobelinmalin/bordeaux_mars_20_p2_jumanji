import React from 'react'
import '../css/board-square.css'

import Dice from './Dice'

function RightSideContent(){
    return(
        <div className="side-content">
            <Dice/>
            <h1>right side</h1>
        </div>
    )
}

export default RightSideContent;