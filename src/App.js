import React from 'react';
import './App.css';
import SelectPlayer from './components/SelectPlayerPage/SelectPlayer';
//import './App.css';
import LandingPage from './component/LandingPage/LandingPage'
import Intro from './component/Intro/Intro';


function App() {
  return (
    <div className="App">
       <div className="select-player">
          <SelectPlayer />
       </div>
      <div className="landing-page">
        <LandingPage/>
      </div>
    </div>
  );
}

export default App;
