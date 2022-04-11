import React from 'react';
import Laptop from './Laptop.js';
import {Link} from 'react-router-dom';
import { Button } from 'bootstrap';
import '../laptops/Laptop.css'


const LaptopList = ({laptops}) => {

    if(laptops.length === 0){
		return <p>Loading...</p>
	}

    // const LaptopElements = laptops.map((laptop, index) => {
    //     const detailUrl = "/api/laptops/" + laptop.id
	// 		return (
	// 		<li key={index} className="component-item">
	// 			<div className='component'>
	// 			<Link to={detailUrl}>
	// 				<Laptop laptop={laptop}/>
	// 			</Link>
	// 			</div>
	// 		</li>
	// 	)
	// 	})
    
	const laptopDetails = laptops.map((laptop, index) => {
    const detailUrl = "/api/laptops/" + laptop.id
		return (
			<>
			<p>
			<div class="button">
			<button><Link to={detailUrl}>View Details</Link></button>
			</div>
			</p>
			</>
		)
	})

	const laptopManufacturer = laptops.map((laptop) => {
		return (
		  <>
		  <p>
			<b>{laptop.manufacturer}</b>
		  </p>
		  </>
		)
    })

	const laptopModel = laptops.map((laptop) => {
		return (
		  <>
		  <p>
			<b>{laptop.model}</b>
		  </p>
		  </>
		)
    })

	const laptopScreen = laptops.map((laptop) => {
		return (
		  <>
		  <p>
			<b>{laptop.screenSize}"</b>
		  </p>
		  </>
		)
    })

	const laptopPrice = laptops.map((laptop) => {
		return (
		  <>
		  <p>
			<b>{laptop.sellingPrice}$</b>
		  </p>
		  </>
		)
    })

	const homeUrl = "/api/inventory"
	const newLaptopUrl = "/api/laptops/new"

	return (
		<>
		<div class="container ">
      		<div class="row">
        		<div class="col-0">
				</div>
      			<div class="col-12">
					<Link to={homeUrl}>
                	<button className="dropbtn" type="button">Home</button>
            		</Link>	
					<Link to={newLaptopUrl}>	
					<button className="dropbtn ">Add</button>
					</Link>
				</div>
			</div>
	 	<table class="table ">
      	<thead class="table-dark">
        <tr>
          <th scope="col">Manufacturer </th>
          <th scope="col">Model </th>
		  <th scope="col">Screen Size</th>
          <th scope="col">Price</th>
          <th scope="col">View Details</th>
        </tr>
      	</thead>
      	<tbody>
        <tr>
          <td>{laptopManufacturer}</td>
          <td>{laptopModel}</td>
		  <td>{laptopScreen}</td>
          <td>{laptopPrice}</td>
          <td>{laptopDetails}</td>
        </tr>
      	</tbody>
    	</table>
		</div>

		</>
	)
}

export default LaptopList;