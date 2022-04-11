import React from "react";
import Tv from "./Tv";
import { Link } from "react-router-dom";

const TvDetail = ({tv, deleteTv}) => {

    if(!tv){
        return "Application Loading..."
    }

    const editTvsUrl = "/api/tvs/" + tv.id + "/edit"
    const homeUrl = "/api/inventory"

    const handleDeleteTv = () => deleteTv(tv.id);

    return (
        <div className="component">
            <Tv tv={tv}/>
            <Link to={homeUrl}>
                <button type="button">Home</button>
            </Link>
            <Link to={editTvsUrl}>
                <button type="button">Edit {tv.model}</button>
            </Link>
            <button type="button" onClick={handleDeleteTv}>Delete</button>
        </div>
    )
}

export default TvDetail;

