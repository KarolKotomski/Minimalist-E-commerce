import React from "react";
import "../components/CategoriesMain.css";
import ProudItem from "../components/ProudItem";

const CategoriesMain = () => {
	return (
		<div className='categories-main'>
			<div className='proud'>
				<div className='container'>
					<div className='cat-main-container'>
						<div className="cat-main-header">
							<h1>select category:</h1>
                        </div>
                        <div className="filter-btns">
                            <button>all products</button>
                            <button>chairs</button>
                            <button>electronics</button>
                            <button>furnitures</button>
                            <button>kitchen</button>
                            <button>lamps</button>
                            <button>skin care</button>
                        </div>
					</div>
					<div className='cat-container'>
						<ProudItem />
						<ProudItem />
						<ProudItem />
						<ProudItem />
						<ProudItem />
						<ProudItem />
						<ProudItem />
						<ProudItem />
						<ProudItem />
						<ProudItem />
						<ProudItem />
						<ProudItem />
						<ProudItem />
						<ProudItem />
						<ProudItem />
						<ProudItem />
						<ProudItem />
						<ProudItem />
						<ProudItem />
						<ProudItem />
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoriesMain;
