import React from 'react';
import './DisplayJoueurB.css';

  
function DisplayJoueurB({ employee }) {
  return (
    <div className="DisplayJoueurB">
      
      <div className="characterNameB">
     {employee.firstname} {employee.lastname}
      </div>
    <br/>
      <div className="characterDescriptionB">
      {employee.description}
      </div>
     
       
     
    
    </div>
  );
};




  
export default DisplayJoueurB;