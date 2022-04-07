import React from "react";
import Tv from "./Tv";
import { Link } from "react-router-dom";

const TvDetail = ({tv}) => {

    if(!tv){
        return "Application Loading..."
    }

    const editUrl = "/tvs" +tv.id + "/edit"

    return (
        <div className="component">
            <Tv tv={tv}/>
            <Link to={editUrl}>
                <button type="button">Edit {tv.model}</button>
            </Link>
        </div>
    )
}

export default TvDetail;

