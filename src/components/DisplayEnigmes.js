import React from 'react';
  
function DisplayEnigmes({ card }) {
  return (
    <div className="questionEnigmeA">
        {card.idcard}  {""}
        {card.question} 
    </div>
  );
};

export default DisplayEnigmes