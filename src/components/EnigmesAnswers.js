import React from 'react'
import Axios from 'axios'
import DisplayAnswers from './DisplayAnswers'


// function EnigmeAnswers() {

//     useEffect(() => {
//         fetchItems();
//     }, []);

//     const [items, setItems] = useState([]);
    

//     const fetchItems = async () => {
//         const data = await fetch('https://api-jumanji.herokuapp.com/api/cards/'
//     );

//     const items = await data.json();
//     setItems(items);
//     };


//   return (
//     <div className="cards" >
//         {items.map(card => (
//            <div className="card">
//                <div>Solution : {card.response}</div>
//             </div>  
//         ))}
//     </div>
//   );
// }




/*class EnigmeAnswers extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            card : ""
        };
    }


    componentDidMount(){
        this.getAnswers();
    }
    // const param = props.match.params
    // const filterResponse = param.filter( answ => answ.kklz === props.kklz)
    // const cardMap = filterResponse.map(i => <li> i.kklz</li>)
    
    getAnswers = () => {
         // Send the request
         Axios.get('http://api-jumanji.herokuapp.com/api/cards/:id/responses')
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
              <DisplayAnswers card={this.state.card} />
            
              <button style={{color : 'red'}} className="FightCTA" type="button" > Combattre</button>
              <button style={{color : 'green'}} className="FuirCTA" type="button" > S'enfuir</button>
             
            </div>
        )
    }
}

export default EnigmeAnswers;
*/

const sampleAnswers= {
    texte: 'exemple texte'
   
  };

class EnigmesAnswers extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            answers : "texte test"
        };
    }


    componentDidMount(){
        this.getAnswers();
    }

    getAnswers = () => {
        // const url = http://api-jumanji.herokuapp.com/api/cards/{this.card.idcard}:id/responses?{this.card.idcard}
         // Send the request
         Axios.get(`http://api-jumanji.herokuapp.com/api/cards/${this.props.card.idcard}/responses`)
         // Extract the DATA from the received response
         .then(response => response.data)
         // Use this data to update the state
         .then(data => {
         console.log(data)
         const index = Math.floor((Math.random()*(data.length -1)))
         this.setState({
         answers: data[index]
            
             });
         }); 
     
       }

    render(){
        
        return(
            <div>
              <DisplayAnswers answers={this.state.answers} />
            
           
             
            </div>
        )
    }
}

export default EnigmesAnswers ;