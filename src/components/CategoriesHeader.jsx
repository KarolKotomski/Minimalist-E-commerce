import React from "react";
import "../components/CategoriesHeader.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const CategoriesHeader = () => {
	const [title, setTitle] = useState("All Products");

	const handleClick = (e) => {
		setTitle(e);
	};

	return (
		<div className='categories-main'>
			<div className='proud'>
				<div className='container'>
					<div className='cat-main-container'>
						<div className='cat-main-header'>
							<h1>{title}</h1>
						</div>
						<div className='filter-btns'>
							<Link to='all' onClick={() => handleClick("all products")}>
								<button>all products</button>
							</Link>
							<Link to='chairs' onClick={() => handleClick("chairs")}>
								<button>chairs</button>
							</Link>
							<Link to='electronics' onClick={() => handleClick("electronics")}>
								<button>electronics</button>
							</Link>
							<Link to='furnitures' onClick={() => handleClick("furnitures")}>
								<button>furnitures</button>
							</Link>
							<Link to='kitchen' onClick={() => handleClick("kitchen")}>
								<button>kitchen</button>
							</Link>
							<Link to='lamps' onClick={() => handleClick("lamps")}>
								<button>lamps</button>
							</Link>
							<Link to='skin-care' onClick={() => handleClick("skin care")}>
								<button>skin care</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoriesHeader;
