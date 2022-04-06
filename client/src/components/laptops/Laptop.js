import React from 'react';

const Laptop = ({laptop})  => {

    return (
        <>

        <p>Model: {laptop.model}</p>
        <p>Manufacturer: {laptop.manufacturer}</p>
        <p>Product Number: {laptop.productNumber}</p>
        <p>Category: {laptop.category}</p>
        <p>Stock: {laptop.stock}</p>
        <p>Price: {laptop.sellingPrice}</p>
        <p>Screen Size: {laptop.screenSize}</p>
        <p>Storage: {laptop.storage}</p>
        <p>RAM: {laptop.ram}</p>
        </>
        
        



    )
}
export default Laptop;