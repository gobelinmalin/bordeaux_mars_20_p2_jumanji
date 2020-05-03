import React from 'react'

import CentralButton from './buildboard-childs/CentralButton'
import SmallSquare from './buildboard-childs/SmallSquare'
import './board-childs.css'

class BuildBoard extends React.Component {


    state = {
        squares: [
            [0, 0] //[0, 69] // 64px with + 5px margin
        ]
    }

    changeItemValue = (array) => {
        let array2Push = [0, 0]


        for (let j = 0; j < 10; j++) {

            let counter = 64 + 5
            for (let i = 0; i < 9; i++) {

                let count = 64 + 5
                array2Push = [count * i, counter * j]
                array.push(array2Push)

            }
            array2Push = [array2Push[0] + (64 + 5), counter * j]
            array.push(array2Push)
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
    }

    render() {
        let coordinate = []
        this.changeItemValue(this.state.squares)

        // console.log(this.state.squares, "render")
        return (
            <>
                <button onClick={() => this.addArrayToState(coordinate)} > TEST</button>
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