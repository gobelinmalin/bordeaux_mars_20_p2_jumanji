import React from 'react';
//import './App.css';
import LandingPage from './component/LandingPage/LandingPage'
import Intro from './component/Intro/Intro';
import Board from './component/Board/Board'

function App() {
  return (
    <div className="App">
      <div className="landing-page">
        {/* <LandingPage/> */}
        <Board/>
      </div>
    </div>
  );
}

export default App;
