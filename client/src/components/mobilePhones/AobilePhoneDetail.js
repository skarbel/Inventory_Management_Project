// import React from "react";
// import MobilePhone from "./MobilePhone";
// import {Link} from "react-router-dom";

// const MobilePhoneDetail = ({mobilePhone}) => {

//     if(!mobilePhone){
//         return "Application Loading..."
//     }

//     const editMobilePhoneUrl = "/mobilephones/" + mobilePhone.id + "/edit"

//     return(
//         <div className="component">
//             <MobilePhone mobilePhone={mobilePhone}/>
//             <Link to={editMobilePhoneUrl}>
//                 <button type="button">Edit {mobilePhone.model}</button>
//             </Link>
//         </div>
//     )
// }

// export default MobilePhoneDetail;

import React from "react";
import MobilePhone from "./MobilePhone";
import {Link} from "react-router-dom";

const MobilePhoneDetail = ({mobilePhone}) => {

    if(!mobilePhone){
        return "Application Loading..."
    }

    const editMobilePhoneUrl = "/mobilephones/" + mobilePhone.id + "/edit"

    return(
        <div className="component">
            <MobilePhone mobilePhone={mobilePhone}/>
            <Link to={editMobilePhoneUrl}>
                <button type="button">Edit {mobilePhone.model}</button>
            </Link>
        </div>
    )
}

export default MobilePhoneDetail;