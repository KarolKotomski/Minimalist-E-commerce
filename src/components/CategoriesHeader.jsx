import React from "react";
import "../components/CategoriesHeader.css";
import { NavLink } from "react-router-dom";

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
							<NavLink to='all'>
								<button>all products</button>
							</NavLink>
							<NavLink to='chairs'>
								<button>chairs</button>
							</NavLink>
							<NavLink to='electronics'>
								<button>electronics</button>
							</NavLink>
							<NavLink to='furnitures'>
								<button>furnitures</button>
							</NavLink>
							<NavLink to='kitchen'>
								<button>kitchen</button>
							</NavLink>
							<NavLink to='lamps'>
								<button>lamps</button>
							</NavLink>
							<NavLink to='skin-care'>
								<button>skin care</button>
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoriesHeader;
