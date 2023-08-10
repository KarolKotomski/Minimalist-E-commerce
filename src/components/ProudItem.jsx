import React from "react";
import "./Proud.css";
import pic1 from "../images/products/1.jpg";
import { Link } from "react-router-dom";

const ProudItem = () => {
	return (
		<Link to="/">
			<div className='product'>
				<div className='product-header'>
					<img src={pic1}></img>
				</div>
				<div className='product-details'>
					<p>description</p>
					<p className='item-price'>price</p>
				</div>
			</div>
		</Link>
	);
};

export default ProudItem;
