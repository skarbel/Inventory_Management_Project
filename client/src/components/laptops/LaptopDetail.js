import React from "react";
import Laptop from "./Laptop";
import { Link } from "react-router-dom";

const LaptopDetail = ({laptop}) => {

    if(!laptop){
        return "Application Loading..."
    }

    const editUrl = "/laptops/" + laptop.id + "/edit"

    return (
        <div className="component">
            <Laptop laptop={laptop}/>
            <Link to={editUrl}>
                <button type="button">Edit {laptop.model}</button>
            </Link>
        </div>
    )
}

export default LaptopDetail;

