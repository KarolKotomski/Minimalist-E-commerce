import React from "react";
import emptyPicture from "../images/cart/empty-cart.png";
import "../components/CartEmpty.css";
import { Link } from "react-router-dom";

const CartEmpty = () => {
	return (
		<div className='cart-empty'>
			<div className='container'>
				<div className='cart-empty-container'>
					<img src={emptyPicture} alt='' />
					<p>Your cart is empty</p>
					<Link to="/categories/all">
						<button>Continue Shopping</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default CartEmpty;
