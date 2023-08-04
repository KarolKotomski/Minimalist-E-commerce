import React from "react";
import "./Main.css";
import home1 from "../images/header/home-img-1.jpg";
import home2 from "../images/header/home-img-2.jpg";
import home3 from "../images/header/home-img-3.jpg";
import home4 from "../images/header/home-img-4.jpg";

const Main = () => {
	return (
		<div className='main'>
			<div className='container'>
				<div className='main-container'>
					<div className='element1 featured'>
						<a href=''>
							<div className='overlay'></div>
							<img src={home1}></img>
							<p className='main-description'>Live comfortably</p>
						</a>
					</div>
					<div className='element2 featured'>
						<a href=''>
							<div className='overlay'></div>
							<img src={home2}></img>
							<p className='main-description'>Skincare</p>
						</a>
					</div>
					<div className='element3 featured'>
						<a href=''>
							<div className='overlay'></div>
							<img src={home3}></img>
							<p className='main-description'>Kitchen</p>
						</a>
					</div>
					<div className='element4 featured'>
						<a href=''>
							<div className='overlay'></div>
							<img src={home4}></img>
							<p className='main-description'>Electronics</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
