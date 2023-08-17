import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer-links'>
				<Link>about us</Link>
				<Link>FAQs</Link>
				<Link >career</Link>
				<Link>contact us</Link>
			</div>
			<div className='design'>
				<Link to="https://github.com/Abderraouf-Rahmani">Design by Abderraouf</Link>
			</div>
		</footer>
	);
};

export default Footer;
