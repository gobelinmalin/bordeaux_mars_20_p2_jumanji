import React from "react"
import datas from './data.js'
import './css/board-square.css'

import TestEnigme from './components/TestEnigme'
import SmallSquare from './components/SmallSquare'

class Board extends React.Component{
    constructor(){
        super()
        this.state = datas
    }

    buildBigSquare = () => {

        const totalSmallSquare = []
        const numSquare = 3
        for( let y = 0; y < numSquare; y++){
            
            for( let x = 1; x < numSquare; x++){
                
                totalSmallSquare.push(<SmallSquare/>)
            }
            
            totalSmallSquare.push(<SmallSquare/>) 
            
        }
        return (
        <div className="bigSquare">{totalSmallSquare}</div>
        )
    }
    
    buildBoard = (square) => {

        return (
                <div className="board">
                    {square}
                </div>
        )
    }
    squareEnigma = () => {
        return(
            <div className="enigma">?</div>
        )
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
            const totalSquare = []
            const numSquare = 3
            for( let y = 1; y < numSquare; y++){
                
                if( y> 1  ){
                    totalSquare.push(<TestEnigme/>)
                }
                for( let x = 0; x < numSquare; x++){
                    
                    totalSquare.push(this.buildBigSquare())
                }
                
                totalSquare.push(this.buildBigSquare()) 
                
            }
            
            return(
                <div className="handler">
                    {this.buildBoard(totalSquare)}
                </div>
                )
            }
        }
        
        export default Board;