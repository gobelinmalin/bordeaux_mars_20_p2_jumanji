import React from "react"
import datas from './data.js'
import './css/board-square.css'

class Board extends React.Component{
    constructor(){
        super()
        this.state = datas
    }

    buildSquare = () => {

        return (
            <div className="square"></div>
        )
    }
    
    buildBoard = (square) => {

        return (
                <div className="board">
                    {square}
                    <h1 className="enigma">enigma</h1>
                </div>
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
            const numSquare = 10
            
            
            for( let y = 0; y < numSquare; y++){
                
                for( let x = 0; x < numSquare; x++){
                    totalSquare.push(this.buildSquare())
                }

                totalSquare.push(this.buildSquare())
            }
            
            return(
                <div className="handler">
                    {this.buildBoard(totalSquare)}
                    {this.buildSquare()}
                </div>
                )
            }
        }
        
        export default Board;