import React from 'react';
import DisplayEmployee from './DisplayJoueurB'
import './JoueurB.css';
import axios from 'axios';


const sampleEmployee = {
    lastname: 'Alan Parish',
    description: 'Jeune garçon issu dune famille riche, il est persécuté par ses camarades à cause de son patronyme. Alors quil démarre une partie de Jumanji, il se retrouve aspiré dans le jeu et ce, sous les yeux de son amie Sarah.',
   
  };
  


class JoueurB extends React.Component {


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
    <div className="backjoueurB">
      
        <div className="containerJoueurB">

        
        <div className="descriptionJoueurB">
        <div className="containerSelectJoueurB">
          <p className="selectJoueurB">
          <DisplayEmployee employee={this.state.employee} />
            <div className="arrowSelectJoueurB">
                    <button  className="randomSelectCTAB" type="button" onClick={this.getEmployee}> &lt;</button>
                    <button  className="randomSelectCTAB2" type="button" onClick={this.getEmployee}>&gt;</button>
                    </div>
         
          </p>
            </div>
            </div>

            </div>

        <div className="checkboxe">
        <input type="checkbox" id="joueurB" />
	            <label for="joueurB" aria-describedby="label"></label>

        </div>

    </div>

    

      
    </div>
   

     
      </body>

      )
    }
  }


export default JoueurB;