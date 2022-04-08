import { Fragment, useState, useEffect } from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LaptopList from "../components/laptops/LaptopList";




const LaptopContainer = () => {

const [laptops, setLaptops] = useState([])
const [manufacturers, setManufacturers] = useState ([])

useEffect (() => {
    fetchLaptops();
<<<<<<< HEAD
    
  }, [])
=======
    fetchManufacturers();
}, [])
>>>>>>> develop

  const fetchLaptops = () => {
  fetch('http://localhost:8080/api/laptops')
  .then(response => response.json())
  .then(data => setLaptops(data))
}

<<<<<<< HEAD
const handlePost = (laptop) =>{
=======
const findLaptopById = (id) => {
  return laptops.find((laptop) => {
    return laptop.id === parseInt(id);
  })
}
const fetchManufacturers = () => {
  fetch('http://localhost:8080/api/inventory/manufacturer')
  .then(response => response.json())
  .then(data => setManufacturers(data))
}

const handlePost = (laptop) => {
>>>>>>> develop
  const request = new Request();
  const url = "/api/laptops";
  request.post(url, laptops)
  .then(() => {window.location = "/laptops"})
  }
  
  const handleUpdate = (laptop) => {
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
<<<<<<< HEAD
=======
      <Route exact path="/laptops/new" render={() => {
        return <LaptopForm onCreate={handlePost} manufacturers={manufacturers}/>
      }}/>
      <Route exact path="/laptops/:id/edit" render={(props) => {
        const id = props.match.params.id;
        const laptop = findLaptopById(id);
        return <LaptopForm laptop={laptop} onUpdate={handleUpdate} manufacturers={manufacturers}/>
      }}/>
      <Route exact path="/laptops/:id" render={(props) => {
        const id = props.match.params.id;
        const laptop = findLaptopById(id); 
        return <LaptopDetail laptop={laptop}/>
      }}/>
>>>>>>> develop
      <Route render={() => {
        return <LaptopList laptops={laptops}/>
      }}/>
    </Switch>
  </Fragment>
</Router>
)


}
export default LaptopContainer;