import React from 'react';
import MobilePhone from './mobilePhone.js';

const MobilePhoneList = ({mobilePhones}) => {

    if (mobilePhones.length === 0) {
        return <p>Loading...</p>
    }

    const mobilePhoneNodes = mobilePhones.map((mobilePhone, index) => {
        return (
        <li key={index} className="component-item">
            <div className='component'>
                <MobilePhone mobilePhone={mobilePhone}/>
            </div>
        </li>
        )
    })

    return (
        <ul className="component-list">
            {mobilePhoneNodes}
        </ul>
    )
}

export default MobilePhoneList;

