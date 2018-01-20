import React, { Fragment } from "react";
import Header from "./components/header.jsx";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, hashHistory } from "react-router-dom";
import store from "./store/index.js";

import TracksContainer from "./containers/TracksContainer";
import Main from "./components/main.jsx";
import TrackContainer from "./containers/TrackContainer";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Fragment>
					<Header/>
					<main>
					<Switch>
						<Route path="/" exact component={Main}/>
						<Route path="/tracks" exact component={TracksContainer}/>
						<Route path="/tracks/:id" component={TrackContainer}/>
					</Switch>
					</main>
				</Fragment>
			</BrowserRouter>
		</Provider>
	)
}

export default App;