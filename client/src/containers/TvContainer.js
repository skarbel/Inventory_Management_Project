import { Fragment, useState, useEffect} from "react"
import TvList from '../components/tvs/Tvlist';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const TvContainer = () => {

    const [tvs, setTvs] = useState ([])

    useEffect(() => {
        fetchTvs();
    },[])
    

    const fetchTvs = () => {
        fetch('http://localhost:8080/api/tvs')
        .then(response => response.json())
        .then(data => setTvs(data))
    }

    return (
        <Router>
        <Fragment>
          <Switch>
            <Route render={() => {
              return <TvList tvs={tvs}/>
            }}/>
          </Switch>
        </Fragment>
      </Router>
    )
}
export default TvContainer;