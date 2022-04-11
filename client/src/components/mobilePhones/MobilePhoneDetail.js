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
        <div className="component">
            
            <MobilePhone mobilePhone={mobilePhone}/>
            <Link to={homeUrl}>
                <button type="button">Home</button>
            </Link>
            <Link to={editMobilePhoneUrl}>
                <button type="button">Edit {mobilePhone.model}</button>
            </Link>
                <button type="button" onClick={handleDeletePhone}>Delete</button>
            
        </div>
    )
}

export default MobilePhoneDetail;