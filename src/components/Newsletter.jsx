import React from "react";
import "./Newsletter.css";
import { toast } from "react-toastify";
import { useState } from "react";

const Newsletter = () => {
	const [inputValue, setInputValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (inputValue.trim() === "") {
			toast.error("Provide correct e-mail address!");
			return;
		}

		toast.success("Subscription success!");
		setInputValue("");
	};

	return (
		<div className='newsletter'>
			<h2>Subscribe to the Newsletter!</h2>
			<form onSubmit={handleSubmit}>
				<input
					type='email'
					minLength={5}
					maxLength={30}
					placeholder='your@email.com'
					onChange={(e) => setInputValue(e.target.value)}
				/>
				<button type='submit'>subscribe</button>
			</form>
		</div>
	);
};

export default Newsletter;
