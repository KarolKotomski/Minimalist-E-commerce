import React from "react";
import "./Proud.css";
import ProudItem from "./ProudItem";

const Proud = () => {
	return (
		<div className='proud'>
			<h2 className="container proud-h2">Products we are proud of:</h2>
			<div className='container'>
				<div className='proud-container'>
					<ProudItem />
					<ProudItem />
					<ProudItem />
					<ProudItem />
					<ProudItem />
					<ProudItem />
					<ProudItem />
					<ProudItem />
				</div>
			</div>
		</div>
	);
};

export default Proud;
