import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 

import SelectPlayer from './component/SelectPlayerPage/SelectPlayer';
import Plateau from './component/PlateauLeftSide/LeftSide'

import LandingPage from './component/LandingPage/LandingPage';
import LeftSide from './component/PlateauLeftSide/LeftSide';


 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
        
            <Switch>
             <Route path="/" component={LandingPage} exact/>
             <Route path="/select-player" component={SelectPlayer}/>
             <Route path="/plateau" component={LeftSide}/>
       
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}


export default App;
