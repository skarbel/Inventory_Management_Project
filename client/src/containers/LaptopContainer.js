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

const handlePost = (pirate) =>{
  const request = new Request();
  const url = "/api/laptops";
  request.post(url, laptops)
  .then(() => {window.location = "/laptops"})
  }
  
  const handleUpdate = (pirate) => {
    const request = new Request();
    request.patch("/api/laptops/" + laptops.id, laptops)
    .then(() => {
      
      window.location= "/laptops/" + laptops.id
     })
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