import React, { createContext, useEffect, useState } from "react";
import { items } from "../components/AllData";
import { toast } from "react-toastify";

export const CartContext = createContext();

//default cart
const getDefaultCart = () => {
	const cart = {};
	for (let i = 1; i < items.length + 1; i++) {
		cart[i] = 0;
	}
	return cart;
};

//local storage
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));


//context provider
export const CartContextProvider = (props) => {
	const [cartItems, setCartItems] = useState(cartFromLocalStorage);

	useEffect(() => {
		if (!cartItems) {
			setCartItems(getDefaultCart());
		}
		const json = JSON.stringify(cartItems);
		localStorage.setItem("cart", json);
	}, [cartItems]);

	
	//cart funcionality
	const getTotalCartAmount = () => {
		let totalAmount = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				let itemInfo = items.find((product) => product.id === Number(item));
				totalAmount += cartItems[item] * itemInfo.price;
			}
		}
		return totalAmount;
	};

	const addToCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
	};

	const removeFromCart = (itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
	};

	const updateCartItemCount = (newAmount, itemId) => {
		if (isNaN(newAmount)) {
			setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
			toast.warn("Provided value is incorrect!");
		} else {
			setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
		}
	};


	// exported context values
	const contextValue = {
		cartItems,
		addToCart,
		removeFromCart,
		updateCartItemCount,
		getTotalCartAmount,
	};

	return (
		<CartContext.Provider value={contextValue}>
			{props.children}
		</CartContext.Provider>
	);
};
