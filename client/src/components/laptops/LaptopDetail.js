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
        <>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
        <div className="container">
            <div class="row">
                <div class="col-0">
			    </div>
            <div class="col-12">
            <Link to={homeUrl}>
                <button className="dropbtn" type="button">Home</button>
            </Link>
            <Laptop laptop={laptop}/>
            <Link to={editUrl}>
                <button className="dropbtn" type="button"><i class="glyphicon glyphicon-pencil"></i></button>
            </Link>
            <button className="dropbtn" type="button" onClick={handleDeleteLaptop}><i class="glyphicon glyphicon-trash"></i></button>
            </div>
            </div>
        </div>
        </>
    )
}

export default LaptopDetail;

