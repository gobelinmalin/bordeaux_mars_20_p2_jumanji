import React from 'react';



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