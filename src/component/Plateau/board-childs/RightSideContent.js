import React from 'react'
import './board-childs.css'

import Dice from './rightsidecontent-childs/Dice'

function RightSideContent(){
    return(
        <div className="side-content">
            <Dice/>
            <h1>right side</h1>
        </div>
    )
}

export default RightSideContent;