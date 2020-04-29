import React from 'react';


import { NavLink } from 'react-router-dom';


  
function DisplayEnigme({ enigme }) {
  return (
    <div className="DisplayEnigme">
      
      <div className="question">
        {enigme.question} 
       {enigme.idcard}
      </div>    

      <button> S'enfuir</button>
      <button> Combattre</button>
     
    
    </div>
  );
};


  
       


export default DisplayEnigme ;