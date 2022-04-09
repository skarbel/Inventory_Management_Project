import React, {Fragment} from 'react';

const MobilePhone = ({mobilePhone}) => {

    if (!mobilePhone){
        return "Application Loading..."
    }
    return (
        <Fragment>
            <p>Manufacturer: {mobilePhone.manufacturer}</p>
            <p>Model: {mobilePhone.model}</p>
            <p>Product Number: {mobilePhone.productNumber}</p>
            <p>Category: {mobilePhone.category}</p>
            <p>Colour: {mobilePhone.colour} </p>
            <p>Screen Size: {mobilePhone.size}"</p>
            <p>In Stock: {mobilePhone.stock}</p>
            <p>Price: {mobilePhone.sellingPrice}$ </p>
            <p>Purchase Price: {mobilePhone.buyingPrice}$</p>
        </Fragment>

    )
}

export default MobilePhone;