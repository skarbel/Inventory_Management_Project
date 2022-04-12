import React, {Fragment} from 'react';


const Tv = ({tv}) => {

    if (!tv) {
        return "Application Loading..."
    }
    return (
        <>
        <div className="container">
            <div class="row">
                <div class="col-0">
			    </div>
                <div class="col-12"></div>
                <table class="table ">
            <thead class="table-dark">
            <tr>
            <th scope="col">  </th>
            <th scope="col"> </th>
            <th scope="col"> </th>
            <th scope="col"> </th>
            <th scope="col"> </th>
            </tr>
            </thead>
            <tbody>
            <tr>
            <td>
                <p><b>Manufacturer:</b> </p>
                <p><b>Model:</b>  </p>
                <p><b>Product Number:</b> </p>
                <p><b>Category:</b>  </p>
                <p><b>Screen Size:</b> </p>
                <p><b>Screen Resolution:</b> </p>
                <p><b>Smart Features:</b> </p>
                <p><b>In Stock:</b> </p>
                <p><b>Price:</b>  </p>
                <p><b>Purchase Price:</b> $</p>
                </td>
                <td>
                   <p>{tv.manufacturer}</p> 
                   <p>{tv.model}</p> 
                   <p>{tv.productNumber}</p> 
                   <p>{tv.category}</p> 
                   <p>{tv.screen}"</p> 
                   <p>{tv.screenResolution}</p> 
                   <p>{tv.smart}</p> 
                   <p>{tv.stock}</p> 
                   <p>{tv.sellingPrice}$</p> 
                   <p>{tv.buyingPrice}</p> 
                </td>
                </tr>
            </tbody>
                    </table>
                 </div>
            </div>
        </>
    )
}

export default Tv;


