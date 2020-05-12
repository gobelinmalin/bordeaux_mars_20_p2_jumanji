import React from 'react';
import '../StylePlayersComponents/Player2.css'


class Player2 extends React.Component {
     render() {
          return (
               <div className="containerPlayer2">
                   <div className="containerNamePlayer2">
                        <p className="namePlayer2">Judith Shepard</p>
                   </div>
                   <div className="containerPanicPlayer2">
                        
         
                        <div className="panicPlayer2" >
                             
                        </div>
                        <div className={this.props.panicUpdate2}>
                                  
                        </div>
                   </div>
    
               </div>
          )
        }
      }


export default Player2