import React from 'react'
import './css/small-square.css'

function SmallSquare (props){

    const pathPlayer1 = [0,1,2,3,4,5,6,7,8,,,,,,,,,,,19,,,,,,,,,,,30,,,,,,,,,,,41,,,,,,,,,,,52,,,,,,,,,,,63,62]
    const pathPlayer2 = [10,21,32,43,54,65,76,87,98,109,120,,,,,,,,,,,119,,,,,,,,,,,118,,,,,,,,,,,117,,,,,,,,,,,116,,,,,,,,,,,115,104,93,82]
    const pathPlayer3 = [0,1,2,3,4,5,6,7,8,,,,,,,,,,,19,,,,,,,,,,,30,,,,,,,,,,,41,,,,,,,,,,,52,,,,,,,,,,,63,62]
    const pathPlayer4 = [0,1,2,3,4,5,6,7,8,,,,,,,,,,,19,,,,,,,,,,,30,,,,,,,,,,,41,,,,,,,,,,,52,,,,,,,,,,,63,62]

    //console.log( pathPlayer1[props.id],props.id)
    return (
        <>
            <div className={
                props.id === pathPlayer1[props.id] || props.id === 62
                    ?
                    "playerOne"
                    :
                    "smallSquare"
                }>
                    x:{props.idx} y:{props.idy} id:{props.id}
            </div>
        </>
        )

}


export default SmallSquare;