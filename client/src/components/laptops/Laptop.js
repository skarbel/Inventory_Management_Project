import React, { Fragment } from 'react';
import {Link} from 'react-router-dom/Link';

const Laptop = ({laptop})  => {

    if(!laptop){
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
                    <p><b>Screen Size:</b> </p>
                    <p><b>RAM:</b> </p>
                    <p><b>Storage:</b> </p>
                    <p><b>In Stock:</b> </p>
                    <p><b>Price:</b> </p>
                    <p><b>Purchase Price:</b> </p>
            </td>
            <td>
            <p>{laptop.manufacturer}</p>
            <p>{laptop.model}</p>
            <p>{laptop.productNumber}</p>
            <p>{laptop.category}</p>
            <p>{laptop.screenSize}"</p>
            <p>{laptop.ram}</p>
            <p>{laptop.storage}GB</p>
            <p>{laptop.stock}</p>
            <p>{laptop.sellingPrice}$</p>
            <p>{laptop.buyingPrice}$</p>
            </td>
            </tr>
            </tbody>
                    </table>
                 </div>
            </div>
        </>
    )
}
export default Laptop;