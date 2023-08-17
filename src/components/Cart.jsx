import React, { useContext } from "react";
import CartItem from "./CartItem";
import CartEmpty from "../components/CartEmpty";
import "../components/Cart.css";
import { CartContext } from "../context/CartContext";
import { items } from "../components/AllData";

const Cart = () => {
	const { cartItems, getTotalCartAmount } = useContext(CartContext);

	const totalAmount = getTotalCartAmount();

	return (
		<div className='cart'>
			<div className='container'>
				<div className='cart-container'>
					{totalAmount > 0 ? (
						<>
							<div className='cart-header'>
								<h2>Your cart items:</h2>
							</div>
							<>
								{items.map((item) => {
									if (cartItems[item.id] !== 0) {
										return <CartItem data={item} key={item.id} />;
									}
								})}
							</>
							<div className='cart-summary'>
								<div className='summ-left'>
									<button className='cart-buy-btn'>buy now</button>
								</div>
								<div className='summ-right'>
									<p>total:</p>
									<p className='price'>$ {totalAmount} </p>
								</div>
							</div>
						</>
					) : (
						<CartEmpty />
					)}
				</div>
			</div>
		</div>
	);
};

export default Cart;
