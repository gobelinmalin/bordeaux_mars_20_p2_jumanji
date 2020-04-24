import React from 'react';
import './DisplayJoueurA.css';

  
function DisplayJoueurA({ employee }) {
  return (
    <div className="DisplayJoueurA">
      
      <div className="characterNameA">
        {employee.firstname} {employee.lastname}
      </div>
     <br/>
      <div className="characterPictureA">
      <img className="imgPictureA" src={employee.picture} alt={employee.firstname}/>
      </div>

    <br/>
      <div className="characterDescriptionA">
      {employee.description}
      </div>
     
       
     
    
    </div>
  );
};




  
export default DisplayJoueurA;