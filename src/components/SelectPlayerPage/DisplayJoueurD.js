import React from 'react';
import './DisplayJoueurD.css';

  
function DisplayJoueurD({ employee }) {
  return (
    <div className="DisplayJoueurD">
      
      <div className="characterNameD">
     {employee.firstname} {employee.lastname}
      </div>
    <br/>
    <div className="characterPictureA">
      <img className="imgPictureA" src={employee.picture} alt={employee.firstname}/>
      </div>
      <div className="characterDescriptionD">
      {employee.description}
      </div>
     
       
     
    
    </div>
  );
};




  
export default DisplayJoueurD;