import React from 'react'
import '../css/board-square.css'
import Path from './Path'

function SmallSquare (props){

    const path = <Path/> 
    const pathPlayer1 = [0,1,2,3,4,5,6,7,8,,,,,,,,,,,19,,,,,,,,,,,30,,,,,,,,,,,41,,,,,,,,,,,52,,,,,,,,,,,63,62]
    let count = 0

    // return <div className={props.className,"originalPath"}>x:{props.idx} y:{props.idy} id:{props.id}</div>
    /* function test(){
        for(let i = 0 ; i <= pathPlayer1.length; i++){
            console.log(i)
            return props.id === pathPlayer1[i] ? "originalPath" : "smallSquare"
        }

    } */

    //for(let i = 0 ; i <= pathPlayer1.length; i++){
        //let test = 0
        //count = props.id === pathPlayer1[test] ? "originalPath" : "smallSquare"
        //test++
       // console.log(i)
    //}
    
    console.log(pathPlayer1[props.id], props.id)
    console.log(props.id === pathPlayer1[props.id])

    return (
        <>
            <div className={props.id === pathPlayer1[props.id] || props.id === 62  ? "originalPath" : "smallSquare"}>x:{props.idx} y:{props.idy} id:{props.id}</div>
        </>
        )
    
}


export default SmallSquare;