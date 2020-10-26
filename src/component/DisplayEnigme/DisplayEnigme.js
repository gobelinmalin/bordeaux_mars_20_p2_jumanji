import React from 'react';
import './DisplayEnigme.css'





  
function DisplayEnigme({ enigme }) {
  return (
    <div className="DisplayEnigme">
      
      <div className='containerQuestion2'>
          <div className="question2">
             {enigme.question} 
          </div>
      </div>   
     

     
     
    
    </div>
  );
};
 
       


export default DisplayEnigme ;