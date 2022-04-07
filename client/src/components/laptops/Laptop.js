import React, { Fragment } from 'react';

const Laptop = ({laptop})  => {

    if(!laptop){
        return "Application Loading..."
    }
    return (
        <Fragment>
        <p>Model: {laptop.model}</p>
        <p>Manufacturer: {laptop.manufacturer}</p>
        <p>Product Number: {laptop.productNumber}</p>
        <p>Category: {laptop.category}</p>
        <p>Stock: {laptop.stock}</p>
        <p>Price: {laptop.sellingPrice}</p>
        <p>Screen Size: {laptop.screenSize}</p>
        <p>Storage: {laptop.storage}</p>
        <p>RAM: {laptop.ram}</p>
        </Fragment>
    )
}
export default Laptop;