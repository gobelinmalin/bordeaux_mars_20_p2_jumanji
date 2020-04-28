import React from 'react'
function Path(){

    const pathsPlayers = [
        {
            pathPlayer1:{
                id:'',
                startX:0, // x+8 => y+5 => x-1
                startY:0, //
                color: "cyan"
            },
            pathPlayer2:{
                id:'',
                startX:10, // y+8 => x-5 => y-1
                startY:0,
                color: "magenta"
            },
            pathPlayer3:{
                id:'',
                startX:10, // x-8 => y-5 => x+1
                startY:10,
                color: "yellow"
            },
            pathPlayer4:{
                id:'',
                startX:0, // y-8 => x-5 => y+1
                startY:10,
                color: "black"
            },
          
        }
    ]
    // pour le player1 
        // tant que startX !== 8 
            // then x+1 
            // then tant que y !== 5 y+1 
            // then tant que x!==5 x- (8-5)
        // push le tout pour obtenir :
            // [ 
            //   {x:0,y:0},{x:1,y:0},{x:2,y:0},{x:3,y:0},{x:4,y:0},{x:5,y:0},{x:6,y:0},{x:7,y:0},{x:8,y:0},
            //   {x:8,y:1},{x:8,y:2},{x:8,y:3},{x:8,y:4},
            //   {x:7,y:5}
            // ]
    const paths = (player) => {

        const finalPath = []
        const patha = []
        const pathb = []
        const pathc = []
        for(let x = 0 ; x < 8 ; x++){
            patha.push({'x': x, 'id': x.toString()} )
        }
        for(let y = 0 ; y < 5 ; y++){
            pathb.push({'y': y, 'id': y.toString()})
        }
        
        for(let x = 8 ; x > 7 ; x--){
            pathc.push({'x': x, 'id': x.toString()} )
        }

        finalPath.push(patha,pathb,pathc)
        console.log(finalPath)
    }
    return (
        <>
            {paths(pathsPlayers)}
        </>
    )
}

export default Path;