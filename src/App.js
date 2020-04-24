import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SelectPlayer from './components/SelectPlayerPage/SelectPlayer';
import LandingPage from './component/LandingPage/LandingPage'
import Intro from './component/Intro/Intro';

 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
        
            <Switch>
             <Route path="/" component={LandingPage} exact/>
             <Route path="/select-player" component={SelectPlayer}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
