import React from 'react';
import Tv from './Tv'



const TvList = ({ tvs }) => {

    if (tvs.lenght === 0) {
        return <p> Loading... </p>
    }

    const tvNodes = tvs.map((tv,index) => {
        return (
            <li key={index} className = "component- item">
                <div className = "component">
                    <Tv tv = {tv}/>
                </div>
            </li>
        )
    })

    return (
        <ul className='component - list'>
            {tvNodes}
        </ul>
    )
}

export default TvList;