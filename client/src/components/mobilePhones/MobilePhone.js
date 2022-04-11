import React, {Fragment} from 'react';

const MobilePhone = ({mobilePhone}) => {

    if (!mobilePhone){
        return "Application Loading..."
    }
    return (
        <Fragment>
            <p><b>Manufacturer:</b> {mobilePhone.manufacturer}</p>
            <p><b>Model:</b> {mobilePhone.model}</p>
            <p><b>Product Number:</b> {mobilePhone.productNumber}</p>
            <p><b>Category:</b> {mobilePhone.category}</p>
            <p><b>Colour:</b> {mobilePhone.colour} </p>
            <p><b>Screen Size:</b> {mobilePhone.size}"</p>
            <p><b>In Stock:</b> {mobilePhone.stock}</p>
            <p><b>Price:</b> {mobilePhone.sellingPrice}$ </p>
            <p><b>Purchase Price:</b> {mobilePhone.buyingPrice}$</p>
        </Fragment>

    )
}

export default MobilePhone;