import React from "react";
import MobilePhone from "./MobilePhone";
import {Link} from "react-router-dom";

const MobilePhoneDetail = ({mobilePhone, deletePhone}) => {

    if(!mobilePhone){
        return "Application Loading..."
    }

    const handleDeletePhone = () => deletePhone(mobilePhone.id);

    const editMobilePhoneUrl = "/api/mobilephones/" + mobilePhone.id + "/edit"
    const homeUrl = "/api/inventory"

    return(
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
            <MobilePhone mobilePhone={mobilePhone}/>
            <Link to={editMobilePhoneUrl}>
                <button className="dropbtn" type="button"><i class="glyphicon glyphicon-pencil"></i>  Edit</button>
            </Link>
                <button className="dropbtn" type="button" onClick={handleDeletePhone}><i class="glyphicon glyphicon-trash"></i>  Delete</button>
        </div>
        </div>
        </div>
        </>
    )
}

export default MobilePhoneDetail;