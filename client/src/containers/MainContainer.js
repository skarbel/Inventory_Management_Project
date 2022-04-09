import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LaptopContainer from './LaptopContainer';
import TvContainer from './TvContainer';
import MobilePhoneContainer from './MobilePhoneContainer';
import LogInContainer from './LogInContainer';
import InventoryContainer from './InventoryContainer';



const MainContainer = () => {

    return (
        <Router>
        <Fragment>     
        <Switch>
          <Route path="/home" component={LogInContainer}/>
          <Route path="/api/laptops" component={LaptopContainer}/>
          <Route path="/api/tvs" component={TvContainer}/>
          <Route path="/api/mobilephones" component={MobilePhoneContainer}/>
          <Route path="/api/inventory" component={InventoryContainer}/>        
        </Switch>
        </Fragment>
        </Router>
      )
  }
  

export default MainContainer;

