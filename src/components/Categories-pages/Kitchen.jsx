import React from "react";
import { items } from "../AllData";
import { Link } from "react-router-dom";

const Kitchen = () => {
	const filteredItems = items.filter((item) => item.category === "kitchen");

	return (
		<>
			<div className='proud-container container'>
				{filteredItems.map((item) => (
					<div className='product' key={item.id}>
						<Link
							onClick={() => window.scrollTo(0, 0)}
							to={`/product/${item.id}`}>
							<div className='product-header'>
								<img src={item.img} alt=''></img>
							</div>
							<div className='product-details'>
								<p>{item.description}</p>
								<p className='item-price'>$ {item.price}</p>
							</div>
						</Link>
					</div>
				))}
			</div>
		</>
	);
};

export default Kitchen;
