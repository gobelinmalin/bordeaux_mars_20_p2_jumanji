import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 

import SelectPlayer from './component/SelectPlayerPage/SelectPlayer';


import LandingPage from './component/LandingPage/LandingPage';
import Plateau from './component/Plateau/Plateau'
import FinalScreen from './component/GameEnd/FinalScreen'
import Board from './component/Plateau/Board'



 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
        
            <Switch>
             <Route path="/" component={LandingPage} exact/>
             <Route path="/select-player" component={SelectPlayer}/>
             <Route path="/plateau" component={Plateau}/>
             <Route path="/finalscreen" component={FinalScreen}/>
             <Route path="/testboard" component={Board}/>
       
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}


export default App;

