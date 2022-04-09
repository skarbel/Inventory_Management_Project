import React, { Fragment } from 'react';
import {Link} from 'react-router-dom/Link';

const Laptop = ({laptop})  => {

    if(!laptop){
        return "Application Loading..."
    }
    return (
        <Fragment>
        <p>Manufacturer: {laptop.manufacturer}</p>
        <p>Model: {laptop.model}</p>
        <p>Product Number: {laptop.productNumber}</p>
        <p>Category: {laptop.category}</p>
        <p>Screen Size: {laptop.screenSize}"</p>
        <p>RAM: {laptop.ram}GB</p>
        <p>Storage: {laptop.storage}</p>
        <p>In Stock: {laptop.stock}</p>
        <p>Price: {laptop.sellingPrice}$</p>
        <p>Purchase Price: {laptop.buyingPrice}$</p>
        </Fragment>
    )
}
export default Laptop;