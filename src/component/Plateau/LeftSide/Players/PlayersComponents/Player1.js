import React from 'react';
import '../StylePlayersComponents/Player1.css'


class Parent extends React.Component {
     constructor(props) {
         super(props);
         this.state = { count: 0 };
 
         this.outputEvent = this.outputEvent.bind(this);
     }
     outputEvent(event) {
         // the event context comes from the Child
         this.setState({ count: this.state.count + 1 });
     }
 
     render() {
          let panicBar 
          if (this.state.count === 0) {
               panicBar  = "panicJaugeA"
               } else if (this.state.count < 3) {
                    panicBar  = "panicJaugeB"
               } else if (this.state.count >= 3) {
                    panicBar = "panicJaugeC"
               }

         return (
          <div className="containerPlayer1">
          <div className="containerNamePlayer1">
               <p className="namePlayer1">Allan Parish</p>
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