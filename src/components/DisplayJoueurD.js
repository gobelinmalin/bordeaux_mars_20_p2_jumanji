import React from 'react';
import './DisplayJoueurD.css';

  
function DisplayJoueurD({ employee }) {
  return (
    <div className="DisplayJoueurD">
      
      <div className="characterNameD">
     {employee.firstname} {employee.lastname}
      </div>
    <br/>
      <div className="characterDescriptionD">
      {employee.description}
      </div>
     
       
     
    
    </div>
  );
};




  
export default DisplayJoueurD;