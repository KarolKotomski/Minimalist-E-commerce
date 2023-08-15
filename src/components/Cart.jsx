import React from "react";
import CartItem from "./CartItem";
import "../components/Cart.css";


const Cart = () => {
	// Jeśli koszyk jest pusty to:
	// return <CartEmpty />

	//Jeśli nie jest pusty to:
	return (
		<div className='cart'>
			<div className='container'>
                <div className='cart-container'>
                    <div className="cart-header">
                        <h2>Your cart items:</h2>
                    </div>
					<CartItem />
					<CartItem />
					<div className='cart-summary'>
						<div className='sum-left'>
							<p>subtotal:</p>
							<p className="price">99999 $</p>
						</div>
						<div className='sum-right'>
							<button className="cart-buy-btn">buy now</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
