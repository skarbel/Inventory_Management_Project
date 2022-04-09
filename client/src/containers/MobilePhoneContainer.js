import { Fragment, useState, useEffect} from "react"
import MobilePhoneList from '../components/mobilePhones/MobilePhoneList';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MobilePhoneForm from "../components/mobilePhones/MobilePhoneForm";
import MobilePhoneDetail from '../components/mobilePhones/MobilePhoneDetail';
import Request from "../helpers/request";

const MobilePhoneContainer = () => {

    const [mobilePhones, setMobilePhones] = useState ([])
    const [manufacturers, setManufacturers] = useState([])

    useEffect(() => {
        fetchMobilePhones();
        fetchManufacturers();
    },[])
    

    const fetchMobilePhones = () => {
        fetch('/api/mobilephones')
        .then(response => response.json())
        .then(data => setMobilePhones(data))
    }

    const fetchManufacturers = () => {
      fetch('/api/inventory/manufacturer')
      .then(response => response.json())
      .then(data => setManufacturers(data))
    }

    const findMobilePhoneById = (id) => {
      return mobilePhones.find((mobilePhone) => {
        return mobilePhone.id === parseInt(id);
      })
    }

    const handlePost = (mobilePhone) => {
      const request = new Request();
      const url = '/api/mobilephones';
      request.post(url, mobilePhone)
      .then(() => {window.location = "/api/mobilephones"})
    }

    const handleUpdate = (mobilePhone) => {
      const request = new Request();
      request.patch("/api/mobilephones/" + mobilePhone.id, mobilePhone)
      .then(() => {window.location = "/api/mobilephones/" + mobilePhone.id})
    }

    return (
        <Router>
        <Fragment>
          <Switch>
          <Route exact path="/api/mobilephones/new" render={() => {
            return <MobilePhoneForm onCreate={handlePost} manufacturers ={manufacturers}/>
          }}/>
          <Route exact path="/api/mobilephones/:id/edit" render={(props) => {
            const id = props.match.params.id;
            const mobilePhone = findMobilePhoneById(id);
            return <MobilePhoneForm mobilePhone={mobilePhone} onUpdate={handleUpdate} manufacturers={manufacturers}/>
          }}/>
          <Route exact path="/api/mobilephones/:id" render={(props) => {
            const id = props.match.params.id;
            const mobilePhone = findMobilePhoneById(id);
            return <MobilePhoneDetail mobilePhone={mobilePhone}/>
          }}/>
          <Route render={() => {
            return <MobilePhoneList mobilePhones={mobilePhones}/>
          }}/>
          </Switch>
        </Fragment>
      </Router>
    )
}
export default MobilePhoneContainer;