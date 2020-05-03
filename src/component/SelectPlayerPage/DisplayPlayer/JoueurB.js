import React from 'react';
import DisplayEmployee from './DisplayPlayerComponent/DisplayJoueurB'
import './JoueurB.css';
import axios from 'axios';


const sampleEmployee = {
  lastname: '',
  picture: "",
  description: '',
  };
  


class JoueurB extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
          employee: sampleEmployee
        };
     this.getEmployee = this.getEmployee.bind(this);
      }
    
      componentDidMount() {
        this.getEmployee();
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
        employee: data[1]
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


export default JoueurB;