import React from 'react';
import Laptop from './Laptop.js';
import Link from 'react-router-dom/Link';

const LaptopList = ({laptops}) => {

    if(laptops.length === 0){
		return <p>Loading...</p>
	}

    const LaptopElements = laptops.map((laptop, index) => {
        const detailUrl = "/laptops/" + laptop.id
			return (
			<li key={index} className="component-item">
				<div className='component'>
				<Link to={detailUrl}><Laptop laptop={laptop}/></Link>
				</div>
		</li>
		)
		})

	return (
		<div className="component-list">
			{LaptopElements}
		</div>

	)
}

export default LaptopList;