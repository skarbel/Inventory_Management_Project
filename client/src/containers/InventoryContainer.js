import { Fragment, useState, useEffect } from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LaptopList from "../components/laptops/LaptopList";
import MobilePhoneList from "../components/mobilePhones/MobilePhoneList";
import TvList from "../components/tvs/Tvlist";
import Link from "react-router-dom/Link";
import '../Style/Inventory.css'


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

  // const newLaptopsUrl = "/laptops/new"
  // const newTvUrl = "/tvs/new"
  // const newMobilePhoneUrl = "/mobilephones/new"


  return(
    <>
    
    <div className="dropdown">
       <button className="dropbtn">Add Item</button>
      <div className="dropdown-content">
        {/* <Link to={newLaptopsUrl}>Laptops</Link>
        <Link to={newTvUrl}>Televisions</Link>
        <Link to={newMobilePhoneUrl}>Mobile Phones</Link> */}
        <a href="http://localhost:3000/laptops/new">Laptop</a>
        <a href="http://localhost:3000/tvs/new">Television</a>
        <a href="http://localhost:3000/mobilephones/new">Mobile Phone</a>
      </div>
    </div>

    <div className="dropdown">
       <button className="dropbtn">Category</button>
      <div className="dropdown-content">
        {/* <Link to={newLaptopsUrl}>Laptops</Link>
        <Link to={newTvUrl}>Televisions</Link>
        <Link to={newMobilePhoneUrl}>Mobile Phones</Link> */}
        <a href="http://localhost:3000/laptops">Laptop</a>
        <a href="http://localhost:3000/tvs">Television</a>
        <a href="http://localhost:3000/mobilephones">Mobile Phone</a>
      </div>
    </div>



    <div>
    {itemElements} 
    </div>
    {/* <button type = "submit" onSubmit={window.location = "/tvs"} className="itemDetails">button name </button> */}
    </>
  )
}

export default InventoryContainer;
