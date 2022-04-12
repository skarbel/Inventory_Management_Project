import { Fragment, useState, useEffect } from "react"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LaptopList from "../components/laptops/LaptopList";
import MobilePhoneList from "../components/mobilePhones/MobilePhoneList";
import TvList from "../components/tvs/Tvlist";
import Link from "react-router-dom/Link";
import '../Style/Inventory.css';
import Filter from "../components/Filter";



const InventoryContainer = () => {

  const [mobilePhones, setMobilePhones] = useState ([])
  const [laptops, setLaptops] = useState([])
  const [tvs, setTvs] = useState ([])
  const [inventory, setInventory] = useState([])
  const [filteredInventory, setFilteredInventory] = useState([]);


  useEffect (() => {
    fetchLaptops();
    
  }, [])

  const fetchLaptops = () => {
    console.log("fetch called");
  fetch('/api/laptops')
  .then(response => response.json())
  .then(data => setLaptops(data))
}

  useEffect(() => {
    fetchMobilePhones();
  },[])


  const fetchMobilePhones = () => {
    fetch('/api/mobilephones')
    .then(response => response.json())
    .then(data => setMobilePhones(data))
  }

  useEffect(() => {
      fetchTvs();
  },[])


  const fetchTvs = () => {
    fetch('/api/tvs')
    .then(response => response.json())
    .then(data => setTvs(data))
  }

  useEffect(() => {
    if(mobilePhones.length > 0 && laptops.length > 0 && tvs.length > 0){
      let combined = [...mobilePhones, ...laptops, ...tvs];
      setInventory(combined)
      setFilteredInventory(combined)
    }

  }, [mobilePhones, tvs, laptops])
  
  const itemElements = filteredInventory.map((item) => {
    return ( 
    <>
    <p>
      <b>{item.manufacturer}</b> {item.model}
    </p>
    </>
    )
  })

  const itemCategory = filteredInventory.map((item) => {
    return(
      <>
      <p>
        <b>{item.category}</b>
      </p>
      </>
    )
  })

  const itemManufacturer = filteredInventory.map((item) => {
    return ( 
    <>
    <p>
      <b>{item.manufacturer}</b>
    </p>
    </>
    )
  })

  const itemModel = filteredInventory.map((item) => {
    return (
      <>
      <p>
        <b>{item.model}</b>
      </p>
  
      </>
    )
  })
  
  const itemStock = filteredInventory.map((item) => {
    return (
      <>
      <p>
        <b>{item.stock}</b>
      </p>
  
      </>
    )
  })

  // const sortItemsByModel = document.querySelector("sort-model")
  // sortItemsByModel.addEventListener("click", (e) => {
  //   sortItems()
  // })

  const sortManufacturerAscending = () => {
    const copyInventory = [...filteredInventory]
    copyInventory.sort(function (a, b) {
    let modelA = a.manufacturer.toUpperCase();
    let modelB = b.manufacturer.toUpperCase();
      if(modelA < modelB) {
        return -1;
      }
      if (modelA > modelB) {
        return 1;
      }
      return 0
  });
  setFilteredInventory(copyInventory)
}
  
  const sortManufacturerDescending = () => {
    const copyInventory = [...filteredInventory]
    copyInventory.sort(function (a, b) {
    let modelA = a.manufacturer.toUpperCase();
    let modelB = b.manufacturer.toUpperCase();
      if(modelA < modelB) {
        return 1;
      }
      if (modelA > modelB) {
        return -1;
      }
      return 0
  });
  setFilteredInventory(copyInventory)
}
  
  const sortModelAscending = () => {
    const copyInventory = [...filteredInventory]
    copyInventory.sort(function (a, b) {
    let modelA = a.model.toUpperCase();
    let modelB = b.model.toUpperCase();
      if(modelA < modelB) {
        return -1;
      }
      if (modelA > modelB) {
        return 1;
      }
      return 0
  });
  setFilteredInventory(copyInventory)
}
  
  const sortModelDescending = () => {
    const copyInventory = [...filteredInventory]
    copyInventory.sort(function (a, b) {
    let modelA = a.model.toUpperCase();
    let modelB = b.model.toUpperCase();
      if(modelA < modelB) {
        return 1;
      }
      if (modelA > modelB) {
        return -1;
      }
      return 0
  })
  setFilteredInventory(copyInventory)
}
  
  const sortStockAscending = () => {
    const copyInventory = [...filteredInventory]
    copyInventory.sort(function (a, b) {
      let modelA = a.stock
      let modelB = b.stock
      if(modelA < modelB) {
        return -1;
      }
      if (modelA > modelB) {
        return 1;
      }
      return 0
  });
  setFilteredInventory(copyInventory)
}
  
  const sortStockDescending = () => {
    const copyInventory = [...filteredInventory]
    copyInventory.sort(function (a, b) {
      let modelA = a.stock
      let modelB = b.stock
      if(modelA < modelB) {
        return 1;
      }
      if (modelA > modelB) {
        return -1;
      }
      return 0
  });
  setFilteredInventory(copyInventory)
  }

  const sortCategoryAscending = () => {
    const copyInventory = [...filteredInventory]
    copyInventory.sort(function (a, b) {
      let modelA = a.category
      let modelB = b.category
      if(modelA < modelB) {
        return -1;
      }
      if (modelA > modelB) {
        return 1;
      }
      return 0
  });
  setFilteredInventory(copyInventory)
}

  const sortCategoryDescending = () => {
    const copyInventory = [...filteredInventory]
    copyInventory.sort(function (a, b) {
      let modelA = a.category
      let modelB = b.category
      if(modelA < modelB) {
        return 1;
      }
      if (modelA > modelB) {
        return -1;
      }
      return 0
  });
  setFilteredInventory(copyInventory)
  }
  
  const filter = (searchTerm) => {
    const lowerSearch = searchTerm.toLowerCase();
    const filteredInventory = inventory.filter((inventory) => {
      return(inventory.manufacturer.toLowerCase().indexOf(lowerSearch) > -1 || inventory.model.toLowerCase().indexOf(lowerSearch) > -1) || inventory.category.toLowerCase().indexOf(lowerSearch) > -1 
    });
    setFilteredInventory(filteredInventory)
  }

  return(
    <>

    <div class="container ">
      <div class="row">
        <div class="col-0"></div>
      <div class="col-12">
      <div  className="dropdown">
        <button className="dropbtn ">Add Item</button>
        <div className="dropdown-content">
          <a href="http://localhost:3000/api/laptops/new">Laptop</a>
          <a href="http://localhost:3000/api/tvs/new">Television</a>
          <a href="http://localhost:3000/api/mobilephones/new">Mobile Phone</a>
        </div>
      </div>  
      <div className="dropdown">
        <button className="dropbtn">Category</button>
        <div className="dropdown-content">
          <a href="http://localhost:3000/api/laptops">Laptop</a>
          <a href="http://localhost:3000/api/tvs">Television</a>
          <a href="http://localhost:3000/api/mobilephones">Mobile Phone</a>
        </div>
      </div>
      <div className="dropdown">
        <button className="dropbtn">Sort by</button>
        <div className="dropdown-content">
          <button className="sortbtn" onClick={() => sortManufacturerAscending()}>Manufacturer Asc </button>
          <button className="sortbtn" onClick={() => sortManufacturerDescending()}>Manufacturer Desc </button>
          <button className="sortbtn" onClick={() => sortModelAscending()}>Model Asc </button>
          <button className="sortbtn" onClick={() => sortModelDescending()}>Model Desc </button>
          <button className="sortbtn" onClick={() => sortStockAscending()}>Stock Asc </button>
          <button className="sortbtn" onClick={() => sortStockDescending()}>Stock Desc </button>
          <button className="sortbtn" onClick={() => sortCategoryAscending()}>Category Asc </button>
          <button className="sortbtn" onClick={() => sortCategoryDescending()}>Category Desc </button>
        </div>
        </div>
        <div className="dropdown">
          <div className="search-bar">
            <Filter handleChange={filter}/>
          </div>
        </div>
      </div>
      
    </div>
    <table class="table ">
      <thead class="table-dark">
        <tr>
          <th scope="col">Manufacturer </th>
          <th scope="col">Model </th>
          <th scope="col">Category </th>
          <th scope="col">Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{itemManufacturer}</td>
          <td>{itemModel}</td>
          <td>{itemCategory}</td>
          <td>{itemStock}</td>
        </tr>
      </tbody>
    </table>
    </div>  
    </>

    
  )
}


export default InventoryContainer;
