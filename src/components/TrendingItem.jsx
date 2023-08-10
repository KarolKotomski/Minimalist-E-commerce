import React from "react";
import pic8 from "../images/products/8.jpg";
import "./Trending.css";
import { Link } from "react-router-dom";

const TrendingItem = () => {
	return (
		<Link>
			<div className='product-trending'>
				<div className='product-trending-header'>
					<img src={pic8}></img>
				</div>
				<div className='product-trending-details'>
					<p>description</p>
					<p className='item-trending-price'>price</p>
				</div>
			</div>
		</Link>
	);
};

export default TrendingItem;
