import React from "react";
import "./Navbar.css";
import logo from "../images/main-img/s-logo.png";
import cart from "../images/icons/cart.png";

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='container'>
				<div className='navbar-container'>
					<div className='logo'>
						<a href=''>
							<img src={logo} alt='logotype'></img>
							<h1>online shop</h1>
						</a>
					</div>
					<div className='nav-links'>
						<a href=''>categories</a>
						<a href=''>product page</a>
						<a href=''>
							<img src={cart} className='cart-icon'></img>
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
