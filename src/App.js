import React from "react";
import './reset.css';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import Music from "./components/music/Music";
import News from "./components/news/News";
import Settings from "./components/settings/Settings";

const App = (props) => {

	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar />
				<div className="wrapper__content">
					{/* <Route path='/profile' component={Profile} />*/} {/*Route следит за урлом.
					если он видит совпадение урла, то подгружает соответствующую компоненту
					*/}
					{/* <Route path='/dialogs' component={Dialogs} /> */}
					<Route path='/news' component={News} />
					<Route path='/music' component={Music} />
					<Route path='/settings' component={Settings} />

					<Route path='/profile' render={ () => <Profile posts={props.posts}/> } /> {/*Route следит за урлом.
					если он видит совпадение урла, то подгружает соответствующую компоненту
					*/}
					<Route path='/dialogs' render={ () => <Dialogs dialogs={props.dialogs} messages={props.messages}/> } />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;

