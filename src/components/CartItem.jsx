import React, { useContext } from "react";
import "../components/CartItem.css";
import { CartContext } from "../context/CartContext";

const CartItem = (props) => {
	const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
		useContext(CartContext);
	const { id, img, description, price } = props.data;



	return (
		<div className='ci-container'>
			<div className='ci-left'>
				<img src={img} alt='' />
			</div>
			<div className='ci-right'>
				<div className='ci-right-top'>
					<p>{description}</p>
					<div className='ci-price-container'>
						<p className='ci-price'>$ {price * cartItems[id]} </p>
						<>
							{cartItems[id] > 1 ? (
								<p className='ci-unit-price'>($ {price} / unit)</p>
							) : null}
						</>
					</div>
				</div>

				<div className='ci-right-bottom'>
					<div className='ci-counter-panel'>
						<button onClick={() => removeFromCart(id)}>-</button>
						<input
							className='counter-input'
							value={cartItems[id]}
							onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
						/>
						<button onClick={() => addToCart(id)}>+</button>
					</div>
					<button className='ci-remove' onClick={()=> updateCartItemCount(0, id)}>remove item</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
