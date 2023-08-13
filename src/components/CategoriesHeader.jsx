import React from "react";
import "../components/CategoriesHeader.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const CategoriesHeader = () => {
	return (
		<div className='categories-main'>
			<div className='proud'>
				<div className='container'>
					<div className='cat-main-container'>
						<div className='cat-main-header'>
							<h1>select category:</h1>
						</div>
						<div className='filter-btns'>
							<Link to='all'>
								<button>all products</button>
							</Link>
							<Link to='chairs'>
								<button>chairs</button>
							</Link>
							<Link to='electronics'>
								<button>electronics</button>
							</Link>
							<Link to='furnitures'>
								<button>furnitures</button>
							</Link>
							<Link to='kitchen'>
								<button>kitchen</button>
							</Link>
							<Link to='lamps'>
								<button>lamps</button>
							</Link>
							<Link to='skin-care'>
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
