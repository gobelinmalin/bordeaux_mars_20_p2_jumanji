import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 

import SelectPlayer from './component/SelectPlayerPage/SelectPlayer';


import LandingPage from './component/LandingPage/LandingPage';
import Plateau from './component/Plateau/Plateau'
import FinalScreen from './component/GameEnd/FinalScreen'
import Plateau2 from './component/Plateau/Plateau2'
import Plateau3 from './component/Plateau/Plateau3';


 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
        
            <Switch>
             <Route path="/" component={LandingPage} exact/>
             <Route path="/select-player" component={SelectPlayer}/>
             <Route path="/plateau" component={Plateau}/>
             <Route path="/finalScreen" component={FinalScreen}/>
             <Route path="/plateau2" component={Plateau2}/>
             <Route path="/plateau3" component={Plateau3}/>
       
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
