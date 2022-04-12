import React from "react";
import Tv from "./Tv";
import { Link } from "react-router-dom";

const TvDetail = ({tv, deleteTv}) => {

    if(!tv){
        return "Application Loading..."
    }

    const editTvsUrl = "/api/tvs/" + tv.id + "/edit"
    const backUrl = "/api/tvs"

    const handleDeleteTv = () => {
        let result = window.confirm("Are you sure you want to delete?");
    if(result){
        deleteTv(tv.id);
        }
    }

    return (
        <>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
        <div className="container">
            <div class="row">
                <div class="col-0">
			    </div>
            <div class="col-12">
            
            <Link to={backUrl}>
                <button className="dropbtn" type="button">Back</button>
            </Link>
            <Tv tv={tv}/>
            <Link to={editTvsUrl}>
                <button className="dropbtn" type="button"><i class="glyphicon glyphicon-pencil"></i> Edit</button>
            </Link>
            <button className="dropbtn" type="button" onClick={handleDeleteTv} ><i class="glyphicon glyphicon-trash"></i> Delete</button>
            </div>
            </div>
        </div>
        </>
        
    )
}

export default TvDetail;

