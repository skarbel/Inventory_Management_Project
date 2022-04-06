import React, {Fragment} from 'react';

const MobilePhone = ({mobilePhone}) => {

    if (!mobilePhone){
        return "Loading..."
    }
    return (
        <Fragment>
            <p>
            {mobilePhone.manufacturer} {mobilePhone.model}
            </p>
            <p>Price: {mobilePhone.sellingPrice} </p>
            <p>Colour: {mobilePhone.colour} </p>
            <p>Screen Size: {mobilePhone.size}</p>
            <p>In Stock: {mobilePhone.stock}</p>
            <p>Product Number: {mobilePhone.productNumber}</p>
            <p>Category: {mobilePhone.category}</p>
        </Fragment>

    )

}

export default MobilePhone;