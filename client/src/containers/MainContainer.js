import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LaptopContainer from './LaptopContainer';
import TvContainer from './TvContainer';
import MobilePhoneContainer from './MobilePhoneContainer';
import InventoryContainer from './InventoryContainer';



const MainContainer = () => {

    return (
        <Router>
        <Fragment>     
        <Switch>
          <Route path="/laptops" component={LaptopContainer}/>
          <Route path="/tvs" component={TvContainer}/>
          <Route path="/mobilephones" component={MobilePhoneContainer}/>
          <Route path="/inventory" component={InventoryContainer}/>        
        </Switch>
        </Fragment>
        </Router>
      )
  }
  

export default MainContainer;

