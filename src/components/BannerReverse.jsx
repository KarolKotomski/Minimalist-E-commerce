import React from "react";
import "./Banner.css";
import banner2 from "../images/banner/banner2.jpg";

const BannerReverse = () => {
	return (
		<div className='banner'>
			<div className='container'>
				<div className='banner-reverse-container'>
					<div className='text-side'>
						<div className='text'>
							<h2>Comfortable and elegant living</h2>
							<button>shop now</button>
						</div>
					</div>
					<div className='img-side'>
						<img src={banner2}></img>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BannerReverse;
