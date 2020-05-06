import React from 'react'
import paths from './path-datas'
import Grid from 'react-css-grid'
import CentralButton from './BuildBoardChilds/CentralButton'
import SmallSquare from './BuildBoardChilds/SmallSquare'
import './board-childs.css'

class BuildBoard extends React.Component {


    state = {
        squares: [
            [0, 0] //[0, 69] // 64px with + 5px margin
        ],
        path: paths,
    }

    changeItemValue = (array) => {
        let coordinates = [0, 0]// by square size : 64*64px => [0,0],[0,64px],[0,128px]...


        for (let j = 0; j < 10; j++) {

            let counter = 57 + 2 // 64px de coté + 5 px de marge
            for (let i = 0; i < 12; i++) {

                let count = 57 + 2 // 64px de coté + 5 px de marge
                coordinates = [count * i, counter * j]
                array.push(coordinates)

            }
            coordinates = [coordinates[0] + (55), counter * j] // 64px de coté + 5 px de marge
            array.push(coordinates)
        }
        // return array


        /* let count = 64
        array2Push = [count,0]
        array.push(array2Push)
        array2Push = [count*2,0]
        array.push(array2Push)
        array2Push = [count*3,0]
        array.push(array2Push) */


    }

    addArrayToState = (array) => {

        this.setState(prevState => ({
            squares: array
        }))
    } // wrong

    createPlayerPath = () => {
        const playerOnePath = this.state.path[0].pathPlayer1.path.map(i => i)
        const boardSquare = this.state.squares.map((i, j) => j)

        for (let i = 0; i < boardSquare.length; i++) {

            let count1 = 0
            let count2 = 0


            if (playerOnePath[count1] === boardSquare[count2]) {
                console.log("test")
                console.log(playerOnePath[count1] === boardSquare[count2])

            } else {
                console.log("tu peux pas test")

                count2 = i
            }

            // console.log(count1 = i)
        }



    }

    render() {
        let coordinate = []
        this.changeItemValue(this.state.squares)
        this.createPlayerPath()
        return (
            <>
                <div className="board" >
                    <SmallSquare coordinate={this.state.squares} />
                </div>
                <div className="enigma">
                    <CentralButton />
                </div>
            </>
        )
    }
}

export default BuildBoard;