import { Fragment, useState, useEffect} from "react"
import TvList from '../components/tvs/Tvlist';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TvForm from "../components/tvs/TvForm";
import TvDetail from "../components/tvs/TvDetail"


const TvContainer = () => {

    const [tvs, setTvs] = useState ([])
    const [manufacturers, setManufacturers] = useState ([])

    useEffect(() => {
        fetchTvs();
        fetchManufacturers();
    },[])
    

    const fetchTvs = () => {
        fetch('http://localhost:8080/api/tvs')
        .then(response => response.json())
        .then(data => setTvs(data))
    }

    const fetchManufacturers = () => {
      fetch('http://localhost:8080/api/inventory/manufacturer')
      .then(response => response.json())
      .then(data => setManufacturers(data))
    }

    const findTvByID = (id) => {
      return tvs.find((tv) => {
        return tv.id === parseInt(id);
      })
    }

    const handlePost = (tv) => {
      const request = new Request();
      const url = "/api/tvs";
      request.post(url, tv)
      .then(() => {window.location = "/tvs"})
    }

    const handleUpdate = (tv) => {
      const request = new Request();
      request.patch("/api/tvs" + tv.id, tv)
      .then(() => {window.location = "/tvs" + tv.id})
    }


    return (
      <Router>
      <Fragment>
        <Switch>
          <Route exact path="/tvs/new" render={() =>{
            return <TvForm manufacturers={manufacturers}/>  
          }}/>
          <Route exact path="/tvs/:id/edit" render={(props) => {
            const id = props.match.params.id;
            const tv = findTvByID(id);
            return <TvForm tv={tv} onUpdate={handleUpdate}/>
          }}/>
          <Route exact path="/tvs/:id" render={(props) => {
            const id = props.match.params.id;
            const tv = findTvByID(id); 
            return <TvDetail tv={tv}/>
          }}/>
          <Route render={() => {
              return <TvList tvs={tvs}/>
          }}/>
        </Switch>
      </Fragment>
      </Router>
    )
}
export default TvContainer;