import React from 'react'

//export default class DisplayAnswers extends React.Component{
    

    /*constructor(){
        super()
        this.state = {}
    }

    revealAnswer = () => {
        return 
    }

    render(){

        return(
            <div>test</div>
        )
    }
}
*/

  
function DisplayAnswers({ answers }) {
  return (
    <div className="questionEnigmeA">
        {answers.text} 
       
      </div>
     
  );
};

export default DisplayAnswers;
