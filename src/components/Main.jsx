import React from "react";
import "./Main.css";
import home1 from "../images/main-img/home-img-1.jpg";
import home2 from "../images/main-img/home-img-2.jpg";
import home3 from "../images/main-img/home-img-3.jpg";
import home4 from "../images/main-img/home-img-4.jpg";
import { Link } from "react-router-dom";

const Main = () => {
	return (
		<div className='main'>
			<div className='container'>
				<div className='main-container'>
					<div className='element1 featured'>
						<Link
							to='categories/furnitures'
							onClick={() => window.scrollTo(0, 0)}>
							<div className='overlay'></div>
							<img src={home1} alt="furnitures"></img>
							<p className='main-description'>Live comfortably</p>
						</Link>
					</div>
					<div className='element2 featured'>
						<Link
							to='categories/skin-care'
							onClick={() => window.scrollTo(0, 0)}>
							<div className='overlay'></div>
							<img src={home2} alt="skin-care"></img>
							<p className='main-description'>Skincare</p>
						</Link>
					</div>
					<div className='element3 featured'>
						<Link
							to='categories/kitchen'
							onClick={() => window.scrollTo(0, 0)}>
							<div className='overlay'></div>
							<img src={home3} alt="kitchen"></img>
							<p className='main-description'>Kitchen</p>
						</Link>
					</div>
					<div className='element4 featured'>
						<Link
							to='categories/electronics'
							onClick={() => window.scrollTo(0, 0)}>
							<div className='overlay'></div>
							<img src={home4} alt="electronics"></img>
							<p className='main-description'>Electronics</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
