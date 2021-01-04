import React from "react";
import './reset.css';
import './App.css';
import image from './main-img.jpg';


const App = () => {
	return (
		<div className="app-wrapper">
			<header className="header">
				<div className="logo-wrapper">Logo</div>
				<div className="header-description">Socialnet</div>
			</header>
			<nav className="navbar">
				<ul className="navbar__list">
					<li className="navbar__list-item"><a href="#">Profile</a></li>
					<li className="navbar__list-item"><a href="#">Messages</a></li>
					<li className="navbar__list-item"><a href="#">News</a></li>
					<li className="navbar__list-item"><a href="#">Music</a></li>
					<li className="navbar__list-item"><a href="#">Settings</a></li>
				</ul>
			</nav>
			<div className="content">
				<div className="img-wrapper">
					<img className="profile-img" src={image} />
				</div>
				<div className="content-inner">
					<div className="content-ava">ava</div>
					<div className="content-descr">descr</div>
				</div>
				<div className="posts">
					My posts
					<div className="new-post">
						new post
					</div>
					<div>
						post 1
					</div>
					<div>
						post 2
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
