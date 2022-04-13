import React from 'react';
import Tv from './Tv.js'
import Link from 'react-router-dom/Link';
import '../tvs/Tv.css'


const TvList = ({ tvs }) => {

    if (tvs.length === 0) {
        return <p> Loading... </p>
    }

    // const tvElements = tvs.map((tv, index) => {
    //     const detailUrl = "/api/tvs/" + tv.id
    //     return (
    //         <li key={index} className = "component- item">
    //             <div className = "component">
    //                 <Link to={detailUrl}><Tv tv={tv}/></Link>
    //             </div>
    //         </li>
    //     )
    // })

    const tvDetails = tvs.map((tv, index) => {
        const detailUrl = "/api/tvs/" + tv.id
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
    
        const tvManufacturer = tvs.map((tv) => {
            return (
              <>
              <p>
                <b>{tv.manufacturer}</b>
              </p>
              </>
            )
        })
    
        const tvModel = tvs.map((tv) => {
            return (
              <>
              <p>
                <b>{tv.model}</b>
              </p>
              </>
            )
        })
    
        const tvScreen = tvs.map((tv) => {
            return (
              <>
              <p>
                <b>{tv.screen}"</b>
              </p>
              </>
            )
        })

        const tvResolution = tvs.map((tv) => {
            return (
              <>
              <p>
                <b>{tv.screenResolution}"</b>
              </p>
              </>
            )
        })
    
        const tvPrice = tvs.map((tv) => {
            return (
              <>
              <p>
                <b>{tv.sellingPrice}$</b>
              </p>
              </>
            )
        })
    
        const homeUrl = "/api/inventory"
        const newtvUrl = "/api/tvs/new"


    return (
        <>
        <div className='background'>
		    <div class="container ">
      		<div class="row">
        		<div class="col-0">
				</div>
      			<div class="col-12">
              <div className="dropbtn">
					    <Link to={homeUrl}>
              	<button className="homebtn" type="button">Home</button>
            	</Link>	
					    <Link to={newtvUrl}>	
					    <button className="addbtn ">Add</button>
					    </Link>
              </div>
				</div>
			</div>
	 	<table class="table ">
      	<thead class="table-dark">
        <tr>
          <th scope="col">Manufacturer </th>
          <th scope="col">Model </th>
		  <th scope="col">Screen Size</th>
		  <th scope="col">Screen Resolution</th>
          <th scope="col">Price</th>
          <th scope="col">View Details</th>
        </tr>
      	</thead>
      	<tbody>
        <tr>
          <td>{tvManufacturer}</td>
          <td>{tvModel}</td>
		  <td>{tvScreen}</td>
		  <td>{tvResolution}</td>
          <td>{tvPrice}</td>
          <td>{tvDetails}</td> 
        </tr>
      	</tbody>
    	</table>
		</div>
    </div>
		</>
    )
}

export default TvList;