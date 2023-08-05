import React from "react";
import "./Navbar.css";
import logo from "../images/main-img/s-logo.png";

const Navbar = () => {
	return (
		<nav className="navbar">
			<div className='container'>
				<div className='navbar-container'>
					<div className='logo'>
						<a href=''>
							<img src={logo} alt='logo' className='logo-img'></img>
						</a>
					</div>
					<div className='nav-links'>
						<a href=''>categories</a>
						<a href=''>product page</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;