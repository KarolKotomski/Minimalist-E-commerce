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
						<h3>TITLE</h3>
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
							<p className='product-spec'>description</p>
							<div className='product-quant'>
								<p>Quantity</p>
								<div className='quantity-btns'>
									<button>-</button>
									<p>number</p>
									<button>+</button>
								</div>
								<p className='product-price'>price</p>
							</div>
							<div className='shoping-buttons'>
								<button className='atc-button'>add to cart</button>
								<button className='buy-btn'>buy now</button>
							</div>
						</div>
					</div>
					<div className='specifications'>
						<div className='spec'>
							<p>Texture:</p>
							<p>texture text</p>
						</div>
						<div className='spec'>
							<p>Texture:</p>
							<p>texture text</p>
						</div>
						<div className='spec'>
							<p>Texture:</p>
							<p>texture text</p>
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
