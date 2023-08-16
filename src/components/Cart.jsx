import React, { useContext } from "react";
import CartItem from "./CartItem";
import "../components/Cart.css";
import { CartContext } from "../context/CartContext";
import { items } from "../components/AllData";

const Cart = () => {
	// Jeśli koszyk jest pusty to:
	// return <CartEmpty />

	//Jeśli koszyk nie jest pusty to:
	const { cartItems } = useContext(CartContext);

	return (
		<div className='cart'>
			<div className='container'>
				<div className='cart-container'>
					<div className='cart-header'>
						<h2>Your cart items:</h2>
					</div>
					<div>
						{items.map((item) => {
							if (cartItems[item.id] !== 0) {
								return <CartItem key={item.id} />;
							}
						})}
					</div>
					<div className='cart-summary'>
						<div className='sum-right'>
							<button className='cart-buy-btn'>buy now</button>
						</div>
						<div className='sum-left'>
							<p>subtotal:</p>
							<p className='price'>$ 99999</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
