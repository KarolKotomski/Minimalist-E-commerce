import React from "react";
import "../components/ProductPage.css";
import Trending from "../components/Trending";
import Footer from "../components/Footer";
import pic19 from "../images/products/19.jpg";

const ProductPage = () => {
	return (
		<div className='product-page'>
			<div className='container'>
				<div className='product-page-container'>
					<div className='product-div'>
						<div className='product-left-side'>
							<div className='big-img'>
								<img src={pic19} alt='comfy chair' />
							</div>
							<div className='small-imgs'>
								<img src={pic19} alt='comfy chair1' />
								<img src={pic19} alt='comfy chair2' />
								<img src={pic19} alt='comfy chair3' />
							</div>
						</div>
						<div className='product-right-side'>
							<h3 className='title-header'>TITLE</h3>
							<p className='product-spec'>description</p>
							<div className='product-quant'>
								<div className="quant-container">
									<p className='quant-price-text'>Quantity</p>
								</div>

								<div className='quantity-btns'>
									<button>-</button>
									<p className='count-number'>0</p>
									<button>+</button>
								</div>
								<div className="price-container">
									<p className='quant-price-text'>900$</p>
								</div>
							</div>
							<div className='shopping-buttons'>
								<button className='atc-button'>add to cart</button>
								<button className='buy-btn'>buy now</button>
							</div>
						</div>
					</div>
					<div className='specifications'>
						<div className='spec'>
							<p className='spec-type'>Texture:</p>
							<p className='spec-text'>text</p>
						</div>
						<div className='spec'>
							<p className='spec-type'>Weight:</p>
							<p className='spec-text'>text</p>
						</div>
						<div className='spec'>
							<p className='spec-type'>Size:</p>
							<p className='spec-text'>text</p>
						</div>
					</div>
				</div>
			</div>
			<Trending />
			<Footer />
		</div>
	);
};

export default ProductPage;
