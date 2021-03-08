import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import './App.css'
import PostDetail from "./components/PostDetail/PostDetail";

function App() {
	return (
		<Router className="middle">
			<div>
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/users">Users</Link>
						</li>
					</ul>
				</nav>

				{/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route path="/Home">
						<Home></Home>
					</Route>
					<Route path="/about">
						<About></About>
					</Route>
					<Route path="/post/:id">
						<PostDetail></PostDetail>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
