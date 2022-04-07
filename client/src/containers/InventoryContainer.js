import { Fragment, useState, useEffect } from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LaptopList from "../components/laptops/LaptopList";
import MobilePhoneList from "../components/mobilePhones/MobilePhoneList";
import TvList from "../components/tvs/Tvlist";


const InventoryContainer = () => {

  const [mobilePhones, setMobilePhones] = useState ([])
  const [laptops, setLaptops] = useState([])
  const [tvs, setTvs] = useState ([])
  const [inventory, setInventory] = useState([])


  useEffect (() => {
    fetchLaptops();
    
  }, [])

  const fetchLaptops = () => {
    console.log("fetch called");
  fetch('http://localhost:8080/api/laptops')
  .then(response => response.json())
  .then(data => setLaptops(data))
}

  useEffect(() => {
    fetchMobilePhones();
  },[])


  const fetchMobilePhones = () => {
    fetch('http://localhost:8080/api/mobilephones')
    .then(response => response.json())
    .then(data => setMobilePhones(data))
  }

  useEffect(() => {
      fetchTvs();
  },[])


  const fetchTvs = () => {
    fetch('http://localhost:8080/api/tvs')
    .then(response => response.json())
    .then(data => setTvs(data))
  }

  useEffect(() => {
    if(mobilePhones.length > 0 && laptops.length > 0 && tvs.length > 0){
      let combined = [...mobilePhones, ...laptops, ...tvs];
      setInventory(combined)
    }

  }, [mobilePhones, tvs, laptops])

  const itemElements = inventory.map((item) => {
    return ( 
    <>
    <p><b>{item.manufacturer}</b> {item.model}</p>
    {/* <p>{item.productNumber}</p> */}
    </>
    )
  })


  return( 
    <Fragment>
      {itemElements}
    </Fragment>
  )
}

export default InventoryContainer;
