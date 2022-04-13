import React from 'react';
import MobilePhone from './MobilePhone.js';
import {Link} from 'react-router-dom';
import '../mobilePhones/MobilePhone.css'

const MobilePhoneList = ({mobilePhones}) => {

  if (mobilePhones.length === 0) {
    return <p>Loading...</p>
  }


    // const mobilephoneDetails = mobilePhones.map((mobilePhone, index) => {
    //     const detailUrl = "/api/mobilephones/" + mobilePhone.id
    //     return (
    //     <li key={index} className="component-item">
    //         <div className='component'>
    //             <Link to={detailUrl}><MobilePhone mobilePhone={mobilePhone}/></Link>
    //         </div>
    //     </li>
    //     )
    // })

    const mobilePhoneDetails = mobilePhones.map((mobilePhone, index) => {
        const detailUrl = "/api/mobilephones/" + mobilePhone.id
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
    
    const mobilePhoneManufacturer = mobilePhones.map((mobilePhone) => {
      return (
        <>
        <p>
          <b>{mobilePhone.manufacturer}</b>
        </p>
        </>
      )
    })
    
    const mobilePhoneModel = mobilePhones.map((mobilePhone) => {
      return (
        <>
        <p>
        <b>{mobilePhone.model}</b>
        </p>
        </>
      )
    })
    
    const mobilePhoneScreen = mobilePhones.map((mobilePhone) => {
        return (
          <>
          <p>
            <b>{mobilePhone.size}"</b>
          </p>
          </>
        )
    })
    
    const mobilePhonePrice = mobilePhones.map((mobilePhone) => {
      return (
        <>
        <p>
        <b>{mobilePhone.sellingPrice}$</b>
        </p>
        </>
      )
    })

    const homeUrl = "/api/inventory"
	  const newPhoneUrl = "/api/mobilephones/new"

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
					      <Link to={newPhoneUrl}>	
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
          <th scope="col">Price</th>
          <th scope="col">View Details</th>
        </tr>
      	</thead>
      	<tbody>
        <tr>
          <td>{mobilePhoneManufacturer}</td>
          <td>{mobilePhoneModel}</td>
		      <td>{mobilePhoneScreen}</td>
          <td>{mobilePhonePrice}</td>
          <td>{mobilePhoneDetails}</td>
        </tr>
      	</tbody>
    	</table>
		</div>
    </div>
		</>
    )
}

export default MobilePhoneList;

