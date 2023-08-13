import React from "react";
import { items } from "../AllData";
import { Link } from "react-router-dom";

const All = () => {
	return (
		<>
			<div className='proud-container container'>
				{items.map((item) => (
					<div className='product' key={item.id}>
						<Link>
							<div className='product-header'>
								<img src={item.img} alt=''></img>
							</div>
							<div className='product-details'>
								<p>{item.description}</p>
								<p className='item-price'>{item.price} $</p>
							</div>
						</Link>
					</div>
				))}
			</div>
		</>
	);
};

export default All;