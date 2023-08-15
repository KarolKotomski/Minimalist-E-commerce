import React from "react";
import "../components/Cart.css";

const CartItem = () => {
	return (
		<div className="ci-container">
			<div className="ci-left">
				<img src='' alt='' />
			</div>
			<div className="ci-right">
				<div className="ci-right-top">
					<p>title</p>
					<p>price</p>
				</div>
				<div className="ci-right-bottom">
					<div className="ci-counter-panel">
						<button>-</button>
						<p>1</p>
						<button>+</button>
					</div>
					<button className="ci-remove">remove</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
