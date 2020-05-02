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
    addArraysInArray = (array) => {

        let test = []
        const side = 64
        const margin = 5
        for (let nbrSquare = 0; nbrSquare < 100; nbrSquare++) {
            array.push(test)
        }

        for (let i = 0; i < array.length; i++) {

            array[i][0] = 0
            array[i][1] = 0
        }

        return array

    }

    incrementXY = (currentValue,index) => {
        let counter = 0
        while(index < 10){

            currentValue[0] = counter
            counter += 64
            index ++
        }
    }

    render() {

        let total = []

        /* for (let i = 0; i < total.length; i++) {
            for (let i = 0; i < total.length/10; i++) {
                let count = 0
                total.map( i => i[0] += 64)
            }
            total[i][1] += 64
        } */

        this.addArraysInArray(total)
        total.forEach(this.incrementXY)


        // this.setState(prevState => {squares: prevState})
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