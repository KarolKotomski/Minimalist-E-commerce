import React from 'react';
import pic8 from "../images/products/8.jpg";
import "./Trending.css";

const TrendingItem = () => {
	return (
		<div className='product-trending'>
			<div className='product-trending-header'>
				<img src={pic8}></img>
			</div>
      <div className='product-trending-details'>
        <p>description</p>
        <p className="item-trending-price">price</p>

      </div>
		</div>
	);
}

export default TrendingItem;