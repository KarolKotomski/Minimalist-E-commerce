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
							<img src={cart} className='cart-icon' alt=''></img>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
