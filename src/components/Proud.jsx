import React from "react";
import "./Proud.css";
import ProductItem from "./ProductItem";

const Proud = () => {
	return (
		<div className='proud'>
			<h2 className="container proud-h2">Products we are proud of:</h2>
			<div className='container'>
				<div className='proud-container'>
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
					<ProductItem />
				</div>
			</div>
		</div>
	);
};

export default Proud;
