import React from 'react';
import '../Style/DisplayJoueurB.css';

  
function DisplayJoueurB({ employee }) {
  return (
    <div className="DisplayJoueurB">
      
      <div className="characterNameB">
     {employee.firstname} {employee.lastname}
      </div>
    <br/>
    <div className="characterPictureA">
      <img className="imgPictureA" src={employee.picture} alt={employee.firstname}/>
      </div>
      <div className="characterDescriptionB">
      {employee.description}
      </div>
     
       
     
    
    </div>
  );
};




  
export default DisplayJoueurB;