import React from 'react';
import CategoriesHeader from "../CategoriesHeader";
import ChairsFiltered from './ChairsFiltered';
import Newsletter from '../Newsletter';
import Footer from '../Footer';

const Chairs = () => {
	return (
		<>
			<CategoriesHeader />

			<ChairsFiltered />

			<Newsletter />

			<Footer />

			
		</>
	);
};

export default Chairs