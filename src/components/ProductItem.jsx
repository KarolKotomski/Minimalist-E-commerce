import React from "react";
import "./Proud.css";
import pic1 from "../images/products/1.jpg"


const ProductItem = () => {
	return (
		<div className='product'>
			<div className='product-header'>
				<img src={pic1}></img>
			</div>
      <div className='product-details'>
        <p>description</p>
        <p className="item-price">price</p>

      </div>
		</div>
	);
};

export default ProductItem;
