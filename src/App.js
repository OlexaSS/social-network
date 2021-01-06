import React from "react";
import './reset.css';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />
				<div className="wrapper__content">
					<Route path='/dialogs' component={Dialogs} />
					<Route path='/profile' component={Profile} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;

