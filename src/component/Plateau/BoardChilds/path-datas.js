const pathsPlayers = [
    {
        pathPlayer1: {
            id: 0,
            startX: 0, // x+8 => y+5 => x-1
            startY: 0, //
            path: [1,2,3,4,5,6,7,8,18,28,38,48,47],
            color: "cyan"
        },
        pathPlayer2: {
            id: 10,
            startX: 621, // y+8 => x-5 => y-1
            startY: 0,
            path: [],
            color: "magenta"
        },
        pathPlayer3: {
            id: 100,
            startX: 621, // x-8 => y-5 => x+1
            startY: 621,
            path: [],
            color: "yellow"
        },
        pathPlayer4: {
            id: 91,
            startX: 0, // y-8 => x-5 => y+1
            startY: 621,
            path: [],
            color: "black"
        },

    }
]

export default pathsPlayers;