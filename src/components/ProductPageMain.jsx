import React, { useState } from "react";
import "../components/ProductPage.css";
import { items } from "../components/AllData";
import { useParams } from "react-router-dom";

const ProductPageMain = () => {
	const { id } = useParams();
	const item = items.filter((item) => item.id === Number(id));

	const [image, setImage] = useState(item[0].img);
	const [quantity, setQuantity] = useState(1);

	const changeImage = (e) => {
		setImage(e.target.src);
	};

	const decrease = () => {
		if (quantity > 0) {
			setQuantity(quantity - 1);
		}
	};

	const increase = () => {
		if (quantity >= 0) {
			setQuantity(quantity + 1);
		}
	};

	const calcPrice = (quantity) => {
		return quantity * item[0].price;
	};

	return (
		<>
			<div className='product-page'>
				<div className='container'>
					<div className='product-page-container'>
						<div className='product-div'>
							<div className='product-left-side'>
								<div className='big-img'>
									<img src={image} alt='' />
								</div>
								<div className='small-imgs'>
									<img src={item[0].img} alt='' onMouseOver={changeImage} />
									<img
										src={item[0].otherImgs[0]}
										alt=''
										onMouseOver={changeImage}
									/>
									<img
										src={item[0].otherImgs[1]}
										alt=''
										onMouseOver={changeImage}
									/>
								</div>
							</div>
							<div className='product-right-side'>
								<h3 className='title-header'>{item[0].description}</h3>
								<p className='product-spec'>{item[0].specs}</p>
								<div className='product-quant'>
									<div className='quant-container'>
										<p className='quant-price-text'>Quantity</p>
									</div>

									<div className='quantity-btns'>
										<button onClick={decrease}>-</button>
										<p className='count-number'>{quantity}</p>
										<button onClick={increase}>+</button>
									</div>
									<div className='price-container'>
										<p className='quant-price-text'>$ {calcPrice(quantity)}</p>
									</div>
								</div>
								<div className='shopping-buttons'>
									<button
										className='atc-button'>
										add to cart
									</button>
									<button className='buy-btn'>buy now</button>
								</div>
							</div>
						</div>
						<div className='specifications'>
							<div className='spec'>
								<p className='spec-type'>Texture:</p>
								<p className='spec-text'>{item[0].texture}</p>
							</div>
							<div className='spec'>
								<p className='spec-type'>Weight:</p>
								<p className='spec-text'>{item[0].weight}</p>
							</div>
							<div className='spec'>
								<p className='spec-type'>Size:</p>
								<p className='spec-text'>{item[0].size}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProductPageMain;
