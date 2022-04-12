import React, {Fragment} from 'react';

const MobilePhone = ({mobilePhone}) => {

    if (!mobilePhone){
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
            <p><b>Model:</b> </p>
            <p><b>Product Number:</b> </p>
            <p><b>Category:</b> </p>
            <p><b>Colour:</b>  </p>
            <p><b>Screen Size:</b> </p>
            <p><b>In Stock:</b> </p>
            <p><b>Price:</b>  </p>
            <p><b>Purchase Price:</b> </p>
            </td>
            <td>
            <p>{mobilePhone.manufacturer}</p>
            <p>{mobilePhone.model}</p>
            <p>{mobilePhone.productNumber}</p>
            <p>{mobilePhone.category}</p>
            <p>{mobilePhone.colour}</p>
            <p>{mobilePhone.size}"</p>
            <p>{mobilePhone.stock}</p>
            <p>{mobilePhone.sellingPrice}$</p>
            <p>{mobilePhone.buyingPrice}$</p>
            </td>
            </tr>
            </tbody>
                    </table>
                 </div>
            </div>
        </>

    )
}

export default MobilePhone;