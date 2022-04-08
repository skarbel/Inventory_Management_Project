import React, {Fragment} from 'react';


const Tv = ({tv}) => {

    if (!tv) {
        return "Application Loading..."
    }
    return (
        <Fragment>
        <b><p> {tv.manufacturer} {tv.model} </p></b>
        <p>Price: {tv.sellingPrice}$ </p>
        <p>Screen Size: {tv.screen}"</p>
        <p>In Stock: {tv.stock}</p>
        <p>Product Number: {tv.productNumber}</p>
        <p>Category: {tv.category} </p>
        </Fragment>
    )
}

export default Tv;


