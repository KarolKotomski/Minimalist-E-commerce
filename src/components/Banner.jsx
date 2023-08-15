import React from "react";
import "./Banner.css";
import banner1 from "../images/banner/banner1.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
	return (
		<div className='banner'>
			<div className='container'>
				<div className='banner-container'>
					<div className='text-side'>
						<div className='text'>
							<h2>Creative harmonious living</h2>
							<Link to="categories/all" onClick={() => window.scrollTo(0, 0)}>
								<button>shop now</button>
							</Link>
						</div>
					</div>
					<div className='img-side'>
						<img src={banner1} alt=""></img>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
