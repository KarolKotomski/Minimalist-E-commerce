import React, { useContext, useEffect, useState } from "react";
import "../components/ProductPage.css";
import { items } from "./AllData";
import { useParams } from "react-router-dom";
import Trending from "./Trending";
import { CartContext } from "../context/CartContext";

const ProductPage = () => {
	const { addToCart, cartItems } = useContext(CartContext);

	const { id } = useParams();
	const item = items.filter((item) => item.id === Number(id));

	const [image, setImage] = useState(item[0].img);

	const changeImage = (e) => {
		setImage(e.target.src);
	};

	const cartItemsAmount = cartItems[id];

	useEffect(() => {
		setImage(item[0].img);
	}, [id]);

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
									<img src={item[0].img} alt='item' onMouseOver={changeImage} />
									<img
										src={item[0].otherImgs[0]}
										alt='picture1'
										onMouseOver={changeImage}
									/>
									<img
										src={item[0].otherImgs[1]}
										alt='picture2'
										onMouseOver={changeImage}
									/>
								</div>
							</div>
							<div className='product-right-side'>
								<h3 className='title-header'>{item[0].description}</h3>
								<p className='product-spec'>{item[0].specs}</p>
								<p className='product-price'>$ {item[0].price}</p>

								<div className='shopping-buttons'>
									<button className='atc-button' onClick={() => addToCart(id)}>
										add to cart{" "}
										{cartItemsAmount > 0 && <>({cartItemsAmount})</>}
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
			<Trending />
		</>
	);
};

export default ProductPage;
