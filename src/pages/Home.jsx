import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Proud from "../components/Proud";
import Banner from "../components/Banner";
import Trending from "../components/Trending";
import Footer from "../components/Footer";

const Home = () => {
	return (
		<>
			<div>
				<Navbar />
			</div>
			<div>
				<Main />
			</div>
			<div>
				<Proud />
			</div>
			<div>
				<Banner />
			</div>
			<div>
				<Trending />
			</div>
			<div>
				<Footer />
			</div>
		</>
	);
};

export default Home;
