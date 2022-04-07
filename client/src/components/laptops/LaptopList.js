import React from 'react';
import Laptop from './Laptop.js';

const LaptopList = ({laptops}) => {

    if(laptops.lenght === 0){
		return <p>Loading...</p>
	}

    const LaptopElements = laptops.map((laptop, index) => {
        
			return (
			<li key={index} className="component-item">
				<div className='component'>
				<Laptop laptop={laptop}/>
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