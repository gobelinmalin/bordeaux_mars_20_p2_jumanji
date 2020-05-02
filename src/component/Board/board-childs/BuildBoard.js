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
        let array2Push = []

        for (let i = 0; i < 10; i++) {

            array2Push[0] = 0
            array2Push[1] = 0
            array.push(array2Push)
        }

        array.forEach(i => {
            i[0] += 64

            console.log(i[0],"foreach")
        })

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