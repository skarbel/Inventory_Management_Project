import React from "react";
import MobilePhone from "./MobilePhone";
import {Link} from "react-router-dom";

const MobilePhoneDetail = ({mobilePhone}) => {

    if(!mobilePhone){
        return "Application Loading..."
    }

    const editUrl = "/mobilephones" + mobilePhone.id + "/edit"

    return(
        <div className="component">
            <MobilePhone mobilePhone={mobilePhone}/>
            <Link to={editUrl}>
                <button type="button">Edit {mobilePhone.model}</button>
            </Link>
        </div>
    )
}

export default MobilePhone;