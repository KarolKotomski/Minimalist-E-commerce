import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import All from "./components/Categories-pages/All";
import Chairs from "./components/Categories-pages/Chairs";
import Electronics from "./components/Categories-pages/Electronics";
import Furnitures from "./components/Categories-pages/Furnitures";
import Kitchen from "./components/Categories-pages/Kitchen";
import Lamps from "./components/Categories-pages/Lamps";
import SkinCare from "./components/Categories-pages/SkinCare";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";
import NoMatch from "./components/NoMatch";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContextProvider } from "./context/CartContext";

const App = () => {


	return (
		<>
			<CartContextProvider>
				<BrowserRouter>
					<Navbar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='categories' element={<Categories />}>
							<Route path='all' element={<All />} />
							<Route path='chairs' element={<Chairs />} />
							<Route path='electronics' element={<Electronics />} />
							<Route path='furnitures' element={<Furnitures />} />
							<Route path='kitchen' element={<Kitchen />} />
							<Route path='lamps' element={<Lamps />} />
							<Route path='skin-care' element={<SkinCare />} />
						</Route>
						<Route path='cart' element={<Cart />} />
						<Route path='product/:id' element={<ProductPage />} />
						<Route path='*' element={<NoMatch />} />
					</Routes>
					<Newsletter />
					<Footer />
					<ToastContainer
						position='top-center'
						autoClose={3000}
						hideProgressBar={false}
						newestOnTop={false}
						closeOnClick
						rtl={false}
						pauseOnFocusLoss={false}
						draggable
						pauseOnHover={false}
						theme='colored'
					/>
				</BrowserRouter>
			</CartContextProvider>
		</>
	);
};

export default App;
