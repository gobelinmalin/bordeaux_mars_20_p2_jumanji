import React from 'react';
import './DisplayJoueurC.css';

  
function DisplayJoueurC({ employee }) {
  return (
    <div className="DisplayJoueurC">
      
      <div className="characterNameC">
     {employee.firstname} {employee.lastname}
      </div>
    <br/>
      <div className="characterDescriptionC">
      {employee.description}
      </div>
     
       
     
    
    </div>
  );
};




  
export default DisplayJoueurC;