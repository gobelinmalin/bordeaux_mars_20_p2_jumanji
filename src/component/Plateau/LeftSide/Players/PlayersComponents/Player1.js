import React from 'react';
import '../StylePlayersComponents/Player1.css'


class Parent extends React.Component {
     
 
     render() {
        

         return (
          <div className="containerPlayer1">
          <div className="containerNamePlayer1">
               <p className="namePlayer1">Allan Parish </p>
          </div>
          <div className="containerPanicPlayer1">
               

               <div className="panicPlayer1" >
                    
               </div>
               <div className={this.props.panicUpdate}>
               
               </div>
          </div>
             <div>
                 
                
             </div>
             </div>
         );
     }
 }

export default Parent