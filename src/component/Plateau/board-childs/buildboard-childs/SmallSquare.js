import React from 'react'
import './css/small-square.css'

function SmallSquare(props) {

    const squares = props.coordinate
        .map((i, j) =>
            <div
                key={j - 100}
                className="smallSquare"
                style={{ left: i[0], top: i[1] }}
            >
                square <br />
                id: {j - 100}
            </div>)

    return (
        <>
            {squares}
        </>
    )

}


export default SmallSquare;