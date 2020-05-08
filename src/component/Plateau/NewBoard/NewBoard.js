import React from 'react'
import Grid from 'react-css-grid'
import './NewBoard.css'
import pathPlayers from './pathPlayers'
import pathsPlayers from './pathPlayers'


class NewBoard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            playerTurn: 1,
            path: pathPlayers,
            board: '',
            color: false
        }
    }

    // Gestion du tour de jeu
    // currentPlayer < nbr de joueurs engagés
    handlePlayerTurn = () => {
        let currentPlayer = this.state.playerTurn;
        if (currentPlayer < 2) {
            this.setState({ playerTurn: currentPlayer + 1 })
        } else {
            this.setState({ playerTurn: 1 })
        }
        console.log(currentPlayer)
    }

    componentWillMount() {
        this.setState({ board: [this.createBoard()] })
        console.log("WILLMOUNT")
    }

    createBoard = () => {
        let tileArray = []
        let board = this.state.board
        const pathPlayer = this.state.path[0].pathPlayer1.path

        for (let counter = 100; counter > 0; counter--) {
            tileArray.push(counter)
        }

        for (let i = 0; i < pathPlayer.length; i++) {
            board = tileArray.map((tile, tileIndex) =>

                pathPlayer.filter(path => tileIndex === path).length !== 0
                    ?
                    <div
                        key={tileIndex}
                        className={

                            "TilePathPlayer1"

                        }>
                        {/* {tileIndex} */}
                    </div>
                    :
                    <div
                        key={tileIndex}
                        className={

                            "TileNeutral"

                        }>
                        {console.log("YEAH")}
                        {/* {tileIndex} */}
                    </div>)
        }

        return board
    }

    handleChangeColor = () => {
        this.setState({ color: !this.state.color })
    }

    render() {
        const pathCurrentPlayer = this.state.path
        console.log(this.state.color, "STATE")
        return (
            <div className="game-board">
                <Grid
                    width={50}
                    gap={5}
                >
                    {this.state.board}
                    <button onClick={this.handlePlayerTurn}>ChangeTurn</button>
                </Grid>
            </div>
        )
    }
}

export default NewBoard



/* tileArray = [1,2,3...99]
pathPlayer = [1,2,3]

=> tileArray updated = [
    {ID: 1;
    Match: true/false}
]

2 => boucle pour chaque case de tileArray
1 => fonction IstileInPlayerPath .some renvoie true/false
3 => fonction AddMatch renvoie un ID + résultat IstileInPlayerPath
4 => fonction mapper updatedTileArray return tileArray this.setState ([tileArray: updatedArray])*/

