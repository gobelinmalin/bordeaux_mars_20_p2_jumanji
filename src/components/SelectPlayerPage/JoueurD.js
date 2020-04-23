import React from 'react';
import DisplayEmployee from './DisplayJoueurD'
import './JoueurD.css';
import axios from 'axios';


const sampleEmployee = {
  lastname: 'Alan Parish',
  picture: "https://zupimages.net/up/20/16/2tpa.png",
  description: 'Coincé dans Jumanji depuis 26 ans, Alan en connait tous les secrets',
   
  };
  


class JoueurD extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
          employee: sampleEmployee
        };
     this.getEmployee = this.getEmployee.bind(this);
      }
    
     
    
    getEmployee() {
        // Send the request
        axios.get('https://api-jumanji.herokuapp.com/api/users')
        // Extract the DATA from the received response
        .then(response => response.data)
        // Use this data to update the state
        .then(data => {
        console.log(data)
        const index = Math.floor((Math.random()*(data.length -1)))
        this.setState({
        employee: data[index]
           ,
            });
        }); 
    
      }
    


    render() {
      return (
        <body>
       
    <div className="App">
    <div className="backjoueurD">
      
        <div className="containerJoueurD">

        
        <div className="descriptionJoueurD">
        <div className="containerSelectJoueurD">
          <p className="selectJoueurD">
          <DisplayEmployee employee={this.state.employee} />
            <div className="arrowSelectJoueurD">
                    <button  className="randomSelectCTAD" type="button" onClick={this.getEmployee}> &lt;</button>
                    <button  className="randomSelectCTAD2" type="button" onClick={this.getEmployee}>&gt;</button>
                    </div>
         
          </p>
            </div>
            </div>

            </div>

        
    </div>

    

      
    </div>
   

     
      </body>

      )
    }
  }


export default JoueurD;