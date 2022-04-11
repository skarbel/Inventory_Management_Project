import { Fragment, useState, useEffect } from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LaptopForm from "../components/laptops/LaptopForm";
import LaptopList from "../components/laptops/LaptopList";
import LaptopDetail from "../components/laptops/LaptopDetail";
import Request from '../helpers/request';

const LaptopContainer = () => {

const [laptops, setLaptops] = useState([])
const [manufacturers, setManufacturers] = useState ([])

useEffect (() => {
    fetchLaptops();
    fetchManufacturers();
}, [])

const fetchLaptops = () => {
fetch('/api/laptops')
.then(response => response.json())
.then(data => setLaptops(data))
}

const fetchManufacturers = () => {
  fetch('/api/inventory/manufacturer')
  .then(response => response.json())
  .then(data => setManufacturers(data))
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
  .then(() => {window.location = "/api/laptops"})
}

const handleUpdate = (laptop) => {
  const request = new Request();
  request.patch("/api/laptops/" + laptop.id, laptop)
  .then(() => {window.location = "/api/laptops/" + laptop.id})
}

const deleteLaptop = idToDelete => {
  console.log(idToDelete);
  const request = new Request();
  request.delete("/api/laptops/", idToDelete)
  .then(() => {
    setLaptops(laptops.filter(laptop => laptop.id !== idToDelete));
    window.location = "/api/laptops"

  });
};

return(
  <Fragment>
    <Switch>
      <Route exact path="/api/laptops/new" render={() => {
        return <LaptopForm onCreate={handlePost} manufacturers={manufacturers}/>
      }}/>
      <Route exact path="/api/laptops/:id/edit" render={(props) => {
        const id = props.match.params.id;
        const laptop = findLaptopById(id);
        return <LaptopForm laptop={laptop} onUpdate={handleUpdate} manufacturers={manufacturers}/>
      }}/>
      <Route exact path="/api/laptops/:id" render={(props) => {
        const id = props.match.params.id;
        const laptop = findLaptopById(id); 
        return <LaptopDetail laptop={laptop} deleteLaptop={deleteLaptop}/>
      }}/>
      <Route render={() => {
        return <LaptopList laptops={laptops}/>
      }}/>
    </Switch>
  </Fragment>
)


}
export default LaptopContainer;