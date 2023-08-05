import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
	return (
		<div className='newsletter'>
			<div className='container'>
				<div className='newsletter-container'>
					<h2>Subscribe to the Newsletter!</h2>
					<form>
						<input type="email" placeholder="your@email.com" />
						<button type="submit">Subscribe</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Newsletter;
