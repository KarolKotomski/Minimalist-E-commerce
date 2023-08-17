import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./Navbar.css";
import logo from "../images/main-img/s-logo.png";
import { Link } from "react-router-dom";
import { TfiShoppingCart, TfiShoppingCartFull } from "react-icons/tfi";

const Navbar = () => {
	const { getTotalCartAmount } = useContext(CartContext);

	const totalAmount = getTotalCartAmount();

	return (
		<nav className='navbar'>
			<div className='container'>
				<div className='navbar-container'>
					<div className='logo'>
						<Link to='/' onClick={() => window.scrollTo(0, 0)}>
							<img src={logo} alt='logotype'></img>
							<h1>online shop</h1>
						</Link>
					</div>
					<div className='nav-links'>
						<Link to='/categories/all' onClick={() => window.scrollTo(0, 0)}>
							categories
						</Link>
						<Link to='/cart' onClick={() => window.scrollTo(0, 0)}>
							<>
								{totalAmount === 0 ? (
									<TfiShoppingCart className='cart-icon-empty' />
								) : (
									<TfiShoppingCartFull className='cart-icon-full' />
								)}
							</>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
