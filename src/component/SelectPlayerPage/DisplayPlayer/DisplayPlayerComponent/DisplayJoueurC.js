import React from 'react';
import '../Style/DisplayJoueurC.css';

  
function DisplayJoueurC({ employee }) {
  return (
    <div className="DisplayJoueurC">
      
      <div className="characterNameC">
     {employee.firstname} {employee.lastname}
      </div>
    <br/>
    <div className="characterPictureA">
      <img className="imgPictureA" src={employee.picture} alt={employee.firstname}/>
      </div>
      <div className="characterDescriptionC">
      {employee.description}
      </div>
     
       
     
    
    </div>
  );
};




  
export default DisplayJoueurC;