import React from 'react';
import './Style/SelectPlayer.css'
import JoueurA from './DisplayPlayer/DisplayPlayerComponent/JoueurA'
import JoueurB from './DisplayPlayer/DisplayPlayerComponent/JoueurB'
import JoueurC from './DisplayPlayer/DisplayPlayerComponent/JoueurC'
import JoueurD from './DisplayPlayer/DisplayPlayerComponent/JoueurD'
import { NavLink } from 'react-router-dom';

//FRAMER LIBRARY
import { motion } from 'framer-motion'
//FRAMER LIBRARY

class SelectPlayer extends React.Component {
  state = {
    click: false,
    count: 0,
    players: [],
  };

  handleClick = e => {
    const { count } = this.state;
    const players = this.state.players;
    let index
    if (e.target.checked) {
      this.setState({ count: count + 1 });
      players.push(+e.target.value);
    } else {
      this.setState({ count: count - 1 });
      index = players.indexOf(+e.target.value)
      players.splice(index, 1)
    }

    players.sort()

    this.setState({ players: players })

    localStorage.setItem("players", players)


  };
  render() {
    const spring = {
      type: "spring",
      damping: 10,
      stiffness: 100
    }
    return (

      <motion.body
        initial={{ opacity: 0, scale: 0.1 }}
        transition={spring}
        animate={{ opacity: 1, scale: 0.95 }}
        exit={{ opacity: 1, scale: 1 }}
      >

        <div className="logo1">
          <img src="https://zupimages.net/up/20/16/fc7x.png" alt="" />
        </div>

        <div className="title">
          <h1>Sélection joueurs (4 max.)</h1>
        </div>

        <div className="checkboxesContainer">
          <motion.div
            transition={spring}
            whileTap={{ scale: 0.8 }}
            animate={{ opacity: 1, scale: 0.95 }}
            className="JoueurAContainer" >
            <JoueurA />
            <input
              onClick={e => this.handleClick(e)}
              type="checkbox"
              name="player1"
              id="player1"
              value={1}
            />
            <label for="player1" aria-describedby="label"></label>
          </motion.div>

          <motion.div
            transition={spring}
            whileTap={{ scale: 0.8 }}
            animate={{ opacity: 1, scale: 0.95 }}
            className="JoueurBContainer" >
            <JoueurB />
            <input
              onClick={e => this.handleClick(e)}
              type="checkbox"
              name="player2"
              id="player2"
              value={2}
            />
            <label for="player2" aria-describedby="label"></label>
          </motion.div>

          <motion.div
            transition={spring}
            whileTap={{ scale: 0.8 }}
            animate={{ opacity: 1, scale: 0.95 }}
            className="JoueurCContainer" >
            <JoueurC />
            <input
              onClick={e => this.handleClick(e)}
              type="checkbox"
              name="player3"
              id="player3"
              value={3}
            />
            <label for="player3" aria-describedby="label"></label>
          </motion.div>

          <motion.div
            transition={spring}
            whileTap={{ scale: 0.8 }}
            animate={{ opacity: 1, scale: 0.95 }}
            className="JoueurDContainer" >
            <JoueurD />
            <input
              onClick={e => this.handleClick(e)}
              type="checkbox"
              name="player4"
              id="player4"
              value={4}
            />
            <label for="player4" aria-describedby="label"></label>
          </motion.div>
        </div>

        <div className="playCTAContainer">
          <button className="playCTA" disabled={this.state.count > 0 ? false : true}>
            <NavLink className="playCTA" to="/plateau3"   >  JOUER !</NavLink>
          </button>
        </div>

        <div className="selected-items">
          {this.state.players.map(number =>
            <p key={number}>item: {number}</p>
          )}
        </div>

      </motion.body>
    );
  }
}






export default SelectPlayer;
