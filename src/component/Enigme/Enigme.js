import React from 'react';
import DisplayEnigme from './DisplayEnigme'
import axios from 'axios';


const sampleEnigme = {
    question: 'Devant ses crocs, mieux vaut partir au galop',
  
  };
  


class Enigme extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
          enigme: sampleEnigme
        };
     this.getEnigme = this.getEnigme.bind(this);
      }
    
    componentDidMount (){ } 
    
    getEnigme() {
        // Send the request
        axios.get('https://api-jumanji.herokuapp.com/api/cards')
        // Extract the DATA from the received response
        .then(response => response.data)
        // Use this data to update the state
        .then(data => {
        console.log(data)
        const index = Math.floor((Math.random()*(data.length -1)))
        this.setState({
        enigme: data[4]
           ,
            });
        }); 
    
      }

   
    



    render() {

      alert ('coucou')
      return (
   
     
       
    <div className="enigmeDisplayed">
          <DisplayEnigme enigme={this.state.enigme} />
          <button  className="starGame" type="button" onClick={this.getEnigme}> Lancer les dès</button>
          <button>Combattre</button> 
          <button>Fuir</button>
         
   

      
    </div>
   

     


      )
    }
  }

    



export default Enigme;