import React from 'react'

import CentralButton from './buildboard-childs/CentralButton'
import SmallSquare from './buildboard-childs/SmallSquare'
import './board-childs.css'

class BuildBoard extends React.Component {


    state = {
        squares: [
            //[0, 69] // 64px with + 5px margin
        ]
    }

    changeItemValue = (array) => {
        let array2Push = [0, 0]


        for (let j = 0; j < 9; j++) {

            let counter = 64
            for (let i = 0; i < 9; i++) {

                let count = 64
                array2Push = [count * i, counter * j]
                array.push(array2Push)

            }
            array2Push = [ array2Push[0]+64, counter * j]
            array.push(array2Push)
        }
        return array

        /* let count = 64
        array2Push = [count,0]
        array.push(array2Push)
        array2Push = [count*2,0]
        array.push(array2Push)
        array2Push = [count*3,0]
        array.push(array2Push) */


    }
    render() {
        let total = []
        this.changeItemValue(total)
        console.log(total)
        return (
            <>
                <div className="board" >
                    <SmallSquare coordinate={this.state.squares} />
                </div>
            </>
        )
    }
}

export default BuildBoard;