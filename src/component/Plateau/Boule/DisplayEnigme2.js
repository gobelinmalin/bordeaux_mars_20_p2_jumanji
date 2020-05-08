import React from 'react';
import '../Enigme/Style/DisplayEnigme.css'


import { NavLink } from 'react-router-dom';


  
function DisplayEnigme2({ enigme2 }) {
  return (
    <div className="DisplayEnigme2">
      
      <div className="question2">
        {enigme2.question} 
   
      </div>   
     

     
     
    
    </div>
  );
};


  
       


export default DisplayEnigme2 ;