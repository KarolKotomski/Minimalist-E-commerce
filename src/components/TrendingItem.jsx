import React from "react";
import "./Trending.css";
import { Link } from "react-router-dom";
import { items } from "./AllData";

const TrendingItem = () => {
	const filteredItems = items.filter((item) => item.id >= 8);

	return (
		<>
			{filteredItems.map((item) => (
				<div className='product-trending' key={item.id}>
					<Link>
						<div className='product-trending-header'>
							<img src={item.img} alt=""></img>
						</div>
						<div className='product-trending-details'>
							<p>{item.description}</p>
							<p className='item-trending-price'>{item.price} $</p>
						</div>
					</Link>
				</div>
			))}
		</>
	);
};

export default TrendingItem;
