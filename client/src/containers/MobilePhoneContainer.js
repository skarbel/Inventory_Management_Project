import { Fragment, useState, useEffect} from "react"
import MobilePhoneList from '../components/mobilePhones/mobilePhoneList';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const MobilePhoneContainer = () => {

    const [mobilePhones, setMobilePhones] = useState ([])

    useEffect(() => {
        fetchMobilePhones();
    },[])
    

    const fetchMobilePhones = () => {
        fetch('http://localhost:8080/api/mobilephones')
        .then(response => response.json())
        .then(data => setMobilePhones(data))
    }

    return (
        <Router>
        <Fragment>
          <Switch>
            <Route render={() => {
              return <MobilePhoneList mobilePhones={mobilePhones}/>
            }}/>
          </Switch>
        </Fragment>
      </Router>
    )
}
export default MobilePhoneContainer;