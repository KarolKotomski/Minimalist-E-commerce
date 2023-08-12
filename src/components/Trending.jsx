import React from "react";
import "../components/Trending.css";
import arrowLeft from "../images/icons/arrow-left.png";
import arrowRight from "../images/icons/arrow-right.png";
import TrendingItem from "./TrendingItem";

const Trending = () => {
	const slideRight = () => {
		const slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft + 200;
	};

	const slideLeft = () => {
		const slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft - 200;
	};

	return (
		<div className='trending'>
			<div className='container'>
				<div className='title-btns'>
					<h3>Trending now:</h3>
					<div className='buttons'>
						<button onClick={slideLeft}>
							<img src={arrowLeft} alt='left-arrow' />
						</button>
						<button onClick={slideRight}>
							<img src={arrowRight} alt='right-arrow' />
						</button>
					</div>
				</div>
				<div className='trending-container' id='slider'>
					<TrendingItem />
					<TrendingItem />
					<TrendingItem />
					<TrendingItem />
					<TrendingItem />
					<TrendingItem />
					<TrendingItem />
					<TrendingItem />
					<TrendingItem />
					<TrendingItem />
					<TrendingItem />
					<TrendingItem />
					<TrendingItem />
				</div>
			</div>
		</div>
	);
};

export default Trending;
