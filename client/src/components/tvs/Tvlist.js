import React from 'react';
import Tv from './Tv.js'
import Link from 'react-router-dom/Link';


const TvList = ({ tvs }) => {

    if (tvs.length === 0) {
        return <p> Loading... </p>
    }

    const tvElements = tvs.map((tv, index) => {
        const detailUrl = "/api/tvs/" + tv.id
        return (
            <li key={index} className = "component- item">
                <div className = "component">
                    <Link to={detailUrl}><Tv tv={tv}/></Link>
                </div>
            </li>
        )
    })

    return (
        <ul className='component - list'>
            {tvElements}
        </ul>
    )
}

export default TvList;