import React, {Fragment} from 'react';


const Tv = ({tv}) => {

    if (!tv) {
        return "Loading..."
    }
    return (
        <>
        <p> {tv.manufacturer} {tv.model} </p>
        <p>Price: {tv.sellingPrice} </p>
        <p>Colour: {tv.colour} </p>
        <p>Screen Size: {tv.size}</p>
        <p>In Stock: {tv.stock}</p>
        <p>Product Number: {tv.productNumber}</p>
        <p>Category: {tv.category}</p>
        </>
    )
}

export default Tv;


