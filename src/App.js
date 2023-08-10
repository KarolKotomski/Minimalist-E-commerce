import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Categories from "./pages/Categories";

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='categories' element={<Categories />} />
				<Route path='productpage' element={<ProductPage />} />
			</Routes>
		</>
	);
};

export default App;
