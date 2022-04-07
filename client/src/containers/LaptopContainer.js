import { Fragment, useState, useEffect } from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LaptopForm from "../components/laptops/LaptopForm";
import LaptopList from "../components/laptops/LaptopList";
import LaptopDetail from "../components/laptops/LaptopDetail";


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

const findLaptopById = (id) => {
  return laptops.find((laptop) => {
    return laptop.id === parseInt(id);
  })
}

const handlePost = (laptop) => {
  const request = new Request();
  const url = "/api/laptops";
  request.post(url, laptop)
  .then(() => {window.location = "/laptops"})
}

const handleUpdate = (laptop) => {
  const request = new Request();
  request.patch("/api/laptops/" + laptop.id, laptop)
  .then(() => {window.location = "/laptops/" + laptop.id})
}

return(
  <Router>
  <Fragment>
    <Switch>
      <Route exact path="/laptops/new" render={() => {
        return <LaptopForm onCreate={handlePost}/>
      }}/>
      <Route exact path="/laptops/:id/edit" render={(props) => {
        const id = props.match.params.id;
        const laptop = findLaptopById(id);
        return <LaptopForm laptop={laptop} onUpdate={handleUpdate}/>
      }}/>
      <Route exact path="/laptops/:id" render={(props) => {
        const id = props.match.params.id;
        const laptop = findLaptopById(id); 
        return <LaptopDetail laptop={laptop}/>
      }}/>
      <Route render={() => {
        return <LaptopList laptops={laptops}/>
      }}/>
    </Switch>
  </Fragment>
</Router>
)


}
export default LaptopContainer;