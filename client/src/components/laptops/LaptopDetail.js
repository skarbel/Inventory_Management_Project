import React from "react";
import Laptop from "./Laptop";
import { Link } from "react-router-dom";

const LaptopDetail = ({laptop, deleteLaptop}) => {

    if(!laptop){
        return "Application Loading..."
    }

    const editUrl = "/api/laptops/" + laptop.id + "/edit"
    const homeUrl = "/api/inventory"

   
    const handleDeleteLaptop = () => deleteLaptop(laptop.id);


    return (
        <div className="component">
            <Laptop laptop={laptop}/>
            <Link to={homeUrl}>
                <button type="button">Home</button>
            </Link>
            <Link to={editUrl}>
                <button type="button">Edit {laptop.model}</button>
            </Link>
            <button type="button" onClick={handleDeleteLaptop}> Delete </button>
            
        </div>
    )
}

export default LaptopDetail;

