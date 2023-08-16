import React, { createContext, useState } from "react";
import { items } from "../components/AllData";

export const CartContext = createContext();

const getDefaultCart = () => {
	const cart = {};
	for (let i = 1; i < items.length + 1; i++) {
		cart[i] = 0;
	}
	return cart;
};

export const CartContextProvider = (props) => {
	const [cartItems, setCartItems] = useState(getDefaultCart());

	const addToCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
	};

	const removeFromCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
	};

	const contextValue = { cartItems, addToCart, removeFromCart };

	return (
		<CartContext.Provider value={contextValue}>
			{props.children}
		</CartContext.Provider>
	);
};
