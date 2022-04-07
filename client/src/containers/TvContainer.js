import { Fragment, useState, useEffect} from "react"
import TvList from '../components/tvs/Tvlist';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import TvForm from "../components/tvs/TvForm";


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


    return (
        <Router>
        <Fragment>
          <Switch>

          <Route exact path="/tvs/new" render={() =>{
          return <TvForm manufacturers={manufacturers}/>  
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