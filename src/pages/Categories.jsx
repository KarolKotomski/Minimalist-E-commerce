import React from "react";
import CategoriesHeader from "../components/CategoriesHeader";
import CategoriesItem from "../components/CategoriesItem";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Categories = () => {
	return (
		<>
			<CategoriesHeader />

			<CategoriesItem />

			<Newsletter />

			<Footer />

			<Outlet />
		</>
	);
};

export default Categories;
