import React from 'react';
import MobilePhone from './MobilePhone.js';
import Link from 'react-router-dom/Link';

const MobilePhoneList = ({mobilePhones}) => {

    if (mobilePhones.length === 0) {
        return <p>Loading...</p>
    }


    const mobilephoneElements = mobilePhones.map((mobilePhone, index) => {
        const detailUrl = "/api/mobilephones/" + mobilePhone.id
        return (
        <li key={index} className="component-item">
            <div className='component'>
                <Link to={detailUrl}><MobilePhone mobilePhone={mobilePhone}/></Link>
            </div>
        </li>
        )
    })

    return (
        <ul className="component-list">
            {mobilephoneElements}
        </ul>
    )
}

export default MobilePhoneList;

