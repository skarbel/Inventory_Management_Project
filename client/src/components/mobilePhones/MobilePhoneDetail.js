import React from "react";
import MobilePhone from "./MobilePhone";
import {Link} from "react-router-dom";

const MobilePhoneDetail = ({mobilePhone, deletePhone}) => {

    if(!mobilePhone){
        return "Application Loading..."
    }

    const handleDeletePhone = () => {
        let result = window.confirm("Are you sure you want to delete");
        if(result){
            deletePhone(mobilePhone.id);
        }
    };

    const backUrl = "/api/mobilephones"
    const editMobilePhoneUrl = "/api/mobilephones/" + mobilePhone.id + "/edit"

    return(
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
            <Link to={editMobilePhoneUrl}>
                <button className="editbtn" type="button"><i class="glyphicon glyphicon-pencil"></i>  Edit</button>
            </Link>
                <button className="deletebtn" type="button" onClick={handleDeletePhone}><i class="glyphicon glyphicon-trash"></i>  Delete</button>
        </div>
        </div>
        <MobilePhone mobilePhone={mobilePhone}/>
        </div>
        </div>
        </div>
        </>
    )
}

export default MobilePhoneDetail;