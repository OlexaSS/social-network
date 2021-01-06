import React from "react";
import './reset.css';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";

const App = () => {
	return (
		<div className="app-wrapper">
			<Header />
			<Navbar />
			<div className="wrapper__content">
				<Dialogs />
				{/* <Profile /> */}
			</div>
			

		</div>
	);
}

export default App;

