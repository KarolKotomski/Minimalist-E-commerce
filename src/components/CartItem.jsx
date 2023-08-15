import React from "react";
import "../components/CartItem.css";
import { items } from "./AllData";

const CartItem = () => {
	return (
		<div className="ci-container">
			<div className="ci-left">
				<img src={items[0].img} alt='' />
			</div>
			<div className="ci-right">
				<div className="ci-right-top">
					<p>{items[0].description}</p>
					<p className="ci-price">$ {items[0].price}</p>
				</div>
				<div className="ci-right-bottom">
					<div className="ci-counter-panel">
						<button>-</button>
						<p>1</p>
						<button>+</button>
					</div>
					<button className="ci-remove">remove item</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
