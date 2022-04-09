import { Fragment, useState, useEffect} from "react"
import TvList from '../components/tvs/Tvlist';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TvForm from "../components/tvs/TvForm";
import TvDetail from "../components/tvs/TvDetail"
import Request from "../helpers/request";


const TvContainer = () => {

    const [tvs, setTvs] = useState ([])
    const [manufacturers, setManufacturers] = useState ([])

    useEffect(() => {
        fetchTvs();
        fetchManufacturers();
    },[])
    
    const fetchTvs = () => {
        fetch('/api/tvs')
        .then(response => response.json())
        .then(data => setTvs(data))
    }

    const fetchManufacturers = () => {
      fetch('/api/inventory/manufacturer')
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
      .then(() => {window.location = "/api/tvs"})
    }

    const handleUpdate = (tv) => {
      const request = new Request();
      request.patch("/api/tvs/" + tv.id, tv)
      .then(() => {window.location = "/api/tvs/" + tv.id})
    }


    return (
      <Fragment>
        <Switch>
          <Route exact path="/api/tvs/new" render={() =>{
            return <TvForm onCreate={handlePost} manufacturers={manufacturers}/>  
          }}/>
          <Route exact path="/api/tvs/:id/edit" render={(props) => {
            const id = props.match.params.id;
            const tv = findTvByID(id);
            return <TvForm tv={tv} onUpdate={handleUpdate} manufacturers={manufacturers}/>
          }}/>
          <Route exact path="/api/tvs/:id" render={(props) => {
            const id = props.match.params.id;
            const tv = findTvByID(id); 
            return <TvDetail tv={tv}/>
          }}/>
          <Route render={() => {
              return <TvList tvs={tvs}/>
          }}/>
        </Switch>
      </Fragment>
    )
}
export default TvContainer;