import React from "react";
import Tv from "./Tv";
import { Link } from "react-router-dom";

const TvDetail = ({tv}) => {

    if(!tv){
        return "Application Loading..."
    }

    const editTvsUrl = "/api/tvs/" + tv.id + "/edit"
    const homeUrl = "/api/inventory"

    return (
        <div className="component">
            <Tv tv={tv}/>
            <Link to={homeUrl}>
                <button type="button">Home</button>
            </Link>
            <Link to={editTvsUrl}>
                <button type="button">Edit {tv.model}</button>
            </Link>
        </div>
    )
}

export default TvDetail;

