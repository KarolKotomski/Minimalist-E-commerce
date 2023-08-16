import React, { useState } from "react";
import "../components/CartItem.css";
import { items } from "./AllData";

const CartItem = () => {
	const [quantity, setQuantity] = useState(1);

	const increase = () => {
		if (quantity >= 0) {
			setQuantity(quantity + 1);
		}
	};

	const decrease = () => {
		if (quantity > 0) {
			setQuantity(quantity - 1);
		}
    };
    
    const calcPrice = (quantity) => {
        return quantity * items[0].price;
    }

	return (
		<div className='ci-container'>
			<div className='ci-left'>
				<img src={items[0].img} alt='' />
			</div>
			<div className='ci-right'>
				<div className='ci-right-top'>
					<p>{items[0].description}</p>
                    <p className='ci-price'>$ {calcPrice(quantity)}</p>
				</div>
				<div className='ci-right-bottom'>
					<div className='ci-counter-panel'>
						<button onClick={decrease}>-</button>
						<p>{quantity}</p>
						<button onClick={increase}>+</button>
					</div>
					<button className='ci-remove'>remove item</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
