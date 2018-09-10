import React, { Fragment } from "react";
import Header from "./header";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch, hashHistory } from "react-router-dom";
import store from "../state/store";

import TrackListContainer from "../state/containers/TrackListContainer";
import Main from "./main";
import TrackContainer from "../state/containers/TrackContainer";

function App() {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Fragment>
					<Header/>
					<main>
					<Switch>
						<Route path="/" exact component={Main}/>
						<Route path="/tracks" exact component={TrackListContainer}/>
						<Route path="/tracks/:id" component={TrackContainer}/>
					</Switch>
					</main>
				</Fragment>
			</BrowserRouter>
		</Provider>
	)
}

export default App;