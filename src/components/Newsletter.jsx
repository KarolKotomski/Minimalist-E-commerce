import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
	return (
		<div className='newsletter'>
			<h2>Subscribe to the Newsletter!</h2>
			<form>
				<input type='email' placeholder='your@email.com' />
				<button type='submit'>Subscribe</button>
			</form>
		</div>
	);
};

export default Newsletter;
