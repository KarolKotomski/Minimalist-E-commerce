import React from "react";
import "./Banner.css";
import banner1 from "../images/banner/banner1.jpg";

const Banner = () => {
	return (
		<div className='banner'>
			<div className='container'>
				<div className='banner-container'>
					<div className='text-side'>
						<div className='text'>
							<h2>Creative harmonious living</h2>
							<button>shop now</button>
						</div>
					</div>
					<div className='img-side'>
						<img src={banner1}></img>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
