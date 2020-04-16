import React from 'react';
import './App.css';
import LandingPage from './component/LandingPage/LandingPage'
import Intro from './component/Intro/Intro';


function App() {
  return (
    <div className="App">

      <div className="landing-page">
        <LandingPage/>
      </div>

      <div className="intro-movie">
        <Intro />
      </div>

      <div className="select-player">
      </div>

      <div className="end-page">
      </div>
      
    </div>
  );
}

export default App;
