import React, {Fragment} from 'react';


const Tv = ({tv}) => {

    if (!tv) {
        return "Application Loading..."
    }
    return (
        <Fragment>
        <p>Manufacturer: {tv.manufacturer}</p>
        <p>Model: {tv.model} </p>
        <p>Product Number: {tv.productNumber}</p>
        <p>Category: {tv.category} </p>
        <p>Screen Size: {tv.screen}"</p>
        <p>Screen Resolution: {tv.screenResolution}</p>
        <p>Smart Features: {tv.smart}</p>
        <p>In Stock: {tv.stock}</p>
        <p>Price: {tv.sellingPrice}$ </p>
        <p>Purchase Price: {tv.buyingPrice}$</p>
        </Fragment>
    )
}

export default Tv;


