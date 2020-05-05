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

    // Création du plateau de cases
    /* createBoard = () => {
        let tileArray = []
        for (let counter = 100; counter > 0; counter--) {
            tileArray.push(counter)
        }
        const board = tileArray.map((tile, tileIndex) => <div key={tileIndex} className={this.tileColor ? "TilePathPlayer1" : "TileNeutral"}>{tileIndex}</div>)

        for (let i = 0; i < board.length; i++) {

            //console.log(board[i].key, "board")
        }
        return board  // <== !!!! this.state.board
    } */


    componentWillMount() {
        this.setState({ board: [this.createBoard()] })
        console.log("WILLMOUNT")
    }
    componentDidUpdate() {
        return this.handleChangeColor
        console.log("WILLUPDATE")
    }

    /* componentDidMount(pP, pS) {

        this.setState({ board: [this.createBoard()], color: true })
        console.log(pS, pP, "DIDUPDATE")
    } */

    createBoard = () => {
        let tileArray = []
        const pathPlayer = this.state.path[0].pathPlayer1.path

        for (let counter = 100; counter > 0; counter--) {
            tileArray.push(counter)
        }

        const board = tileArray.map((tile, tileIndex) =>
            tileIndex === 0 || tileIndex === 1
                ?
                <div
                    key={tileIndex}
                    className={

                        "TilePathPlayer1"

                    }>
                    {tileIndex}
                </div>
                :
                <div
                    key={tileIndex}
                    className={

                        "TileNeutral"

                    }>
                    {tileIndex}
                </div>)

        return board
    }

    handleChangeColor = () => {
        this.setState({ color: !this.state.color })
        // console.log(this.state.color, "KOLOR")

    }


    // Gestion du tour de jeu
    //  handlePlayerTurn(){
    //    let currentPlayer = this.state.playerTurn;
    //    this.setState({playerTurn: currentPlayer++})
    // }


    //On compare board avec pathPlayers / si cell PathPlayers = cell board alors renvoie true pour la cell

    isThisTileInPathPlayer(array, pathArray) {
        array.some(number => pathArray.indexOf(number) !== -1)

    }


    /* let updatedTile = this.state.til



    /* this.isThisTileInPathPlayer(createBoard(), pathArray) {

        const board = this.createBoard().map((i, j) => j)
        const pathCurrentPlayer = this.state.path[0].pathPlayer1.path

        createBoard().some(number => console.log(pathCurrentPlayer.indexOf(number) !== -1));
    } */

    //number => number.map(pathArray.indexOf(number) !== -1)

    //Changer la couleur de la tuile
    /* changeTileColor() {
        if (isThisTileInPathPlayer) {
            setTileColor(true);
        } else {
            setTileColor(false);
        }
    } */


    /* displayPath = () => {
        const pathCurrentPlayer = this.state.path[0].pathPlayer1.path
        const displayPath = pathCurrentPlayer.map(i => i)
        const board = this.createBoard().map((i, j) => j)
        const test = board.some(i => i === displayPath && <div> test</div>)
        console.log(test)
    } */

    render() {
        const pathCurrentPlayer = this.state.path
        console.log(this.state.color, "STATE")
        return (
            <div className="game-board">
                {/* <Tile tileColor={this.state.tileColor}/> */}
                <Grid
                    width={50}
                    gap={5}
                >
                    {this.state.board[0]}
                    <button onClick={this.handleChangeColor}> {this.state.color}</button>
                    {/* {this.createBoard()} */}
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