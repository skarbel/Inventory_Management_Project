import { Fragment, useState, useEffect } from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LaptopList from "../components/laptops/LaptopList";




const LaptopContainer = () => {

const [laptops, setLaptops] = useState([])

useEffect (() => {
    fetchLaptops();
    
  }, [])

  const fetchLaptops = () => {
  fetch('http://localhost:8080/api/laptops')
  .then(response => response.json())
  .then(data => setLaptops(data))
}

return(
  <Router>
  <Fragment>
    <Switch>
      <Route render={() => {
        return <LaptopList laptops={laptops}/>
      }}/>
    </Switch>
  </Fragment>
</Router>
)


}
export default LaptopContainer;