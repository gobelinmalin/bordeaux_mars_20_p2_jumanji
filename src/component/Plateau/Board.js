import React from "react"
//import datas from './data.js'
import './css/board-square.css'
import { NavLink } from 'react-router-dom';

import BuildBoard from './board-childs/BuildBoard'

function Board(){

    return (
        <div className="handler">
            <div className="handler-board"><BuildBoard test="test from Board" /></div>
        </div>

    )
}

export default Board;