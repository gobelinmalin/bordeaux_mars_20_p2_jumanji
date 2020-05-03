import React from 'react';
import DisplayEmployee from './DisplayJoueurD'
import '../Style/JoueurD.css'
import axios from 'axios';


const sampleEmployee = {
  lastname: '',
  picture: "",
  description: '',
   
  };
  


class JoueurD extends React.Component {


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
        employee: data[3]
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