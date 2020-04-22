import React from 'react';

import Enigme from './components/EnigmeCards'
import EnigmesAnswers from './components/EnigmesAnswers'

import './App.css';

class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <Enigme/>
        <EnigmesAnswers/>
       
      </div>
    );
  }
}

export default App;
