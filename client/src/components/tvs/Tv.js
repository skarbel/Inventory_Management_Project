import React, {Fragment} from 'react';


const Tv = ({tv}) => {

    if (!tv) {
        return "Application Loading..."
    }
    return (
        <Fragment>
        <p><b>Manufacturer:</b> {tv.manufacturer}</p>
        <p><b>Model:</b> {tv.model} </p>
        <p><b>Product Number:</b> {tv.productNumber}</p>
        <p><b>Category:</b> {tv.category} </p>
        <p><b>Screen Size:</b> {tv.screen}"</p>
        <p><b>Screen Resolution:</b> {tv.screenResolution}</p>
        <p><b>Smart Features:</b> {tv.smart}</p>
        <p><b>In Stock:</b> {tv.stock}</p>
        <p><b>Price:</b> {tv.sellingPrice}$ </p>
        <p><b>Purchase Price:</b> {tv.buyingPrice}$</p>
        </Fragment>
    )
}

export default Tv;


