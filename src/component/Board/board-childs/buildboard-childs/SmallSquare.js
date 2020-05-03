import React from 'react'
import './css/small-square.css'

function SmallSquare(props) {

    const style = {
        left: props.coordinate.map(i => [0]),
        top: props.coordinate.map(i => [1])
    }
    const style2 = {
        left: 0,
        top: 0
    }
    const style3 = {
        left: 138,
        top: 0
    }
    const squares = props.coordinate
        .map((i, j) =>
            <div
                key = {j-100}
                className="smallSquare"
                style={{ left: i[0], top: i[1] }}
            >
                square <br />
                id: {j - 100}
            </div>)

    console.log(props)

    return (
        <>
            {squares}
        </>
    )

}


export default SmallSquare;