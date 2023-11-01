import React from "react";
import "./Proud.css";
import { Link } from "react-router-dom";
import { items } from "./AllData";

const ProudItem = () => {
	const filteredItems = items.filter((item) => item.id <= 8);

	return (
		<>
			{filteredItems.map((item) => (
				<div className='product' key={item.id}>
					<Link
						onClick={() => window.scrollTo(0, 0)}
						to={`/product/${item.id}`}>
						<div className='product-header'>
							<img src={item.img} alt='item'></img>
						</div>
						<div className='product-details'>
							<p>{item.description}</p>
							<p className='item-price'>$ {item.price}</p>
						</div>
					</Link>
				</div>
			))}
		</>
	);
};

export default ProudItem;
