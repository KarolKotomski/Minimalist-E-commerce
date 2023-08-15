import React from "react";
import CartItem from "./CartItem";

const Cart = () => {
    // Jeśli koszyk jest pusty to:
    // return <CartEmpty />

//Jeśli nie jest pusty to:
	return (
		<div className='main'>
			<div className='container'>
                <div className='main-container'>
                    <CartItem />
                </div>
			</div>
		</div>
	);
};

export default Cart;
