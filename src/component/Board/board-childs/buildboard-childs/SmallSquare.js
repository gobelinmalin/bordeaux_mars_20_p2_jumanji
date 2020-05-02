import React from 'react'
import './css/small-square.css'

function SmallSquare(props) {

    const style = {
        left: 0,
        top: 0
    }
    const style2 = {
        left: 69,
        top: 0
    }
    const style3 = {
        left: 138,
        top: 0
    }


    console.log(props.coordinate)

    return (
        <>
            <div className="smallSquare" style={style} ></div>
            <div className="smallSquare" style={style2} ></div>
            <div className="smallSquare" style={style3} ></div>
        </>
    )

}


export default SmallSquare;