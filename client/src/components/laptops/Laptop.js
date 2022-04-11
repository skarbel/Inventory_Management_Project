import React, { Fragment } from 'react';
import {Link} from 'react-router-dom/Link';

const Laptop = ({laptop})  => {

    if(!laptop){
        return "Application Loading..."
    }
    return (
        <Fragment>
        <p><b>Manufacturer:</b> {laptop.manufacturer}</p>
        <p><b>Model:</b> {laptop.model}</p>
        <p><b>Product Number:</b> {laptop.productNumber}</p>
        <p><b>Category:</b> {laptop.category}</p>
        <p><b>Screen Size:</b> {laptop.screenSize}"</p>
        <p><b>RAM:</b> {laptop.ram}GB</p>
        <p><b>Storage:</b> {laptop.storage}</p>
        <p><b>In Stock:</b> {laptop.stock}</p>
        <p><b>Price:</b> {laptop.sellingPrice}$</p>
        <p><b>Purchase Price:</b> {laptop.buyingPrice}$</p>
        </Fragment>
    )
}
export default Laptop;