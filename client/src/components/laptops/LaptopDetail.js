import React from "react";
import Laptop from "./Laptop";
import { Link } from "react-router-dom";

const LaptopDetail = ({laptop, deleteLaptop}) => {

    if(!laptop){
        return "Application Loading..."
    }

    const editUrl = "/api/laptops/" + laptop.id + "/edit"
    const backUrl = "/api/laptops"

   
    const handleDeleteLaptop = () => {
        let result = window.confirm("Are you sure you want to delete");
        if(result){
            deleteLaptop(laptop.id);
        }
    }


    return (
        <>
        <div className="background">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
        <div className="container">
            <div class="row">
                <div class="col-0">
			    </div>
            <div class="col-12">
            <div className="dropbtn">
            <Link to={backUrl}>
                <button className="backbtn" type="button">Back</button>
            </Link>
            <Link to={editUrl}>
                <button className="editbtn" type="button"><i class="glyphicon glyphicon-pencil"></i> Edit</button>
            </Link>
            <button className="deletebtn" type="button" onClick={handleDeleteLaptop}><i class="glyphicon glyphicon-trash"></i> Delete</button>
            </div>
            </div>
            <Laptop laptop={laptop}/>
        </div>
        </div>
        </div>
        </>
    )
}

export default LaptopDetail;

