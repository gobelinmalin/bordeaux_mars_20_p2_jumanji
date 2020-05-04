import React from 'react';
import '../Enigme/Style/DisplayEnigme.css'


import { NavLink } from 'react-router-dom';


  
function DisplayEnigme({ enigme }) {
  return (
    <div className="DisplayEnigme">
      
      <div className="question">
        {enigme.question} 
   
      </div>   
     

     
     
    
    </div>
  );
};


  
       


export default DisplayEnigme ;