import React from 'react';
import './SelectPlayer.css';
import JoueurA from './JoueurA'
import JoueurB from './JoueurB'
import JoueurC from './JoueurC'
import JoueurD from './JoueurD'
import { NavLink } from 'react-router-dom';


class SelectPlayer extends React.Component {
    state = {
        click: false,
        count: 0,
        players:[],
      };
    
      handleClick = e => {
        const { count } = this.state;
        const players =this.state.players;
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

        this.setState({players: players})

        localStorage.setItem("players", players)
        

      };
      render() {
        return (
         <body>

        <div className ="logo">
            <img src="https://zupimages.net/up/20/16/fc7x.png" alt="" />
        </div>
        <div className ="title">
            <h1>Sélection joueurs (4 max.)</h1>
        </div>
           
            <div className="checkboxesContainer">
               <div className="JoueurAContainer" >
                    <JoueurA />
                    <input 
                        onClick={e => this.handleClick(e)}
                        type="checkbox"
                        name="player1"
                        id="player1"
                        value={1}
                        />
                    <label for="player1" aria-describedby="label"></label>
                 </div>
                 <div className="JoueurBContainer" >
                    <JoueurB />
                    <input
                        onClick={e => this.handleClick(e)}
                        type="checkbox"
                        name="player2"
                        id="player2"
                        value={2}
                        />
                    <label for="player2" aria-describedby="label"></label>
                 </div>
                 <div className="JoueurCContainer" >
                    <JoueurC />
                    <input
                        onClick={e => this.handleClick(e)}
                        type="checkbox"
                        name="player3"
                        id="player3"
                        value={3}
                        />
                    <label for="player3" aria-describedby="label"></label>
                </div>
                <div className="JoueurDContainer" >
                    <JoueurD />
                    <input
                        onClick={e => this.handleClick(e)}
                        type="checkbox"
                        name="player4"
                        id="player4"
                        value={4}
                    />
                    <label for="player4" aria-describedby="label"></label>
                </div>    
            </div>
            <div className="playCTAContainer">
                <button className="playCTA"  disabled={this.state.count > 0 ? false : true}>
                <NavLink className="toPlateau" to="/plateau" >JOUER !</NavLink>        
                </button>
            </div>
            <div className="selected-items">
          {this.state.players.map(number => 
             <p key={number}>item: {number}</p>
          )}
        </div>
       
     
      

       
          </body>
        );
      }
    }


  
       


export default SelectPlayer ;
