import React from "react";
import ProductPageMain from "../components/ProductPageMain";
import Trending from "../components/Trending";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const ProductPage = () => {
	return (
		<>
			<ProductPageMain />

			<Trending />

			<Newsletter />

			<Footer />
		</>
	);
};

export default ProductPage;
