import React, { useContext } from "react";
import "../components/CartItem.css";
import { CartContext } from "../context/CartContext";
import { BsTrash3 } from "react-icons/bs";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const CartItem = (props) => {
	const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
		useContext(CartContext);
	const { id, img, description, price } = props.data;

	return (
		<div className='ci-container'>
			<div className='ci-left'>
				<Link onClick={() => window.scrollTo(0, 0)} to={`/product/${id}`}>
					<img src={img} alt='product' />
				</Link>
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
						<button
							onClick={() => (cartItems[id] > 1 ? removeFromCart(id) : null)}>
							-
						</button>
						<input
							className='counter-input'
							maxLength='2'
							value={cartItems[id]}
							onChange={(e) =>
								Number(e.target.value) > 0
									? updateCartItemCount(Number(e.target.value), id)
									: updateCartItemCount(1, id)
							}
						/>
						<button onClick={() => (cartItems[id] < 99 ? addToCart(id) : null)}>+</button>
					</div>
					<BsTrash3
						className='ci-remove'
						onClick={() => {
							updateCartItemCount(0, id);
							toast.info("Item removed from the cart");
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
