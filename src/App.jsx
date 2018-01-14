import React, { Fragment } from "react";
import Header from "./components/header.jsx";
import TracksContainer from "./containers/TracksContainer";

function App() {
	return (
		<Fragment>
			<Header/>
			<TracksContainer/>
		</Fragment>
	)
}

export default App;