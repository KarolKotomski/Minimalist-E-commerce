import React from "react";
import Categories from "./pages/Categories";
import Navbar from "./components/Navbar";
import ProductPage from "./pages/ProductPage";
import Home from "./pages/Home";

const App = () => {
	return (
		<>
			<Navbar />
			<Categories />
		</>
	);
};

export default App;
