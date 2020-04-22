import React from 'react'
import Axios from 'axios'
import DisplayEnigmes from './DisplayEnigmes'

const sampleCard= {
    question: 'exemple question 1'
   
  };

class EnigmeCards extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            card : "",
            idcard: "",
        };
    }


    componentDidMount(){
        this.getCards();
    }

    getCards = () => {
         // Send the request
         Axios.get('https://api-jumanji.herokuapp.com/api/cards')
         // Extract the DATA from the received response
         .then(response => response.data)
         // Use this data to update the state
         .then(data => {
         console.log(data)
         const index = Math.floor((Math.random()*(data.length -1)))
         this.setState({
         card: data[index]
            ,
             });
         }); 
     
       }

    render(){
        
        return(
            <div>
              <DisplayEnigmes card={this.state.card} />
            
              <button style={{color : 'red'}} className="FightCTA" type="button" > Combattre</button>
              <button style={{color : 'green'}} className="FuirCTA" type="button" > S'enfuir</button>
             
            </div>
        )
    }
}

export default EnigmeCards;