import React from "react";
import "./Navbar.css";
import logo from "../images/main-img/s-logo.png";
import cart from "../images/icons/cart.png";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className='navbar'>
			<div className='container'>
				<div className='navbar-container'>
					<div className='logo'>
						<Link to='/'>
							<img src={logo} alt='logotype'></img>
							<h1>online shop</h1>
						</Link>
					</div>
					<div className='nav-links'>
						<Link to='/categories'>categories</Link>
						<Link to='/productpage'>product page</Link>
						<Link to='/cart'>
							<img src={cart} className='cart-icon'></img>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
