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
        let array2Push = [0,0]
        array.push(array2Push)

        for (let i = 0; i < 10; i++) {

            let count = 64
            array2Push = [count * i,0]
            array.push(array2Push)

        }

        /* array.forEach(array2Push => {
            console.log(array2Push,"foreach")
        }) */

        /* for(const item of array){
            item[0] += 64
            return item
        } */
        /* let count = 64
        array2Push = [count,0]
        array.push(array2Push)
        array2Push = [count*2,0]
        array.push(array2Push)
        array2Push = [count*3,0]
        array.push(array2Push) */

        return array

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