import React from 'react';
import './SelectPlayer.css';
import JoueurA from './JoueurA'
import JoueurB from './JoueurB'
import JoueurC from './JoueurC'
import JoueurD from './JoueurD'

class SelectPlayer extends React.Component {
    state = {
        click: false,
        count: 0
      };
    
      handleClick = e => {
        const { count } = this.state;
        if (e.target.checked) {
          this.setState({ count: count + 1 });
        } else {
          this.setState({ count: count - 1 });
        }
      };
      render() {
        return (
        
          <div className="selectPlayerContainer">
           
            <div className="checkboxesContainer">
               <div className="JoueurAContainer" >
                    <JoueurA />
                    <input 
                        onClick={e => this.handleClick(e)}
                        type="checkbox"
                        name="player1"
                        id="player1"
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
                    />
                    <label for="player4" aria-describedby="label"></label>
                </div>    
            </div>
            <div className="playCTAContainer">
                <button className="playCTA"  disabled={this.state.count > 0 ? false : true}>Jouer</button>
            </div>
          </div>
        );
      }
    }

export default SelectPlayer;