import React from "react";
import MobilePhone from "./MobilePhone";
import {Link} from "react-router-dom";

const MobilePhoneDetail = ({mobilePhone}) => {

    if(!mobilePhone){
        return "Application Loading..."
    }

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
        </div>
    )
}

export default MobilePhoneDetail;